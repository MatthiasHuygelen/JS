import { getData } from "./js/dataService.js";
import { createListElement } from "./js/elementService.js";

let list = document.querySelector("ul");
let items = getData();

items.forEach(item => {
    createListElement(list , item);
});


