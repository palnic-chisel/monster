import React from 'react';
import './CardListStyle.css'
import {Card} from "../card/CardComponent";

export const CardList = (props) => {
    console.log(props);
    return(
        <div className='card-list'>
            {props.monsters.map(monster =>
                <Card key={monster.id}
                       monster = {monster}
                />)
            }
        </div>)
};