export default class hsalObject{

    h: number;
    s: number;
    l: number;
    a: number;

    constructor(hue, saturation, lightness, alpha){
        this.h = hue;
        this.s = saturation;
        this.l = lightness;
        this.a = alpha;
    }
}