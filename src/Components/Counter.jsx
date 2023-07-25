import { useState } from "react"

const Counter = () => {
    const [myState, setMyState] = useState(0)

    const incre = () => {
        setMyState(myState + 1)
    }

    const decre = () => {
        if (myState <= 0) {
            alert("cannot go to the negative value")
            return setMyState(0)
        }
        setMyState(myState - 1)
    }

    return (
        <>
            <div className="counterContainer">
                <h2>Counter</h2>
                <button onClick={incre}>++++</button>
                <h2>{myState}</h2>
                <button onClick={decre}>----</button>
            </div>
        </>
    )
}

export default Counter;