import React from 'react';
import Move from '../Move'

const MovesList = ({list})=>(
    list.map(({ prevNum, num, action, mine })=>(
        <Move 
            prevNum={prevNum} 
            num={num}
            action={action}
            mine={mine}
            />
        ))
)

export default MovesList