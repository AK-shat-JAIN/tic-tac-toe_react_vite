import { FaRegCircle, FaTimes, FaPen } from 'react-icons/fa'
import './Icon.css'

function Icon({ val }){
    return (
        <>
            <>
                {   
                    (val=="X") && (
                        <FaTimes className='myicon' />
                    )
                }
            </>
            <>
                {   
                    (val=="O") && (
                        <FaRegCircle className='myicon' />
                    )
                }
            </>
        </>
    )
}

export default Icon