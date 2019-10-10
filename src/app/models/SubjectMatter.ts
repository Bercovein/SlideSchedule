import { Class } from './Class';

export class SubjectMatter {
    name : String;
    startDate : Date;
    endDate : Date;
    classList : Class[];

    constructor(name, startDate, endDate){
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}