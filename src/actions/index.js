export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';
export const REMOVE_HEROES = 'CLEAR_HEROES';

export function addCharacterById(id){
    const action = {
        type:ADD_CHARACTER,
        id
    }
    return action;
}

export function removeCharacterById(id){
    const action ={
        type: REMOVE_CHARACTER,
        id
    }
    return action;
}

export function clearAllHeroes(){
    const action = {
        type:REMOVE_HEROES
    }
    return action;
}