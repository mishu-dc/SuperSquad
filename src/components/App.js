import React from 'react';

import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeCharacterById, addCharacterById} from '../actions';

import CharacterList from './CharacterList';
import HeroList from './HeroList';
import SquadStrength from './SquadStrength';


import '../assets/index.css'

class App extends Component{
    render(){
        return (
            <div className='App'>
                <h2> Super Squard </h2>
                <div className="col-md-4"><CharacterList {...this.props}/></div>
                <div className="col-md-4"><HeroList {...this.props}/></div>
                <div className="col-md-4"><SquadStrength {...this.props}/></div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        heroes: state.heroes,
        characters: state.characters
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addCharacterById, removeCharacterById}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);