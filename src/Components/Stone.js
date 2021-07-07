

function Stone(props) {
    

    return (
        <div onClick={props.onPlayerChange} className="stone" id={`${props.row + props.col * 19}`}></div>
    )
}

export default Stone;