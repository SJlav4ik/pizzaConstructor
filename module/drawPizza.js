const pizzaImage = [".\\img\\empty.png" , ".\\img\\1_4.png" , ".\\img\\2_4.png" , ".\\img\\3_4.png", ".\\img\\fullPizza.png" ];
export default function drawPizza(stage){
    let imageContainer = document.getElementsByClassName('imgPizza')[0];
    imageContainer.src = pizzaImage[stage];
}