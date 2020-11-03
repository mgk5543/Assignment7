let input, button, intro, instructions, hint;

function setup() {
  // create canvas
  createCanvas(windowWidth, windowHeight);

  
    
    input = createInput();
    button = createButton('submit');
    intro = createElement('h2', 'Check the security of your password!');
    instructions = createElement('h2', 'Type your password here:');
    textOutput = createElement('h2', 'Security level: ');
    hint = createElement('h2', 'Hint: use capitalization, numbers, and symbols!');
    
    
    
    windowResized();

}

function checkPass() {
  let name = input.value();
  let securityLvl = 0;
  
    
  if(checkUppercase() == 1){
     securityLvl ++;
      console.log(1);
     }
  if(checkSymbol() == 1){
     securityLvl ++;
      console.log(2);
     }
  if(checkNumber() == 1){
     securityLvl ++;
      console.log(3);
     }
    
    
  if(securityLvl == 0){
     textOutput.html('Security level: not secure');
     }
  else if(securityLvl == 1){
     textOutput.html('Security level: kind of secure');
  }
  else if(securityLvl == 2){
     textOutput.html('Security level: secure');
  }
    else if(securityLvl == 3){
     textOutput.html('Security level: very secure');
  }
  
  input.value('');

}

function checkUppercase(){
  let name = input.value();
  var character='';
  for (let i = 0; i < name.length; i++){
      character = name.charAt(i);
      if(isUpper(character)){
          return 1;
        }
      }
    return 0;
  }

function isUpper(a){
    if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"){
        console.log(a);
        return a == a.toUpperCase();
    }
    return false;
}

function checkNumber() {
    let name = input.value();
    var char = '';
    for (let i = 0; i < name.length; i++){
        char = name.charAt(i);
        if ("0123456789".includes(char)) {
            return 1;
        }
    }
    
    return 0;
}


function checkSymbol(){
  let name = input.value();
  var character='';
  let symbol = 0;
  //If input contains symbol, return 1, return 0 otherwise
  for (let i = 0; i < name.length; i++){
      character = name.charAt(i);
      
    if(!"abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(character)){
        
       return 1;
       }
  }
    
    return 0;
}

function draw() {
  background(21, 23, 38);
  
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    
    input.position(0, 0+ height/5, 'absolute');
    input.style('margin-left', '30%');
    input.style('margin-right', '40%');
  
    button.position(input.x + width/3.2 +10, height/5, 'absolute');
    button.style('margin-left', '35%');
    button.style('margin-right', '35%');
    button.mousePressed(checkPass);
  
    intro.position(0, 0+ height/5-190, 'absolute');
    intro.style('margin-left', '35%');
    intro.style('margin-right', '35%');
    
    instructions.position(0, height/5-120, 'absolute');
    instructions.style('margin-left', '35%');
    instructions.style('margin-right', '35%');
    instructions.style('margin-top', '280px');
    textOutput.position(0, height/5 + 100, 'absolute');
    instructions.style('color', 'deepskyblue');
    textOutput.style('margin-left', '35%');
    textOutput.style('margin-right', '35%');
    
    hint.position(0, height/5 + 200, 'absolute');
    hint.style('color', 'deepskyblue');
    hint.style('margin-left', '35%');
    hint.style('margin-right', '35%');
    hint.style('margin-top', '100px');
    

    
    if(windowWidth < 1000){
        
        button.style('font-size', '13px');
        intro.style('font-size', '20px');
        instructions.style('font-size', '20px');
        textOutput.style('font-size', '20px');
        hint.style('font-size', '15px');
    }
    if (windowWidth >= 1000){
    button.style('font-size', '15px');
    intro.style('font-size', '30px');
    instructions.style('font-size', '30px');
    textOutput.style('font-size', '30px');
        hint.style('font-size', '20px');
    }
}









