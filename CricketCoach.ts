import {ICoach} from './ICoach'

export class CricketCoach implements ICoach{
    
    getDailyWorkout(): string {
        return "Practise your spin bowling.";
    }

}