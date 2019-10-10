import { Time } from '@angular/common';
import { ClassRoom } from './ClassRoom';

export class Schedule{
    day : Date;
    time : Time;
    classRoom : ClassRoom;

    constructor(day,time,classRoom){
        this.day = day;
        this.time = time;
        this.classRoom = classRoom;
    }
}