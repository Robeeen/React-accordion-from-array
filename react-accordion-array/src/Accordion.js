import React from 'react';
import {useState} from 'react';
import {AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

const Accordion = ({title, info}) =>{
    return (
        <article className='question'>
            <header>
            <h4>{title}</h4>
            <buttion className='btn'>btn</buttion>
            </header>

            
           
            {info}
        </article>
    )
}

export default Accordion;
