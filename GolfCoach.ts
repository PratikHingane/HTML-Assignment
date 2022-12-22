import { ICoach } from "./ICoach";

export class GolfCoach implements ICoach{
    
    getDailyWorkout(): string {
        return "Hit balls at the golf range.";
    }

}