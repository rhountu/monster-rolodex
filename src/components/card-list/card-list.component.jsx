import React from 'react';
import { Card } from '../card/card.component'
import './card-list.style.css'


export const Cardlist = props =>{
        return(
            <div className='card-list' >
               {props.monsters.map(monster=>
                <Card key={monster.id} monster= {monster}/>
     
                )}
            </div>
        )
}

/*class Cardlist extends Component{


    render() {
        return (
            <div>Rahul</div>
        )
    }
}

export default Cardlist;*/