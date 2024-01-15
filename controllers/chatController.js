// chatController.js
const roomsUsersMap = new Map(); // Map of rooms to users
const db = require("../models"); // Import database

const onConnection = (socket, io) => {
socket.on("join", ({ room, name }) => {
	socket.join(room);
	addOrJoinRoom(room, name);
	emitRoomStatus(room, name, socket); // Updated to include 'name'
});

socket.on("message", ({ room, name, message }) => {
	if (room && name && message) {
		io.to(room).emit("message", { name, message });
	}
});

socket.on("leave", ({ room, name }) => {
	socket.leave(room);
	removeUserFromRoom(room, name);
	notifyRoomLeaving(room, name, socket);
});

socket.on("typing", ({ room, name }) => {
	socket.to(room).emit("typing", `${name} is typing...`);
});

socket.on("disconnect", () => {
	console.log("User disconnected");
	// Additional disconnect logic if needed
});
};

const addOrJoinRoom = (room, name) => {
	if (!roomsUsersMap.has(room)) {
		roomsUsersMap.set(room, new Set());
	}
	roomsUsersMap.get(room).add(name);
}; 

const emitRoomStatus = (room, name, socket) => {
	if (roomsUsersMap.get(room).size === 1) {
		socket.emit("message", {
			name: "System",
			message: "You are the only one in this room",
		});
	} else {
		socket.emit("roomUsers", [...roomsUsersMap.get(room)]);
		socket
			.to(room)
			.emit("message", {
				name: "System",
				message: `${name} has joined the room`,
			});
	}
};

const removeUserFromRoom = (room, name) => {
	if (roomsUsersMap.has(room)) {
		roomsUsersMap.get(room).delete(name);
		if (roomsUsersMap.get(room).size === 0) {
			roomsUsersMap.delete(room);
		}
	}
};

const notifyRoomLeaving = (room, name, socket) => {
	socket
		.to(room)
		.emit("message", { name: "System", message: `${name} has left the room` });
};

const getChat = async (req, res) => {
	try {
		// Retrieve the user's ID from the session
		const userId = req.session.userId;

		// Fetch the user from the database
		const user = await db.User.findByPk(userId);

		if (user) {
			// Render the chat view with the user's name
			res.render("chat", { name: user.name });
		} else {
			// Handle the case where the user is not found
			res.status(404).send("User not found");
		}
	} catch (error) {
		console.error("Error fetching user data for chat", error);
		res.status(500).send("Internal Server Error");
	}
};

module.exports = {
	onConnection,
	getChat,
	notifyRoomLeaving,
};
