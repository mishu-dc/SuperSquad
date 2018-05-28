import React from 'react';
import {Component} from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';

import '../assets/index.css'

class App extends Component{
    render(){
        return (
            <div className='App'>
                <h2> Super Squard </h2>
                <div className="col-md-6"> <CharacterList/></div>
                <div className="col-md-6"><HeroList/></div>
            </div>
        );
    }
}

export default App