// Import the necessary modules here.
const fs = require("fs");
const path= require("path");


exports.getAbsolutePath = (filePath) => {
    const file = path.resolve(filePath);
    return file;
};
