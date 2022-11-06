export default function removeElements(elements){
    let event = new Event("click");          
    for (let spanElem of elements){
        spanElem.dispatchEvent(event);
    }
};