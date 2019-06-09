let teams = ["a", "b", "c", "d", "e"];
for (team1 of teams) {
  for (team2 of teams) {
    if (team1 != team2) {
      console.log(team1 + " VS " + team2);
    }
  }
}

let teams1 = ["a", "b", "c", "d", "e"];
let teams2 = ["a", "b", "c", "d", "e"];
for(t1 of teams1){
    teams2.shift();
    for(t2 of teams2){
        console.log(t1+" VS "+t2);
    }
}