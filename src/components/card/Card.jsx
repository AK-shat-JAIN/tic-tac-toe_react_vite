import Icon from '../icon/Icon'
import './Card.css'

function Card({ val, onChoose, index }){

    const filled = (val)?true:false;

    return (
        <>
            <div className='box' onClick={()=>onChoose(index)}>
                <Icon filled={filled} val={val}/>
            </div>
        </>
    )
}

export default Card