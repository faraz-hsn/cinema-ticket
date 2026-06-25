"use strict"
import {Cinema} from "./models/Cinema.js"
import {Seat} from "./models/Seats.js"

const cinemaDiv = document.getElementById('cinema') as HTMLDivElement;
const cinema = new Cinema<Seat>;
const TICKET_PRICE = 10;

for(let i=1;i<=5;i++){
    for(let j=1;j<=8;j++){
        const seat=new Seat(i,j);
        cinema.add(seat);
    }
}

cinema.render(cinemaDiv);

const buyButton = document.getElementById('buyButton') as HTMLButtonElement;
buyButton?.addEventListener('click', ()=>{
    const selected = cinema.getSelectedSeats();
    if (selected.length===0){
    alert("You need to select at least 1 seat to continue!")
    return;
    }

    const total = selected.length * TICKET_PRICE;
    const confirmed = confirm(`You selected ${selected.length} tickets. \nTotal amount to pay is $${total}\nDo you want to proceed?`);

    if(confirmed){
        selected.forEach(seat=>{
            seat.reserve();
            seat.saveToStorage();
        })
        const invoice = document.getElementById("invoice") as HTMLDivElement;
        const invoiceDetails = document.getElementById("invoice-details") as HTMLDivElement;

        invoiceDetails.innerHTML = `<p> Total Amount :<b>${total.toLocaleString()} CAD </b></p>
        <p>Reserved seats:</p>
        <ul>
        ${selected.map(s=>`<li> Row ${s.getInfo().row} - Number ${s.getInfo().number}</li>`).join("")}
        </ul>`

        invoice.style.display = 'block';
    }
})

const clearDataButton = document.getElementById('clearStorageButton') as HTMLButtonElement;
clearDataButton.addEventListener('click', ()=>{
    const confirmed = confirm('Do you want to clear the selected seats information?')
    if(confirmed){
        localStorage.clear();
        location.reload();
        alert('All the infroamtion is already cleared!')
    }
})

const showPurchaseButton = document.getElementById('showPurchaseButton') as HTMLButtonElement;
showPurchaseButton.addEventListener('click', ()=>{
    let count:number = 0;
    for(let i=1;i<=5;i++){
        for(let j=1;j<=8;j++){
            const key= `seat-${i}-${j}`;
            if(localStorage.getItem(key) === 'reserved'){
                count++;
            }

        }
    }
    const total_price = count*TICKET_PRICE;
    alert(`You have reserved ${count} seats!\nTotal amount of your purchase is $${total_price.toLocaleString()}!`)

})
