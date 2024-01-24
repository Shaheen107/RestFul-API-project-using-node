const { v4: uuidv4 } = require('uuid');

let posts = [
    {
        id: uuidv4(),
        name: "shaheen",
        content: "this is post 1",
    },
    {
        id: uuidv4(),
        name: "gojo",
        content: "this is post 2",
    },
    {
        id: uuidv4(),
        name: "Yoji",
        content: "this is post 3",
    },
]

module.exports = posts