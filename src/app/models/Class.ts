import { Commision } from './Commision';
import { Schedule } from './Schedule';

export class Class{
    commision : Commision;
    scheduleList : Schedule[];

    constructor(commision, scheduleList){
        this.commision = commision;
        this.scheduleList = scheduleList;
    }
}