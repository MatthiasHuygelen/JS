const form = document.querySelector("form");

form.addEventListener("submit", function() {
    new FormData(form);
});

form.addEventListener("formdata", event => {
    const data = event.formData;
    const entries = Object.assign(...Array.from(data, ([x,y]) => ({[x]:y})))
    document.write('Welkom '+ entries.name);
});