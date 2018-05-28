import React, {Component} from 'react';

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
                {
                    this.props.heroes.length?<input type='button' value='Clear' onClick={()=>this.props.clearAllHeroes()}></input>:<div class='no-hero'>No hero is selected</div>
                }
             </div>   
        )
    }
}

export default HeroList;