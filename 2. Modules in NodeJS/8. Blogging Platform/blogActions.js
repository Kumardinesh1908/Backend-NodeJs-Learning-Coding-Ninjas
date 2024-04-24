// Do not change the pre-written code.
// Make the necessary imports here.
const fs = require("fs");
const path = require("path");


export const writeBlog = (filePath, name) => {
    fs.appendFileSync(path.join(filePath), name);
}

export const publishBlog = (filePath) => {
    return fs.readFileSync(path.join(filePath), {encoding:"utf-8"});
}