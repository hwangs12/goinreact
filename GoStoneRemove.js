
            let stoneColourArrayBigger = [];
            for (i = 0; i < 441; i++){
                stoneColourArrayBigger.push
            }
            
            
            let CenterStones = [];
            for (let i = 0; i<289; i++){
                CenterStones.push('StoneID');
            };
            for (let j = 0; j<17; j++){
                for (let i = 0; i<17; i++){
                    CenterStones[i+(j*17)] += String(i+20+(j*19))
                };
            };

            let stoneSurroundedArray = []; //0= not surrounded; 1 = surroudned by black; 2 = surrounded by white
            let illegalMove = []; //0 = all can place stone 1: black can't place stone 2: white can't place stone
            for (let i = 0; i<361; i++){
                stoneSurroundedArray.push(0);
                illegalMove.push(0);

            };
            
            let stoneColourArray = [];
            let stoneColourLeft = [];
            let stoneColourRight =[];
            let stoneColourTop = [];
            let stoneColourBottom = [];
        for (let i =0; i<361; i++){
            stoneColourArray.push(0);
            stoneColourLeft.push(0);
            stoneColourRight.push(0);
            stoneColourTop.push(0);
            stoneColourBottom.push(0);
        };

    for (let i = 0; i<361; i++){
        do {
            stoneSurroundedArray[i] = 1
        } while (stoneColourLeft[i] == 1 && stoneColourRight[i] == 1 && stoneColourTop[i] == 1 && stoneColourBottom[i] == 1);
        do {
            stoneSurroundedArray[i] = 2
        }   while (stoneColourLeft[i] == 2 && stoneColourRight[i] == 2 && stoneColourTop[i] == 2 && stoneColourBottom[i] == 2);
        do {
            stoneSurroundedArray[i] = 0
        } while (stoneColourLeft[i] == 0 || stoneColourRight[i] == 0 || stoneColourTop[i] == 0 || stoneColourBottom[i] == 0);
    };
    


        switch (stoneSurroundedArray[i]) {
                case 0:
                    illegalMove[i] = 0;
                break;
                case 1: 
                    illegalMove[i] = 2;
                break;
                case 2:
                    illegalMove[i] = 1;
                break;
            };  
