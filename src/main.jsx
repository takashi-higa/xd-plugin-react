require("./react-shim")
const style = require("./styles.css")
const React = require("react")
const ReactDOM = require("react-dom")
const HelloForm = require("./components/HelloForm")

let dialog;
function getDialog() {
  if (!dialog) {
    dialog = document.createElement("dialog");
    ReactDOM.render(<HelloForm dialog={dialog} />, dialog);
  }
  return dialog
}

module.exports = {
  commands: {
    menuCommand: () => document.body.appendChild(getDialog()).showModal()
  }
};
