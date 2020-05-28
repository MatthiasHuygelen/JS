export function createListElement(list , item){
    let newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(item));
    list.appendChild(newItem);
}
