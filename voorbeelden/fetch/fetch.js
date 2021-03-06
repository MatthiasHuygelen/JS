import { getData } from "./dataService.js";

const ul = document.querySelector('ul');
const btn = document.getElementById("search");
const amountInput = document.getElementById("amount");

function createPersonList() {
    ul.innerHTML = "";
    let url = 'https://randomuser.me/api/?results=';
    url += amountInput.value;

    getData(url)
    .then(data => data.results)
    .then(persons => persons.forEach( person => {
        let li = document.createElement("li"),
            img = document.createElement("img"),
            span = document.createElement("span");
        img.src = person.picture.medium;
        span.innerHTML = `${person.name.first} ${person.name.last}`
        li.appendChild(img);
        li.appendChild(span);
        ul.appendChild(li);
    }));

}

btn.addEventListener("click", createPersonList);
