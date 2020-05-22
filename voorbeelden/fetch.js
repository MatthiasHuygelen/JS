const ul = document.querySelector('ul');
const btn = document.getElementById("search");
const amountInput = document.getElementById("amount");

function createPersonList() {
    ul.innerHTML = "";
    let url = 'https://randomuser.me/api/?results=';
    url += amountInput.value;

    fetch(url)
        .then((data) => data.json())
        .then(function (data) {
            let persons = data.results;
            console.log(persons)
            persons.map(function (person) {
                let li = document.createElement("li"),
                    img = document.createElement("img"),
                    span = document.createElement("span");
                img.src = person.picture.medium;
                span.innerHTML = `${person.name.first} ${person.name.last}`
                li.appendChild(img);
                li.appendChild(span);
                ul.appendChild(li);
            })
        })
}

btn.addEventListener("click", createPersonList);
