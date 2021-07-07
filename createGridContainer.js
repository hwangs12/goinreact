(() => {
  let totalGridId = [];
  let totalGridVar = [];

  const gridContainer = document.getElementsByClassName("grid-container")[0];
  for (let i = 0; i < 18; i++) {
    const gridId = `totalGrid${i}`;
    totalGridId.push(gridId);
    totalGridVar.push(i);

    const gridColumn = document.createElement("div");
    gridColumn.id = gridId;
    gridContainer.appendChild(gridColumn);
  }

  for (let i = 0; i < 18; i++) {
    for (let j = 0; j < 18; j++) {
      totalGridVar[i] = document.getElementById(totalGridId[i]);
      totalGridVar[i].innerHTML += "<div class='grid-item'></div>";
    }
  }
})();
