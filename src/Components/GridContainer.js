function GridContainer() {
    return (
        <div className="grid-container">{
            new Array(18).fill().map((element, i) => {
                return <div key={i} id={`totalGrid${i}`}> {
                    new Array(18).fill().map((_, j) => {
                        return <div key={j} className="grid-item"></div>
                    })
                } </div>
            })
        } </div>
    )
}

export default GridContainer;
