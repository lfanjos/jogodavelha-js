class ComputerController {

    constructor(board){
        this._boardPlaying = board;
    }

    playRandom(tiles){
        let randomMove = Math.floor(Math.random() * 9);
        while (tiles[randomMove].innerHTML !== ""){
            if (!tiles.some(tile=>tile.innerHTML === "")) break;
            randomMove = Math.floor(Math.random() * 9);
        }
        
        return randomMove;
    }

    playTicTacToe(tiles, symbol) {
        
        let blockingMove = this.findBlockingMove(tiles, symbol);
        if (blockingMove !== -1) {
          return blockingMove;
        }
      
       
        let randomMove = Math.floor(Math.random() * 9);
        while (tiles[randomMove].innerHTML !== "") {
          if (!tiles.some(tile => tile.innerHTML === "")) break;
          randomMove = Math.floor(Math.random() * 9);
        }
        return randomMove;
      }
      
    findBlockingMove(tiles, symbol) {
        
        for (let i = 0; i < 9; i += 3) {
          let row = [tiles[i], tiles[i + 1], tiles[i + 2]];
          let emptyTile = row.find(tile => tile.innerHTML === "");
          let countSymbols = row.filter(tile => tile.innerHTML === symbol).length;
          if (countSymbols === 2 && emptyTile !== undefined) {
            return tiles.indexOf(emptyTile);
          }
        }
      
        
        for (let i = 0; i < 3; i++) {
          let column = [tiles[i], tiles[i + 3], tiles[i + 6]];
          let emptyTile = column.find(tile => tile.innerHTML === "");
          let countSymbols = column.filter(tile => tile.innerHTML === symbol).length;
          if (countSymbols === 2 && emptyTile !== undefined) {
            return tiles.indexOf(emptyTile);
          }
        }
      
        
        let diagonal1 = [tiles[0], tiles[4], tiles[8]];
        let emptyTile1 = diagonal1.find(tile => tile.innerHTML === "");
        let countSymbols1 = diagonal1.filter(tile => tile.innerHTML === symbol).length;
        if (countSymbols1 === 2 && emptyTile1 !== undefined) {
          return tiles.indexOf(emptyTile1);
        }
      
        let diagonal2 = [tiles[2], tiles[4], tiles[6]];
        let emptyTile2 = diagonal2.find(tile => tile.innerHTML === "");
        let countSymbols2 = diagonal2.filter(tile => tile.innerHTML === symbol).length;
        if (countSymbols2 === 2 && emptyTile2 !== undefined) {
          return tiles.indexOf(emptyTile2);
        }
      
        
        return -1;
      }

}