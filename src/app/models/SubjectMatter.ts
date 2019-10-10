import { Class } from './Class';

export class SubjectMatter {
    name : String;
    classList : Class[];

    constructor(name, classList){
        this.name = name;
        this.classList = classList;
    }
}