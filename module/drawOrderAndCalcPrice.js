import drawPizza from "./drawPizza.js";
import removeElement from "./removeElement.js";
import removeElements from "./removeElements.js";
import base from "../index.js"

let viewOrder = document.getElementById('viewOrder');
export let stage;

export default function drawOrderAndCalcPrice(){
    let viewOrderContent = [];
    let totalPrice = 0;
    stage = 0;
    for (let elem of base) {
        let header = elem.getElementsByTagName('h2')[0].innerText;
        let elements = [];
        for (let divs of elem.getElementsByTagName('div')) {
            if(divs.className === 'checked'){
                let spanElem = document.createElement("span");
                let price = divs.getAttribute('price');
                spanElem.innerText = divs.innerText;
                spanElem.className = 'menuElements';
                spanElem.setAttribute('price',price);
                spanElem.addEventListener('click', ()=>{removeElement(divs,spanElem)}, {once:true});
                elements.push(spanElem);
                totalPrice += Number(price);
            }        
        }
        if(elements.length>0){
            stage++;
            let divElem = document.createElement("div");
            let spanHeader = document.createElement("span");
            spanHeader.innerText = header + " : ";
            spanHeader.className = 'menuHeader';
            spanHeader.addEventListener('click', ()=>{removeElements(elements)}, {once:true});
            divElem.appendChild(spanHeader);
            for (let spanElem of elements){
                let br = document.createElement("br");
                divElem.appendChild(br);
                divElem.appendChild(spanElem);
                spanElem.addEventListener('click', ()=>{br.parentElement.removeChild(br)}, {once:true});                
            }
            viewOrderContent.push(divElem);
        }
    }
    viewOrder.innerHTML = "";
    for (let content of viewOrderContent){
        viewOrder.appendChild(content);
    }
    
    document.getElementById('totalPrice').innerText = totalPrice + '$';
    drawPizza(stage);
}
