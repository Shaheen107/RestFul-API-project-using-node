let posts = require("../init/array")
const { v4: uuidv4 } = require('uuid');


let getAllList = (req,res)=>{
    res.render("index.ejs", { posts })
}

let AddNewListForm = (req, res) => {
    res.render("new.ejs");
}

let PostNewList = (req, res) => {
    const { name, content } = req.body;
    const id = uuidv4()
    posts.push({ id, name, content })
    console.log(req.body)
    res.redirect("/posts")
}

let getSingleList = (req, res) => {
    const { id } = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(post)
    res.render("show.ejs", { post })
}

let updateList = (req, res) => {
    const { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
}

let editListForm = (req, res) => {
    const { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post })
}

let distroyList = (req, res) => {
    const { id } = req.params;
    posts = posts.filter((p) => id !== p.id)
    res.redirect("/posts")
}


module.exports = {
    getAllList, AddNewListForm, PostNewList, getSingleList, updateList, editListForm, distroyList
}