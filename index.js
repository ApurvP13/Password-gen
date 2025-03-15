const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();
const numbers = "0123456789";
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

const characters = [...uppercase, ...lowercase, ...numbers, ...symbols];
console.log(characters);

const genBtn = document.getElementById("gen-btn");
const passOne = document.getElementById("pass1");
const passTwo = document.getElementById("pass2");
const sysMode = document.getElementById("mode");
const subHead = document.getElementById("sub-head");
let darkMode = true;

genBtn.addEventListener("click", () => {
  passOne.textContent = generatePass(characters);
  passTwo.textContent = generatePass(characters);
});

function generatePass(array) {
  let length = 15;
  let retPass = "";
  for (let index = 0; index < 15; index++) {
    const element = array[index];
    retPass += array[Math.floor(Math.random() * array.length)];
  }
  return retPass;
}

function copyElementText(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      // Optional: Provide user feedback that text was copied
      // For example, you could briefly change the element's style or show a tooltip
      const element = document.getElementById(id);
      const originalTitle = element.textContent;
      element.innerText = "Copied";
      setTimeout(() => {
        element.innerText = originalTitle;
      }, 1500);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

sysMode.addEventListener("click", () => {
  if (sysMode.textContent === "🔆") {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    sysMode.textContent = "🌙";
    sysMode.style.backgroundColor = "#ecfdf5";
    subHead.style.color = "#42454D";
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    sysMode.textContent = "🔆";
    sysMode.style.backgroundColor = "#1f2937";
    subHead.style.color = "#d5d4d8";
  }
});
