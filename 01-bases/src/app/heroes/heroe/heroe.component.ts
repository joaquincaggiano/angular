import { Component } from "@angular/core";

@Component({
    selector: "app-heroe",
    templateUrl: "heroe.component.html"
})
export class HeroeComponent{
    name: string = "IronMan";
    age: number = 40;

    get nameCapitalize(): string {
        return this.name.toUpperCase();
    }

    getName(): string{
        return `${this.name} - ${this.age}`;
    }

    changeName() {
        if(this.name === "IronMan"){
            this.name = "SpiderMan";
        }else {
            this.name = "IronMan";
        }
    }

    changeAge() {
        if(this.age === 40){
            this.age = 24
        } else {
            this.age = 40;
        }
    }
}