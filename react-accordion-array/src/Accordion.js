import React from 'react';
import {useState} from 'react';
import {AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

const Accordion = ({title, info}) =>{
    const [showInfo, setShowinfo] = useState(false);
    return (
        <article className='question'>
            <header>
            <h4>{title}</h4>
            <buttion className='btn' onClick={() =>{setShowinfo(!showInfo)}} >
                {showInfo ? <AiOutlineMinusCircle/> : <AiOutlinePlusCircle />}
                </buttion>
            </header>
            <div className='underline'></div>
            { showInfo && <p>{info}</p>  }
               
           
          
        </article>
    )
}

export default Accordion;
