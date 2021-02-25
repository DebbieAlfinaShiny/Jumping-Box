var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(200,150,100,100);
    block1.shapeColor = rgb (92,206,155);

    block2 = createSprite(300,150,100,100);
    block2.shapeColor = rgb (209,63,219);

    block3 = createSprite(400,150,100,100);
    block3.shapeColor = rgb (255,230,206);
    
    block4 = createSprite(500,150,100,100);
    block4.shapeColor = rgb (256,206,255);

    //create ball sprite and give velocity
    ball = createsprite(random(20,750),200,50,50);
    ball.shapeColor("blue");
}

function draw() {
    background(rgb(169,169,169));
    //add condition to check if box touching surface and make it box
    if(block1.isTouching(ball)){
    ball.shapeColor = rgb (92,206,155);
    ball.velocityX = 0;
    music.stop();
    }
    
    if(block2.isTouching(ball)){
    ball.shapeColor = rgb (209,63,219);
    ball.velocityX = 0;
    music.stop();
    }
    
    if(block3.isTouching(ball)){
    ball.shapeColor = rgb (255,230,206);
    ball.velocityX = 0;
    music.stop();
    }

    if(block4.isTouching(ball)){
    ball.shapeColor = rgb (256,206,255);
    ball.velocityX = 0;
    music.stop();
    }
}
