import p5 from 'p5';
import P5 from 'p5';
import ColorObject from '../color/ColorObject';
import HslaValue from '../Interfaces/HslaColor'

export default class Circle{
    p5: P5;
    location : P5.Vector;
    size: number;
    c: ColorObject;

    constructor(p5: P5, position: P5.Vector, size: number, color: ColorObject){
        this.location = p5.createVector(position.x, position.y);
        this.size = size;
        this.c = color
        this.p5 = p5;
    }

    update() {
        // this.c.update();
    }

    show() { 
        const p5 = this.p5;

        p5.noStroke();
        p5.fill(this.c.h, this.c.s, this.c.l, this.c.a);
        p5.ellipse(this.location.x, this.location.y, this.size, this.size);
    }
}
