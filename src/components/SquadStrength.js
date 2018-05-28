import React, {Component} from 'react';
import {connect} from 'react-redux';

class SquadStrength extends Component{

    calculateStrength(){
        let strength = 0;
        this.props.heroes.map((hero)=>strength+=hero.strength);
        return strength;
    }

    calculateintelligence(){
        let intelligence = 0;
        this.props.heroes.map((hero)=>intelligence+=hero.intelligence);
        return intelligence;
    }

    calculateSpeed(){
        let speed = 0;
        this.props.heroes.map((hero)=>speed+=hero.speed);
        return speed;
    }

    render(){
        return (
            <div>
                <h2>Squad Strength</h2>
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

function mapStateToProps(state){
    return {
        heroes:state.heroes
    }
}

export default connect(mapStateToProps, null)(SquadStrength);