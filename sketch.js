
console.log("hello");





function setup(){
    createCanvas(600,200)

    trex=createSprite(50,170,10,10);
    trex.addAnimation("running",trex_running)
    trex.scale=0.5;

    ground=createSprite(300,180,600,1);


}

function draw(){
    background("white")

    if(keydown("space")){
        trex.velocityY=-5;
    }
    trex.velocityY=trex.velocityY+0.5;

    trex.collide(ground)



    drawSprites()
}