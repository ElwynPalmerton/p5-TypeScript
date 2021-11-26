import colorDefaults from "./ColorData";
import ColorObject from "./ColorObject";
import P5 from 'p5';

export default class ColorFactory {
    p5: P5;

    constructor(
        p5: P5,
        // colRange: ColorRange

    ){
        this.p5 = p5;
    }

    getColor() {
        const newColor = new ColorObject(this.p5, colorDefaults, 'from color factory');
        return newColor;
    }

    getColorInRange(){

    }

}