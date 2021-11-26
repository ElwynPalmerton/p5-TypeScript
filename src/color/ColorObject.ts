import HslaValue from '../Interfaces/HslaValue';
import ColorDefaults from '../Interfaces/ColorDefaults';
import P5 from 'p5';

export default class ColorObject{
    color: HslaValue;
    rate: number;
    index: number;
    min: HslaValue;
    max: HslaValue;
    p: P5;
    range: HslaValue;
    colorName: string;

    constructor(p: P5, c: ColorDefaults, name: string){
        this.color = Object.assign({}, c.color);
        this.rate = p.random(0, 3) * 0.005;
        this.index = 0;
        this.min = c.min;
        this.max = c.max;
        this.range = this.calculateRange();
        this.colorName = name;
        this.p = p;
    }

    calculateRange() {
        var range: HslaValue = {h: 0, s: 0, l: 0, a:0};
        range.h = this.max.h - this.min.h;
        range.s = this.max.s - this.min.s;
        range.l = this.max.l - this.min.l;
        range.a = this.max.a - this.min.a;
        return range;
    }

    hueRangeUpdate(){
        // console.log(this.index);

        this.index += this.rate;  
        this.color.h = this.min.h + this.range.h * ((Math.sin(this.index) + 1) / 2);
        // this.color.h = this.index;
        // console.log(this.color.h);
    }

    saturationRangeUpdate(){
        this.index += this.rate;
        this.color.s = this.min.s + this.range.s * ((Math.sin(this.index) + 1) / 2);
    }

    lightnessRangeUpdate(){
        this.index += this.rate;
        this.color.l = this.min.l + this.range.l * ((Math.sin(this.index) + 1) / 2);
    }

    alphaRangeUpdate(){
        this.index += this.rate;
        this.color.a = this.min.a + this.range.a * ((Math.sin(this.index) + 1) / 2);
    }

    update(){
        // this.color.h = this.p.random(100);
        this.hueRangeUpdate();
        this.saturationRangeUpdate();
        // console.log(this.color.h);
        // this.lightnessRangeUpdate();
        // this.alphaRangeUpdate();
        
    }
}