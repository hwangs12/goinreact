import Stone from './Stone'
import { useState } from 'react'

function GridStoneContainer() {
  const [ player, setPlayer ] = useState(0)
  
  const handleClick = (e) => {
        e.target.style.opacity = 1.0
        console.log(e.target.classList.contains('white'))
        if (player === 0 && !e.target.classList.contains('white')) {
            e.target.classList.add('black')
            setPlayer(1)
        } 
        if (player === 1 && !e.target.classList.contains('black')) {
            e.target.classList.add('white')
            setPlayer(0)
        }
    }

  const removeStone = (e) => {
    //remove when surrounded
    let stuck = false;
    const top = document.getElementById(`${e.target.id - 19}`)
    const bottom = document.getElementById(`${e.target.id + 19}`)
    const left = document.getElementById(`${e.target.id - 1}`)
    const right = document.getElementById(`${e.target.id + 1}`)
    //if e.target is black and it surrounds white, remove black in the classList and make it empty
    if (e.target.classList.contains('white')) {
      
    }
    //if e.target is white and it surrounds black, remove white int he classList and make it empty
  }

  const initialize_grid = () => {
    let col = [];
    for (let i = 0; i < 19; i++) {
      let item = [];
      for (let j = 0; j < 19; j++) {
        item.push(<Stone onPlayerChange={handleClick} col={i} row={j} key={j} />);
      }
      col.push(<div id={`boardCol${i}`} key={i}>{item}</div>);
    }
    return col;
  };


  return <div className="grid-stone-container">{initialize_grid()}</div>;
}

export default GridStoneContainer;
