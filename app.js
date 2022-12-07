//обьявляю глобальные перемнные 
const inp = document.querySelector(".inp");
const out = document.querySelector(".out");
const counter = document.querySelector(".number-list")
let sum = 0;

function createBox(text) {
  let div = document.createElement("div");
  div.classList.add("box");
  div.innerHTML = text; 
  let checkBox = document.createElement("input");
  checkBox.onchange = () => {
    if(checkBox.checked == true){
            div.classList.add('checked')
            sum--
    } else { 
            div.classList.remove('checked')
            sum++
    }
    counter.innerHTML = sum;
  }
  checkBox.setAttribute("type", "checkbox");
  div.appendChild(checkBox);
  out.appendChild(div);
  sum++
  counter.innerHTML = sum; 
}
document.querySelector(".btn").addEventListener('click', () => {
    createBox(inp.value)
})
