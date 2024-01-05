const { User } = require('../models');

const userData = [
    {
        name: "John Doe",
        email: "bigJD@html.com",
        password: "password123"
    },
    {
        name: "Squilliam Fancyson",
        email: "SFThe3rd@seamail.com",
        password: "harharhar"
    },
    {
        name: "Gordon Freeman",
        email: "GordonF1970@blackmesa.com",
        password: "morphineadministered"
    },
    {
        name: "Dr. Wu",
        email: "DrHWu@ingen.com",
        password: "indoraptor123"
    },
    {
        name: "Nicholas Cage",
        email: "NicholasCage@nicholascage.com",
        password: "imavampire"
    },
    {
        name: "Roboute Guilliman",
        email: "EldarLuver999@imperiumofman.com",
        password: "ultramarines#1"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;