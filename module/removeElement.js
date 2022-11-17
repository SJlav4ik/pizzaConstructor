import drawPizza from "./drawPizza.js";

export default function removeElement(element,currentElem, stage){
    element.className='';
    let priceElem = document.getElementById('totalPrice');
    let price = priceElem.innerText;
    let value = Number(price.substring(0,price.length-1)) - Number(currentElem.getAttribute('price'));
    priceElem.innerText = value+"$";
    let spans = currentElem.parentElement.getElementsByTagName('span');
        if(spans.length > 2){
            currentElem.parentElement.removeChild(currentElem);   
        }
        else
        {
            currentElem.parentElement.parentElement.removeChild(currentElem.parentElement);
            stage--;
            drawPizza(stage);
        } 
        return stage; 
}
