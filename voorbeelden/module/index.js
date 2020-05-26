import { getData } from "./dataService.js";
import { createListElement } from "./elementService.js";

let list = document.querySelector("ul");
let items = getData();

items.forEach(item => {
    createListElement(list , item);
});


