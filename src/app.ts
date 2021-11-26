import P5 from "p5";
import "p5/lib/addons/p5.dom";
// import "p5/lib/addons/p5.sound";	// Include if needed
import "./styles.scss";

import ColorCircleGroup from "./Circles/ColorCircleGroup";

class Animal {
	name: string;
	word: string;
	constructor(name: string, word: string){
		this.name = name;
		this.word = word;
	}
}

class Dog extends Animal {
	dogType: string;

	constructor(name: string, word: string, dogType: string){
		super(name, word);
		this.dogType = dogType;
	}

	getName(){
		return this.name;
	}
}

let dog1 = new Dog("Bob", "Hello", "Big");
let dog2 = new Dog("Dave", "Bye", "Small");

console.log(dog1.getName());
console.log(dog2.getName());



const sketch = (p5: P5) => {
	let circles: ColorCircleGroup;

	// SETUP
	p5.setup = () => {

		circles = new ColorCircleGroup(p5, 1, 1);

		p5.colorMode(p5.HSL);

		const canvas = p5.createCanvas(600, 600);
		canvas.parent("app");
	
		
		
	};
	
	// The sketch draw method
	p5.draw = () => {
		
		p5.background(50);
		circles.update();
		circles.show();

	};
};


new P5(sketch);