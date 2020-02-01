// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector("select");
const option = select.querySelector("option");
const defaultOption = "--- Choose Your Country ---";

if (option.innerText !== defaultOption) {
  localStorage.setItem("Country", option.innerText);
}
