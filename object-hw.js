//Excercise 1-6 
//Excercise 7 not sure

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],

  difficulty: ["medium"],
}

const pokemon = [
  { number: 1,  name: "Bulbasaur",  type: "Grass/Poison", HP: 45, starter: true },
  { number: 2,  name: "Ivysaur",    type: "Grass/Poison", HP: 60, starter: false },
  { number: 3,  name: "Venusaur",   type: "Grass/Poison", HP: 80, starter: false },
  { number: 25, name: "Pikachu",type: "Electric",HP: 35, starter: true },
  { number: 58, name: "Charizard",type: "Fire",HP: 39, starter: false },
  { number: 59, name: "Charmeleon",type: "Fire",HP: 90, starter: false },
  { number: 151,name: "Alakazan", type: "Psychic",HP: 100, starter: false },
];
console.dir(pokemon, { maxArrayLength: null })
console.log(game);
console.log(game.gyms);
console.log(game.party);
console.log(game.items);
console.log(game.difficulty);
game.party.push(pokemon[3]);
console.log(game.party);

game.party.push(pokemon[2]);
game.party.push(pokemon[5]);
game.party.push(pokemon[6]);
console.log(game.party);

game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});
console.log(game.gyms);


pokemon.push({
  number: 26,
  name: 'Raichu',
  type: 'Electric',
  HP: 60,
  starter: false
});

const pikachuIndex = game.party.findIndex