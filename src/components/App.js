import React from 'react';
import {Component} from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import SquadStrength from './SquadStrength';

import '../assets/index.css'

class App extends Component{
    render(){
        return (
            <div className='App'>
                <h2> Super Squard </h2>
                <div className="col-md-4"> <CharacterList/></div>
                <div className="col-md-4"><HeroList/></div>
                <div className="col-md-4"><SquadStrength/></div>
            </div>
        );
    }
}

export default App