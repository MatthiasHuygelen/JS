export function getData(url){
    return fetch(url)
        .then((data) => data.json());
}