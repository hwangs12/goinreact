(() => {
    let stoneIDArray = [];
    let stoneDivArrayString = [];
    for (let i = 0; i < 361; i++) {
        const stoneId = `stone-${i}`;
        stoneIDArray.push(stoneId);
        stoneDivArrayString.push(`<div class="stone" id="${stoneId}"></div>`);
    };

    let stoneDivArray = [];
    let stoneGroupIDArray = [];
    const gridStoneContainer = document.getElementsByClassName("grid-stone-container")[0];
    for (let i = 0; i < 19; i++) {
        const stoneGroupId = `stoneGroup${i}`;
        stoneGroupIDArray.push(stoneGroupId);

        const stoneGroupElement = document.createElement("div");
        stoneGroupElement.id = stoneGroupId;
        gridStoneContainer.appendChild(stoneGroupElement);
    };

    for (let i = 0; i < 19; i++) {
        for (let j = 0; j < 19; j++) {
            stoneDivArray[i] = document.getElementById(stoneGroupIDArray[i]);
            stoneDivArray[i].innerHTML += stoneDivArrayString[(j + (i * 19))];
        };
    };

    let stoneColourArray = [];
    for (let i = 0; i < 361; i++){
        stoneColourArray.push(0);
    };

    for (let i = 0; i < 361; i++){
        const stoneElement = document.getElementById(stoneIDArray[i]);
        stoneElement.addEventListener("mouseover", function(stone) {
            if (stoneColourArray[i] < 1) {
                stone.target.style.opacity = "0.3";
            }
        });
        stoneElement.addEventListener("mouseout", function(stone) {
            if (stoneColourArray[i] < 1) {
                stone.target.style.opacity = "0";
            }
        });
        stoneElement.addEventListener("click", function(stone) {
            if (stoneColourArray[i] < 1) {
                stone.target.style.opacity = "1";
                stoneColourArray[i] = 1;
            }
        });
    }
})();
