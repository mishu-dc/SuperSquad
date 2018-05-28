import {findCharacter} from './helpers';
import {ADD_CHARACTER, REMOVE_CHARACTER} from '../actions';

function heroes(state=[], action){
    let heroes =[];
    switch(action.type){
        case ADD_CHARACTER:
            heroes = [...state, findCharacter(action.id)];
            return heroes;
        case REMOVE_CHARACTER:
            heroes = state.filter((c)=> c.id!==action.id);
            return heroes;
        default:
            return state;
    }
}


export default heroes;