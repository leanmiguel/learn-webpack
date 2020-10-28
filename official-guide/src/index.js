import "./style.css";
import Icon from "./heart.png";

import Data from "./data.xml";
import Notes from "./data.csv";

const component = () => {
  const element = document.createElement("div");
  // element.innerHTML = _.join(["hello", "webpack"], " ");
  element.innerHTML = "yeah";
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  return element;
};

document.body.appendChild(component());

import toml from "./data.toml";
import yaml from "./data.yaml";
import json from "./data.json5";

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`
