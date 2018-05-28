import React, {Component} from 'react';
import {calculateStrength, calculateIntelligence, calculateSpeed} from './helper';

class SquadStrength extends Component{
    render(){
        return (
            <div>
                <h2>Squad Strength</h2>
                <div>
                    <ul className='list-group'>
                            <li className='list-group-item'>
                                <b>Overall Strength: </b>{calculateStrength(this.props.heroes)}
                            </li>
                            <li className='list-group-item'>
                                <b>Overall Intelligence: </b>{calculateIntelligence(this.props.heroes)}
                            </li>
                            <li className='list-group-item'>
                                <b>Overall Speed: </b> {calculateSpeed(this.props.heroes)}
                            </li>
                    </ul>
                </div>    
                
            </div>
        )
    }
}


export default SquadStrength;