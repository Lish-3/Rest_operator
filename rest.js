let tasks =["UI Designs" , "Main feature development" , "testing feature" , "Documentation ", "Bug Review"];
let [team1 ,team2, ...othertasks] =tasks;
console.log("tasks assigned to team 1: " ,team1);
console.log("tasks assigned to team 1: ",team2);
console.log("other tasks for rest of the team: ", othertasks);