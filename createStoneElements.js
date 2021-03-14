(() => {
    let board = 
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

    const NEITHER = 0;
    const BLACK = 1;
    const WHITE = 2;
    let whoseTurn = BLACK;

    let stoneDivString = [];
    for (let i = 0; i < 19; i++) {
        for (let j = 0; j < 19; j++) {
            stoneDivString.push(`<div class="stone" id="board${[i]},${[j]}"></div>`)
        };
    };

    let gridStoneContainer = document.getElementsByClassName("grid-stone-container")[0];
    let stoneDiv = [];
    for (let i = 0; i < 19; i++) {
        const stoneGroupElement = document.createElement("div");
        stoneGroupElement.id = `boardCol${(i)}`;
        gridStoneContainer.appendChild(stoneGroupElement);
        for (let j = 0; j < 19; j++) {
            stoneDiv[i] = document.getElementById(`boardCol${(i)}`);
            stoneDiv[i].innerHTML += stoneDivString[j + (i * 19)];
        };
    };
   

    function refreshUI() {
        for (let i = 0; i < 19; i++) {
            for (let j = 0; j <19; j++) {
                const stoneElement = document.getElementById(`board${[i]},${[j]}`);
                if (board[i][j] == NEITHER) {
                    stoneElement.style.opacity = "0";
                    stoneElement.style.backgroundImage = "radial-gradient(rgb(185, 185, 185),white)";
                };
                if (board[i][j] == BLACK) {
                    stoneElement.style.opacity = "1";
                    stoneElement.style.backgroundImage = "radial-gradient(rgb(85, 85, 85),black)";
                };
                if (board[i][j] == WHITE) {
                    stoneElement.style.opacity = "1";
                    stoneElement.style.backgroundImage = "radial-gradient(rgb(185, 185, 185),white)";
                };
            };
        };
    };

    function mouseOver(i,j) {
        const stoneElement = document.getElementById(`board${[i]},${[j]}`);
        stoneElement.addEventListener("mouseover", function(stone) {
        if (board[i][j] == NEITHER && whoseTurn == BLACK) {
            stoneElement.style.opacity = "0.3";
            stoneElement.style.backgroundImage = "radial-gradient(rgb(85, 85, 85),black)";
        };
        if (board[i][j] == NEITHER && whoseTurn == WHITE) {
            stoneElement.style.opacity = "0.3";
            stoneElement.style.backgroundImage = "radial-gradient(rgb(185, 185, 185),white)";
        };
    });
    };

    function mouseOut(i,j) {
        const stoneElement = document.getElementById(`board${[i]},${[j]}`);
        stoneElement.addEventListener("mouseout", function(stone) {
            if (board[i][j] == NEITHER) {
                stoneElement.style.opacity = "0";
            };
        });
    };

    function click(i,j){
        const stoneElement = document.getElementById(`board${[i]},${[j]}`);
        stoneElement.addEventListener("click",function() {
            if (board[i][j] == NEITHER && whoseTurn == BLACK) {
                stoneElement.style.opacity = "1";
                stoneElement.style.backgroundImage = "radial-gradient(rgb(85, 85, 85),black)";
                whoseTurn = WHITE;
                board[i][j] = BLACK;
                captureSurroundedStone(i,j)
                refreshUI()
                };
            if (board[i][j] == NEITHER && whoseTurn == WHITE) {
                stoneElement.style.opacity = "1";
                stoneElement.style.backgroundImage = "radial-gradient(rgb(185, 185, 185),white)";
                whoseTurn = BLACK;
                board[i][j] = WHITE;
                captureSurroundedStone(i,j)
                refreshUI()
            };
        });
    };

    function stoneSurround(y,x) {
        if (board[y]?.[x] == undefined) {
            return false;
        } 
        const stoneType = board[y][x];
        if (stoneType == NEITHER) {
            return false;
        };
        let surroundedStone = [board[y+1]?.[x],board[y-1]?.[x],board[y]?.[x+1],board[y]?.[x-1]]
        if (stoneType == BLACK) {
            if (!surroundedStone.includes(NEITHER) && !surroundedStone.includes(BLACK)) {
                return true;
            };
        };
        if (stoneType == WHITE) {
            if (!surroundedStone.includes(NEITHER) && !surroundedStone.includes(WHITE)) {
                return true;
            };
        };    
    };

    function captureSurroundedStone(i,j) {
        if (stoneSurround(i+1,j)) {
            board[i+1][j] = NEITHER; 
        }
        if (stoneSurround(i-1,j)) {
            board[i-1][j] = NEITHER;         
        }
        if (stoneSurround(i,j+1)) {
            board[i][j+1] = NEITHER;    
        }
        if (stoneSurround(i,j-1)) {
            board[i][j-1] = NEITHER;   
        }
    }

    for (let i = 0; i < 19; i++){
        for (let j = 0; j < 19; j++) {
            click(i,j)
            mouseOver(i,j)
            mouseOut(i,j)
        };
    };



})();
