import character_json from '../data/characters.json';
import {findCharacter} from './helpers';
import {ADD_CHARACTER, REMOVE_CHARACTER, REMOVE_HEROES} from '../actions';


function characters(state = character_json, action){
    let characters = [];
    switch(action.type){
        case ADD_CHARACTER:
            characters  = state.filter((item)=>item.id!==action.id);
            return characters;
        case REMOVE_CHARACTER:
            characters = [...state, findCharacter(action.id)];    
            return characters;
        case REMOVE_HEROES:
            return character_json; 
        default: 
            return state;
    }
}



export default characters;