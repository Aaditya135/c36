var database;
var gameState = 0;
var playerCount;
var allPlayers;
var form;
var player;
var game;

function setup(){

    createCanvas(500,500);

    database = firebase.database();
    console.log(database);
    game = new Game()
    game.start()

}

function draw(){
   
    if(playerCount === 4){
        game.update(1);
    }

    if (gameState === 1){
        game.play()
    }



}

