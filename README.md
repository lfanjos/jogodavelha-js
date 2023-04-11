# Tic Tac Toe Controller

Essa classe cocntrola o comportamento do Jogo da Velha.

`Constructor`
O método construtor inicializa o jogo definindo o tabuleiro, o jogador da vez, o computador e o placar. Além disso, invoca os métodos updateDisplay() e play(), além de escutar por clicks do jogador com o método listenPlayer()

`checkEndOfGame()`
Esse método avalia se o jogo acabou checando se existe um ganhador ou se ocorreu um empate. Além disso, atualiza o display para mostrar o resultado, define o jogo como "não ativo" e retorna true caso o jogo tenha finalizado, caso o jogo ainda esteja acontecendo retorna false.

`checkWin()`
O método checkWin() checa se existe um ganhador no jogo. Isso ocorre comparando as possíveis combinações para um ganhador além de verificar o estado atual do tabuleiro. Se existir um ganhador, o método atualiza o score e retorna o jogador ganhador. Do contrário, retorna false.

`listenPlayer()`
Este método apenas escuta os cliques do jogador no tabuleiro e atualiza o tabuleiro de acordo onde o clique foi disparado.

`resetGame()`
Esse método apenas reseta o tabuleiro, o jogador da vez, e o status do jogo para os valores iniciais.

`play()`
Esse método controla a jogada na vez do computador invocando o método playTicTacToe() da classe ComputerController. Ao final, checa se o jogo acabou e atualiza o display.

`updateScore()`
Atualiza o score com o valor atualizado do placar.

`updateDisplay()`
Atualiza o display para mostrar de quem é vez, além de trocar as classes HTML do display para mostrar a cor de cada jogador.

`getRandomPlayer()`
Seleciona aleatóriamente um jogador para começar.


# Tic Tac Toe Computer Controller

Essa classe implementa um controller para o computador jogar o Jogo da Velha. Ela possui dois métodos para que o jogo possa ser jogado:

`playRandom(tiles: HTMLElement[]): number`
Este método recebe um array contendo elementos do HTML que representem os espaços do tabuleiro e retorna o index de um espaço vazio aleatório. Se não possuir nenhum espaço vazio, o método retorna -1.

---

`playTicTacToe(tiles: HTMLElement[], symbol: string): number`
This method takes an array of HTML elements representing the game board tiles and the symbol (either "X" or "O") of the human player. It tries to find a winning move and plays it. If it cannot find a winning move, it tries to find a blocking move (i.e., a move that prevents the human player from winning) and plays it. If it cannot find a blocking move, it plays a random move.
Esse método recebe um array de elementos HTML que representem os espaços do tabuleiro e um simbolo para representar o oponente. Esse método tem como objetivo fazer com que o oponente nunca vença procurando sempre espaços onde o oponente pode ganhar e bloqueando estes espaços. Caso não seja encontrado nenhum espaço, a jogada será aleatória.

---

`findBlockingMove(tiles: HTMLElement[], symbol: string): number`
This is a helper method that takes an array of HTML elements representing a row, column, or diagonal of the game board tiles and the symbol (either "X" or "O") of the human player. It tries to find an empty tile in the row, column, or diagonal that, if played, would prevent the human player from winning. If it finds such a tile, it returns its index. Otherwise, it returns -1.

Este é um método auxiliar que recebe um array de elementos HTML representando a linha, coluna ou a diagonal do tabuleiro e o simbolo do oponente e verifica se existe algum espaço vazio que caso seja marcado pelo oponente ele ganhe. Caso seja encontrado, o método retorna o indice desse espaço, caso não, retorna -1.