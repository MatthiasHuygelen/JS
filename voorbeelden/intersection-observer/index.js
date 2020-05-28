
let status = document.getElementById("status");

let observer = new IntersectionObserver(handler);

observer.observe(document.getElementById("blok"));

function handler(entries) {
  for (entry of entries) {
    if (entry.isIntersecting) {
      status.className = "visible";
      status.textContent = "Visible";
    } else {
      status.className = "invisible";
      status.textContent = "Invisible";
    }
  }
}
