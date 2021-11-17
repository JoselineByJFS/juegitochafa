var gamestate = "inicio";
var player;
var nivel1, nivel2, nivel3, nivel4, nivel5, nivel6;

function setup(){
    Canvas = createCanvas(windowWidth-20,windowHeight-20);
    edges = createEdgeSprites();    
    lives = 3;

    player = createSprite(550,500,80,80);
    player.shapeColor = "green";
    player.visible = false;

    nivel1 = createSprite(200,100,70,70);
    nivel1.visible = false;
    nivel2 = createSprite(100,500,70,70);
    nivel2.visible = false;
    nivel3 = createSprite(40,70,70,70);
    nivel3.visible = false;
    nivel4 = createSprite(800,900,70,70);
    nivel4.visible = false;
    nivel5 = createSprite(1000,100,70,70);
    nivel5.visible = false;
    nivel6 = createSprite(1500,500,70,70);
    nivel6.visible = false;
}

function draw(){
    background("white");
    
    if(gamestate === "inicio"){
        strokeWeight(5);
        stroke("black");
        textSize(80);
        textAlign(CENTER);
        fill("white");
        text("*ColorGuyAdventure*", canvas.width / 2, canvas.height -150);
        textSize(50);
        text("Presiona la tecla de espacio para iniciar", canvas.width / 2, canvas.height -50);
        if(keyDown("SPACE")){
           gamestate = "instrucciones";  
        }       
    }

    if(gamestate === "instrucciones"){
        strokeWeight(4);
        stroke("black");
        textSize(40);
        fill("white");
        textAlign(CENTER);
        text("En cada batalla, tendras que rellenar de color a los enemigos", canvas.width/2, 100);
        text("si te quitan el color habras perdido", canvas.width/2, 150);
        textSize(30);
        textAlign(LEFT);
        text("-Con las flechas mueve al personaje debajo que la accion que quieras hacer y presiona espacio para ejecutarlo",50 ,250);
        text("-Al ejecutar el martillo espera 5 segundos para presionar espacio",50,300)
        text("-Al ejecutar el salto, presiena espacio cuando toques al enemigo",50,350)
        textSize(50);
        textAlign(CENTER);
        text("Presiona *i* para iniciar",canvas.width/2,500)
        if(keyDown("i")){
            gamestate = "mapa"; 
        }
    }

    if(gamestate === "mapa"){
        player.visible = true;
        nivel1.visible = true;
        nivel2.visible = true;
        nivel3.visible = true;
        nivel4.visible = true;
        nivel5.visible = true;
        nivel6.visible = true;

        if(keyDown("LEFT_ARROW")){ 
            player.x= player.x -5; 
        }
    }  
    
    
    player.bounce(edges[0]);
    player.bounce(edges[1]);
    player.bounce(edges[2]);
    player.bounce(edges[3]);
    
    drawSprites();
}
