import drawOrderAndCalcPrice from "../module/drawOrderAndCalcPrice.js";

export default function chooseIngridient(){
    let parent = this.parentElement;
    let maxCheck = parent.getAttribute('maxcheck');
    let checkedElementsCnt = 0;
    let childParent = parent.getElementsByTagName('div');
    if (this.className === 'checked'){
        this.className = '';
        drawOrderAndCalcPrice();
    }else{
        for(let elem of childParent){
            if(elem.className === 'checked'){
                checkedElementsCnt++;
            }
        }
        if(checkedElementsCnt < maxCheck)
        {
        this.className = 'checked';
        drawOrderAndCalcPrice();
        }
    }
}