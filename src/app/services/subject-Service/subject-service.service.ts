import { Injectable } from '@angular/core';
import { IService } from '../IService';
import { SubjectMatter } from '../../models/SubjectMatter';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService implements IService {
  
  path = '../../assets/SubjectMatters.json';

  constructor(private http: HttpClient) { }

  add(subject: SubjectMatter) {
    this.http.post(this.path,subject);
  }

  getAll() {
    return this.http.get(this.path)
      .toPromise();
  }
  getById(subject: SubjectMatter) {
    throw new Error("Method not implemented.");
  }
  delete(code : Number) {
    throw new Error("Method not implemented.");
  }
  update(subject: SubjectMatter) {
    throw new Error("Method not implemented.");
  }
}
