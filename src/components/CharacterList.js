import React, {Component} from 'react';

class CharacterList extends Component{
    render(){
        console.log('this.props', this.props);
        return (
            <div >
                <h3>Characters</h3>
                <ul className="list-group">
                    {
                        this.props.characters.map(character=>{
                            return (<li key={character.id} className="list-group-item">
                                    <div className="list-item">{character.name}</div>
                                    <div className="list-item right-button" onClick={()=>this.props.addCharacterById(character.id)}>+</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default CharacterList;