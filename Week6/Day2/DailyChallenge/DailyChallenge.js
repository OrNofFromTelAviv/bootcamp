const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];


   let onlyNames = [];
   gameInfo.forEach(person => onlyNames.push(`${person.username}!`))
console.log(onlyNames);



let winners = [];
gameInfo.forEach(person => person.score > 5 ? winners.push(person.username) : "" )
console.log(winners);



let score = 0
gameInfo.forEach(person => score += person.score);
console.log(score); //71




