import HslaValue from "../Interfaces/HslaColor";
import ColorFactory from "./ColorFactory";
import ColorObject from "./ColorObject";
import P5 from 'p5';

interface Range {
    min: number;
    max: number;
    inc: boolean;
    spectrum: number;
}

export default class ColorRange {
    h: Range;
    s: Range;
    l: Range;
    a: Range;
    p: P5;

    constructor(min = {h: 0, s: 0, l: 0, a: 0}, 
                max = {h: 360, s: 100, l: 100, a: 1}){

        if (min.h < 0) min.h = 0;
        if (min.s < 0) min.s = 0;
        if (min.l < 0) min.l = 0;
        if (min.a < 0) min.a = 0;
        
        if (max.h > 360) max.h = max.h % 360;
        if (max.s > 100) max.s = max.s % 100;
        if (max.l > 100) max.l = max.l % 100;
        if (max.a > 1) max.a = max.a - Math.floor(max.a);


        this.h = {
            min: min.h,
            max: max.h,
            inc: true,
            spectrum: max.h - min.h
        }
        
        this.s = {
            min: min.s,  
            max: max.s,
            inc: true,
            spectrum: max.s - min.s
        }

        this.l = {
            min: min.l,
            max: max.l,
            inc: true,
            spectrum: max.l - min.l
        }

        this.a = {
            min: min.a,
            max: max.a,
            inc: true,
            spectrum: max.a - min.a
        }
    }
    
    setHueRange(newMin: number, newMax: number){
        this.h = {
            min: newMin,
            max: newMax,
            inc: this.h.inc,
            spectrum: this.h.max - this.h.min
        }
    }

    setSaturationRange(newMin: number, newMax: number){
        this.h = {
            min: newMin,
            max: newMax,
            inc: this.h.inc,
            spectrum: this.h.max - this.h.min
        }
    }

    setLightnessRange(newMin: number, newMax: number){
        this.l = {
            min: newMin,
            max: newMax,
            inc: this.h.inc,
            spectrum: this.h.max - this.h.min
        }
    }

    setAlphaRange(newMin: number, newMax: number){
        this.h = {
            min: newMin,
            max: newMax,
            inc: this.h.inc,
            spectrum: this.h.max - this.h.min
        }
    }
}