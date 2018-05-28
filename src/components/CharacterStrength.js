import React, {Component} from 'react';

class CharacterStrength extends Component{
    calculateStrength(){
        let strength = 0;
        this.props.characters.map((character)=>strength+=character.strength);
        return strength;
    }

    calculateintelligence(){
        let intelligence = 0;
        this.props.characters.map((character)=>intelligence+=character.intelligence);
        return intelligence;
    }

    calculateSpeed(){
        let speed = 0;
        this.props.characters.map((character)=>speed+=character.speed);
        return speed;
    }

    render(){
        return (
            <div>
                <h2>Character Strength</h2>
                <div>
                    <ul className='list-group'>
                            <li className='list-group-item'>
                                <b>Overall Strength: </b>{this.calculateStrength()}
                            </li>
                            <li className='list-group-item'>
                                <b>Overall Intelligence: </b>{this.calculateintelligence()}
                            </li>
                            <li className='list-group-item'>
                                <b>Overall Speed: </b> {this.calculateSpeed()}
                            </li>
                    </ul>
                </div>    
            </div>
        )
    }
}

export default CharacterStrength;