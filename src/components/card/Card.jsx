import Icon from '../icon/Icon'
import './Card.css'

function Card({ winner, val, onChoose, index }){

    return (
        <>
            <div className='box' onClick={()=> winner=="" && val=="" && onChoose(index)}>
                <Icon val={val}/>
            </div>
        </>
    )
}

export default Card