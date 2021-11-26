import P5 from 'p5';
// import colorDefaults from '../color/ColorData';
import ColorObject from '../color/ColorObject';

export default class Circle{
    p5: P5;
    location : P5.Vector;
    size: number;
    c: ColorObject;
    name: string;

    constructor(p5: P5, position: P5.Vector, size: number, c: ColorObject, name: string){
        this.location = p5.createVector(position.x, position.y);
        this.size = size;
        this.c = c;
        this.p5 = p5;
        this.name = name;
    }

    update() {
        this.c.update();
    }

    show() { 
        const p5 = this.p5;

        p5.noStroke();
        
        p5.fill(this.c.color.h, this.c.color.s, this.c.color.l, this.c.color.a);
        p5.ellipse(this.location.x, this.location.y, this.size, this.size);
        p5.fill('black');
        
        // p5.text(this.location.x + " " + this.location.y
        
        // , this.location.x - 30, this.location.y);
    }
}

