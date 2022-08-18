var input,heading;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);
 

  //input box creation
  input = createInput();
  input.position(5,60)


  heading = createElement("h4","Enter Any Letter of the Alphabet")
  heading.position(5,20)

}

function draw() {

  
const value = input.value();

switch(value) {
 case "a":console.log("vowel");break;
 case "i":console.log("vowel");break;
 case "e":console.log("vowel");break;
 case "o":console.log("vowel");break;
 case "u":console.log("vowel");break;
 default:console.log("Please enter another character");break;
}

}

