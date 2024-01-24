const express = require("express")
const router = express.Router();
let { getAllList, AddNewListForm, PostNewList, getSingleList, updateList, editListForm, distroyList} = require("../controller/function")


router.route("/").get(getAllList)


router.route("/new").get(AddNewListForm)

router.route("/").post(PostNewList)

router.route("/:id").get(getSingleList)

router.route("/:id").patch(updateList)

router.route("/:id/edit").get(editListForm)

router.route("/:id").delete(distroyList)

module.exports = router;