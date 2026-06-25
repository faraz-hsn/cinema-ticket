import {Reservable} from "./Reservable.js"
export class Cinema<T extends Reservable>{
    private items:T[]=[];

    add(item:T):void{
        this.items.push(item);
    }

    getSelectedSeats():T[]{
        return this.items.filter((item:any) => item.isSelected());
    }

    render(container:HTMLDivElement):void{
        this.items.forEach((item:any)=>{
            if(item.loadReservedFromStorage) item.loadReservedFromStorage();
            if(item.getElement) container.appendChild(item.getElement());
        })
    }

}