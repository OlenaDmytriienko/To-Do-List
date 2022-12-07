//обьявляю глобальные перемнные 
const inp = document.querySelector(".inp");
const out = document.querySelector(".out");
const counter = document.querySelector(".number-list")
let sum = 0;
//обьявляем функцию по созданию блока в который будет выводиться таск с чекбоксом
function createBox(text) {
  let div = document.createElement("div");
  div.classList.add("box");
  div.innerHTML = text; 
//создаю новый элемент = чекбокс и прописываю условие если нажато - уменьшаем счетчик и наоборот
  let checkBox = document.createElement("input");
  checkBox.onchange = () => {
    console.log(checkBox.checked);
    if(checkBox.checked == true){
            div.classList.add('checked')
            sum--
    } else { 
            div.classList.remove('checked')
            sum++
    }
    counter.innerHTML = sum;
  }
  checkBox.setAttribute("type", "checkbox"); //уставливаю тип элемента
// через аппенд вставляю их в блоки
  div.appendChild(checkBox);
  out.appendChild(div);
  sum++
  counter.innerHTML = sum; 
}
// по клику отраб. стрелочная функция с внесением значения написаного в инпуте, слушатель реакции на нажатие кнопки
document.querySelector(".btn").addEventListener('click', () => {
    console.log("test inp");
    createBox(inp.value)
})
