class TicTacController {

    constructor(){
        this._board = document.getElementsByClassName("container")[0];
        this._tiles = [...this._board.children];
        this._display = document.querySelector(".display > span");
        this._playerTurn = this.getRandomPlayer();
        this._computer = new ComputerController(this._board);
        this._playing = true;
        this._scoreX = 0;
        this._scoreO = 0;

        
        this.updateDisplay();
        this.play();
        this.listenPlayer();

    }

    checkEndOfGame(){

        let winner = this.checkWin();

        if (winner){
            document.querySelector(".display--announcer").innerHTML = `O jogador ${winner.winner} ganhou o jogo!!!`;
            this._playing = false;
            return true;
        }

        if(!this._tiles.some(tile=>tile.innerHTML === "")){
            document.querySelector(".display--announcer").innerHTML = `Deu velha!!!`;
            this._playing = false;
            return true;
        }

    }

    checkWin(){

        const possibleWin = [
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        let winner = possibleWin.map(p=>{

            if ([this._tiles[p[0]].innerHTML, this._tiles[p[1]].innerHTML, this._tiles[p[2]].innerHTML].join("") === "XXX"
                ||
                [this._tiles[p[0]].innerHTML, this._tiles[p[1]].innerHTML, this._tiles[p[2]].innerHTML].join("") === "OOO"
            ){
                return {'winner': this._tiles[p[0]].innerHTML}
            }
            return false;

        })
        winner = winner.filter(el=> el)
        if (winner.length > 0){
            if (winner[0].winner === 'X'){
                this._scoreX += 1;
            } else {
                this._scoreO += 1;
            }
            this.updateScore();
            return winner[0];
        }
        return false;

    }

    listenPlayer(){

        document.addEventListener('click', e=>{

            if (this._playerTurn === 'X' && this._playing){

                if (e.target.innerHTML === ""){
                    e.target.innerHTML = 'X';
                    this._playerTurn = 'O';
                    this.updateDisplay();
                    if(!this.checkEndOfGame()){

                        this.play();
                    }
                }
            }

            if (e.target.id === 'reset'){
                this.resetGame();
            }

        })

    }

    resetGame(){
        this._tiles = [...this._board.children].map(tile=>{
            
            tile.innerHTML = "";
            return tile;
        });
        

        this._playerTurn = this.getRandomPlayer();
        this._playing = true;

        this.updateDisplay();
        document.querySelector(".display--announcer").innerHTML = ""
        this.play();
    }

    play(){

        setTimeout(()=>{
            
            if (this._display.innerHTML === "O" && this._playing){
                let computerMove = this._computer.playTicTacToe(this._tiles, "X");
    
                this._tiles[computerMove].innerHTML = "O";
    
                this._playerTurn = "X";
            }
            this.checkEndOfGame();
            this.updateDisplay();
    

        }, 1000)


        

        
    }

    updateScore(){

        document.querySelector(".display--score > .playerX").innerHTML = this._scoreX;
        document.querySelector(".display--score > .playerO").innerHTML = this._scoreO;

    }

    updateDisplay(){
        const swapClasses = (classToAdd, classToRemove)=>{
            this._display.classList.add(classToAdd);
            this._display.classList.remove(classToRemove);
        }

        this._display.innerHTML = this._playerTurn;
        if (this._display.innerHTML === 'X'){
            swapClasses('playerX', 'playerO');
        } else {
            swapClasses('playerO', 'playerX');
        }
    }

    getRandomPlayer(){
        if (Math.random() > 0.5){
            return 'X';
        }
        return 'O';
    }

}