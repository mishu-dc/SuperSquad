import React, {Component} from 'react';
import {calculateStrength, calculateIntelligence, calculateSpeed} from './helper';


class CharacterStrength extends Component{
   
    render(){
        return (
            <div>
                <h2>Character Strength</h2>
                <div>
                    <ul className='list-group'>
                            <li className='list-group-item'>
                                <b>Overall Strength: </b>{calculateStrength(this.props.characters)}
                            </li>
                            <li className='list-group-item'>
                                <b>Overall Intelligence: </b>{calculateIntelligence(this.props.characters)}
                            </li>
                            <li className='list-group-item'>
                                <b>Overall Speed: </b> {calculateSpeed(this.props.characters)}
                            </li>
                    </ul>
                </div>    
            </div>
        )
    }
}

export default CharacterStrength;