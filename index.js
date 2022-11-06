import checkOrderButton from "./module/checkOrderButton.js";
import chooseIngridient from "./module/chooseIngridient.js";
import drawOrderAndCalcPrice from "./module/drawOrderAndCalcPrice.js";
import drawPizza from "./module/drawPizza.js";
import removeElement from "./module/removeElement.js";
import removeElements from "./module/removeElements.js";


let base = document.getElementsByClassName('bottom')[0].children;
for (let elem of base) {
    for (let divs of elem.getElementsByTagName('div')) {
        divs.addEventListener('click',chooseIngridient);
  }
}

document.getElementById('button').addEventListener('click', checkOrderButton);

export default base;
