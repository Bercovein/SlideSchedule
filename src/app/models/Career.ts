import { SubjectMatter } from './SubjectMatter';

export class Career{
    name : String;
    code : String;
    subjectList : SubjectMatter[];

    constructor(name, code, subjectList){
        this.name = name;
        this.code = code;
        this.subjectList = subjectList;
    }
}