class Form{

    constructor(){
        this.title = createElement('h1');
        this.input = createInput('name');
        this.button = createButton('Play');
        this.greeting = createElement('h2');
    }

    hide(){
        this.title.hide()
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }

    display(){
        this.title.html("CarRacingGame")
        this.title.position(130,50)
        this.input.position(130,160)
        this.button.position(250,200)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount += 1
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("Welcome " + player.name)
            this.greeting.position(130,100)
        })
    }
}