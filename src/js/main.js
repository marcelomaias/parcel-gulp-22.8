import { Banana } from "./components/Banana";

window.addEventListener("load", init);

function init() {
  const box = document.querySelector(".box");
  const title = document.createElement("h1");
  title.innerText = "Parcel Starter";

  new Banana(box);
  {
    box ? box.appendChild(title) : null;
  }

  console.log("Parcel Starter.");
}
