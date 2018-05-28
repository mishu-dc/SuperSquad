export function calculateStrength(characters){
    let strength = 0;
    characters.map((character)=>strength+=character.strength);
    return strength;
}

export function calculateIntelligence(characters){
    let intelligence = 0;
    characters.map((character)=>intelligence+=character.intelligence);
    return intelligence;
}

export function calculateSpeed(characters){
    let speed = 0;
    characters.map((character)=>speed+=character.speed);
    return speed;
}