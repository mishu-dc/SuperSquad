import character_json from '../data/characters.json';

export function findCharacter(id){
    let character = character_json.find(c=>c.id===id);
    return character;
}



