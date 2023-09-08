import './Grid.css'
import Card from "../card/Card"
import { useState } from 'react'
import isWin from '../../helper/isSomeoneWin';

function Grid({numOfCards}){
    const [board, setBoard] = useState(Array(numOfCards).fill(""));
    const [turn, setTurn] = useState(true);                               //true = X, false = O
    const [winner, setWinner] = useState("")

    function play(index){
        console.log("Plauy run")
        if(turn == true) board[index] = "X";
        else board[index] = "O";
    
        setBoard([...board]);
        setTurn(!turn);

        const win = isWin(board, (turn)?'X':'O');
        if(win){
            setWinner(win);
        }
    }

    function reset(){
        setBoard(Array(numOfCards).fill(""));
        setTurn(true);
        setWinner("");
    }

    return (
        <>  
            <div className='grid-cover'> 
                {
                    !winner && (
                        <>
                            <h1 className='indicator'> Current Turn : {(turn)?'X':'O'}</h1>
                            <div className="board">
                                {board.map((ele, idx)=>
                                    <Card key={idx} winner={winner} onChoose={play} index={idx} val={ele}/>
                                )}
                            </div>
                            <button className="reset" onClick={reset}>Play Again</button>
                        </>
                    )
                }
                {
                    winner && (
                        <>
                            <h1 className='indicator'> Winner is : {(turn)?'O':'X'}</h1>
                            <button className="reset" onClick={reset}>Play Again</button>
                        </>
                    )
                }
            </div>
        </>
    )   
}

export default Grid