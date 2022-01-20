const fs = require("fs");
const path = require("path");
const help = require('./command/help');
const organize = require('./command/organize');
const tree = require('./command/tree')
let inputArr = process.argv.slice(2);
let types = {
  media: ["mp4", "mkv", "mp3", "jpg", "jpeg", "gif"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
};

let com = inputArr[0];

switch (com) {
  case "tree":
    tree.treekey(inputArr[1]);
    break;
  case "organize":
    organize.organizekey(inputArr[1]);
    break;
  case "help":
    help.helpkey()
    break;
  default:
    console.log("please enter valid input");
    break;
}




