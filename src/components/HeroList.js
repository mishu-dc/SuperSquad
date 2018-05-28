import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeCharacterById} from '../actions';
import { bindActionCreators } from 'redux';


class HeroList extends Component{
    render(){
        return (
             <div>
                <h3>Your hero squad</h3>
                <ul className='list-group'>
                    {
                        this.props.heroes.map((hero)=>{
                            return (<li key={hero.id} className="list-group-item">
                                <div className="list-item">{hero.name}</div>
                                <div className="list-item right-button" onClick={()=>this.props.removeCharacterById(hero.id)}>X</div>
                            </li>)
                        })
                    }
                </ul>
             </div>   
        )
    }
}

function mapStateToProps(state){
    return {
        heroes: state.heroes
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators ({removeCharacterById}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);