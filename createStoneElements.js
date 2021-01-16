(() => {
    let board = 
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];


    let stoneDivString = [];
    for (let i = 0; i < 21; i++) {
        for (let j = 0; j < 21; j++) {
            stoneDivString.push(`<div class="stone" id="board${[i]},${[j]}"></div>`)
        };
    };

    let gridStoneContainer = document.getElementsByClassName("grid-stone-container")[0];
    let stoneDiv = [];
    for (let i = 0; i < 21; i++) {
        const stoneGroupElement = document.createElement("div");
        stoneGroupElement.id = `boardRow${(i)}`;
        gridStoneContainer.appendChild(stoneGroupElement);
        for (let j = 0; j < 21; j++) {
            stoneDiv[i] = document.getElementById(`boardRow${(i)}`);
            stoneDiv[i].innerHTML += stoneDivString[j + (i * 21)];
        };
    };

    let whoseTurn = 1;
    const NEITHER = 0;
    const BLACK = 1;
    const WHITE = 2;
    const EITHER = 3;

    let stoneSurrounded = new Array(21).fill(new Array (21).fill(0));
    for (let i = 0; i <21; i++){
        stoneSurrounded[i][0] = EITHER;
        stoneSurrounded[i][20] = EITHER;
        stoneSurrounded[0][i] = EITHER;
        stoneSurrounded[20][i] = EITHER;
    }
    
    for (let i = 1; i < 20; i++){
        for (let j = 1; j < 20; j++) {
            if(board[i+1][j] == NEITHER || board[i-1][j] == NEITHER || board[i][j+1] == NEITHER || board[i][j-1] == NEITHER){
                stoneSurrounded[i][j] = NEITHER;
            };
            if(board[i+1][j] == (BLACK || EITHER) && board[i-1][j] == (BLACK || EITHER) && board[i][j+1] == (BLACK || EITHER) && board[i][j-1] == (BLACK || EITHER)){
                stoneSurrounded[i][j] = BLACK;
            };
            if(board[i+1][j] == (WHITE || EITHER) && board[i-1][j] == (WHITE || EITHER) && board[i][j+1] == (WHITE || EITHER) && board[i][j-1] == (WHITE || EITHER)){
                stoneSurrounded[i][j] = WHITE;
            };
        };
    };

    for (let i = 1; i < 20; i++){
        for (let j = 1; j < 20; j++) {
            const stoneElement = document.getElementById(`board${[i]},${[j]}`);
            stoneElement.addEventListener("mouseover",function(stone) {
            if (board[i][j] == NEITHER && whoseTurn == BLACK) {
                stone.target.style.opacity = "0.3";
                stone.target.style.backgroundImage = "radial-gradient(rgb(85, 85, 85),black)";
            };
            if (board[i][j] == NEITHER && whoseTurn == WHITE) {
                stone.target.style.opacity = "0.3";
                stone.target.style.backgroundImage = "radial-gradient(rgb(185, 185, 185),white)";
            };
            if (board[i][j] == BLACK) {
                stone.target.style.opacity = "1";
                stone.target.style.backgroundImage = "radial-gradient(rgb(85, 85, 85),black)";
            };
            if (board[i][j] == WHITE) {
                stone.target.style.opacity = "1";
                stone.target.style.backgroundImage = "radial-gradient(rgb(185, 185, 185),white)";
            };
            });

            stoneElement.addEventListener("mouseout",function(stone) {
            if (board[i][j] == NEITHER && whoseTurn == BLACK) {
                stone.target.style.opacity = "0";
                stone.target.style.backgroundImage = "radial-gradient(rgb(85, 85, 85),black)";
            };
            if (board[i][j] == NEITHER && whoseTurn == WHITE) {
                stone.target.style.opacity = "0";
                stone.target.style.backgroundImage = "radial-gradient(rgb(185, 185, 185),white)";
            };
            });

            stoneElement.addEventListener("click",function(stone) {
            if (board[i][j] == NEITHER && whoseTurn == BLACK) {
                stone.target.style.opacity = "1";
                stone.target.style.backgroundImage = "radial-gradient(rgb(85, 85, 85),black)";
                whoseTurn = WHITE;
                board[i][j] = BLACK;
            };
            if (board[i][j] == NEITHER && whoseTurn == WHITE) {
                stone.target.style.opacity = "1";
                stone.target.style.backgroundImage = "radial-gradient(rgb(185, 185, 185),white)";
                whoseTurn = BLACK;
                board[i][j] = WHITE;
            };
            });
        }
    };

})();
