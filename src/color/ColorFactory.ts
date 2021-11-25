import colorDefaults from "./ColorData";
import ColorObject from "./ColorObject";
import ColorRange from "./ColorRange";
import P5 from 'p5';

export default class ColorFactory {
    p5: P5;
    range: ColorRange;

    constructor(
        p5: P5,
        // colRange: ColorRange

    ){
        this.p5 = p5;
        this.range = new ColorRange(colorDefaults.min, colorDefaults.max);
    }

    getColor() {
        const newColor = new ColorObject(this.p5, colorDefaults);
        return newColor;
    }

    getColorInRange(){

    }

}