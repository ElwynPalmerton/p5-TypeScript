import ColorFactory from "../color/ColorFactory";
import p5 from "p5";
import Circle from "./Circle";
import colorDefaults from "../color/ColorData";

export default class CircleGroup {

    x: number;
    y: number;
    objects: Circle[][];
    count: number;
    name: string;
    p: p5;

    constructor(p, x, y){
        this.x = x;
        this.y = y;
        this.objects = [];
        this.count = 0;
        this.p = p;

        let widthIncrement = 300 / x + 1;
        let heightIncrement = 300 / y + 1;

        let pos = p.createVector(300, 100);
        let size = 100;
        
        let colorFactory = new ColorFactory(this.p);
        
        for (let i = 0; i < 5; i++) {
            let newRow = [];
            for (let j = 0; j < 5; j++) {
                let name = i.toString() + j.toString();
                console.log("name: ", name);

                let colorFromFactory = colorFactory.getColor(name);
                let pos = p.createVector(i * 100 + 100, j * 100 + 100);
                let size = 75;
                let newCircle = new Circle(this.p, pos, size, colorFromFactory, name);
                newRow.push(newCircle);
            }
            this.objects.push(newRow);
     
        }
    }

    update(){
        this.objects.forEach(row =>{
            row.forEach(c =>{
                c.update();
            })
        })
    }

    show() {
        this.objects.forEach(row =>{
            row.forEach(c =>{
                c.show();
            })
        })
    }
}

