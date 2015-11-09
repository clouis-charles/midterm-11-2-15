function setup() {
    createCanvas(windowWidth,windowHeight); 
    
drawPig();


} 



function drawPig() {

// left ear 
    
    
    
    
    
//right ear 
    
    
    
    
    
    
// body 
    
    ellipse(windowWidth/2, windowHeight/2, 500, 450);

// eyes 
    ellipse(windowWidth/2-90, windowHeight/2-50, 50, 50); 
    ellipse(windowWidth/2+90, windowHeight/2-50, 50, 50); 
   
    
// nose 
    
    ellipse(windowWidth/2, windowHeight/2+60, 200, 150) 
    
    ellipse(windowWidth/2-40, windowHeight/2+60, 25, 75)
    ellipse(windowWidth/2+40, windowHeight/2+60, 25, 75)



}