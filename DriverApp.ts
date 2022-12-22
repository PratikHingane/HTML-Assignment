import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { ICoach } from "./ICoach";

//create an object
let cricketCoach=new CricketCoach();
let golfCoach=new GolfCoach();

//declare an array for coaches
let theCoaches: ICoach[]=[];
//add the coaches to the array
theCoaches.push(cricketCoach);
theCoaches.push(golfCoach);

//print the output
for(let coach of theCoaches){
    console.log(coach.getDailyWorkout);
}