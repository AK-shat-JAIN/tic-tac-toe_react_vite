import './Grid.css'
import Card from "../card/Card"
import { useState } from 'react'

function Grid({numOfCards}){
    const [board, setBoard] = useState(Array(numOfCards).fill(""));
    const [turn, setTurn] = useState(true);                               //true = X, false = O

    function play(index){
        console.log("Plauy run")
        if(turn == true) board[index] = "X";
        else board[index] = "O";
    
        setBoard([...board]);
        setTurn(!turn);
    }

    return (
        <>
            <h1 className='indicator'> Current Turn : {(turn)?'X':'O'}</h1>
            <div className="board">
                {board.map((ele, idx)=>
                    <Card key={idx} onChoose={play} index={idx} val={ele}/>
                )}
            </div>
        </>
    )   
}

export default Grid