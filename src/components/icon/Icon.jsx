import { FaRegCircle, FaTimes, FaPen } from 'react-icons/fa'
import './Icon.css'

function Icon({ filled, val }){
    return (
        <>
            <>
                {   
                    filled && (val=="X") && (
                        <FaTimes className='myicon' />
                    )
                }
            </>
            <>
                {   
                    filled && (val=="O") && (
                        <FaRegCircle className='myicon' />
                    )
                }
            </>
        </>
    )
}

export default Icon