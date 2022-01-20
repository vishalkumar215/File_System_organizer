const fs = require("fs");
const path = require("path");
const help = require('./command/help');
const organize = require('./command/organize');
const tree = require('./command/tree')
let inputArr = process.argv.slice(2);


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




