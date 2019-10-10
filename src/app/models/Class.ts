import { Time } from '@angular/common';

export class Class{
    commision : String;
    time : Time;
    day : Date;

    constructor(commision, time, day){
        this.commision = commision;
        this.time = time;
        this.day = day;
    }
}