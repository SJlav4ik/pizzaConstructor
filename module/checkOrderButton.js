import { stage } from "./drawOrderAndCalcPrice.js";

export default function checkOrderButton(){
    if (stage !== 4){
        alert('Выберите все ингридиенты!');
    }else{
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "vyacheslavzhukovec@gmail.com",
            Password : "367909908833C3B900B17D863165E8776225",
            To : 'vyacheslavzhukovec@gmail.com',
            From : "vyacheslavzhukovec@gmail.com",
            Subject : "Pizza order",
            Body : `Заказ успешно оформлен:\n${viewOrder.innerHTML} \nCумма: ${document.getElementById('totalPrice').innerHTML}`
        });
        alert(`Заказ успешно оформлен:\n${viewOrder.innerText} \nCумма: ${document.getElementById('totalPrice').innerText}`);
        window.location.reload();
    }
}