let io = null;

exports.init = (server) => {
    io = require("socket.io")(server);
    // Add socket.io event handlers here
};

exports.getIO = () => {
    if (!io) {
        throw new Error("Socket.io not initialized");
    }
    return io;
}