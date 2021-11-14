var gamestate = "inicio";
var player

function setup(){
    Canvas = createCanvas(windowWidth-20,windowHeight-20);

    

}

function draw(){
    background(255);
    player = createSprite(550,500,80,80);
    player.shapeColor = "green";
    player.visible = false;
    if(keyDown("LEFT_ARROW")){ 
        player.velocityX = -10; 
        clear();
    }
    
    if(gamestate === "inicio"){
        strokeWeight(4);
        stroke("black");
        textSize(80);
        fill("white");
        text("ColorGuyAdventure", 550,500);
        textSize(50);
        text("Preciona espacio para iniciar", 550, 800);
        if(keyDown("SPACE")){
           gamestate = "instrucciones";  
        }
               
    }

    if(gamestate === "instrucciones"){
        strokeWeight(4);
        stroke("black");
        textSize(40);
        fill("white");
        text("En cada batalla, tendras que rellenar de color a los enemigos", 550,100);
        text("si te quitan el color habras perdido", 550,150);
        textSize(30);
        text("-Con las flechas mueve al personaje debajo que la accion que quieras hacer y presiona espacio para ejecutarlo",50 ,250);
        text("-Al ejecutar el martillo espera 5 segundos para presionar espacio",50,300)
        text("-Al ejecutar el salto, presiena espacio cuando toques al enemigo",50,350)
        textSize(50);
        text("Preciona *i* para iniciar",600 ,500)
        if(keyDown("i")){
            gamestate = "mapa"; 
        }
    }

    if(gamestate === "mapa"){
        
        var nivel1 = createSprite(200,100,70,70);
        var nivel2 = createSprite(100,500,70,70);
        var nivel3 = createSprite(40,70,70,70);
        var nivel4 = createSprite(800,900,70,70);
        var nivel5 = createSprite(1000,100,70,70);
        var nivel6 = createSprite(1500,500,70,70);
        player.visible = true
        
    }
    

    
        
    

    drawSprites();
}
