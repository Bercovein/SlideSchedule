import { Injectable } from '@angular/core';
import { ClassRoom } from '../../models/ClassRoom';
import { HttpClient } from '@angular/common/http';
import { IService } from '../IService';


@Injectable({
  providedIn: 'root'
})
export class ClassRoomService implements IService {

  path = '../../assets/ClassRoom.json';

  constructor(private http: HttpClient) { }

  add(classRoom : ClassRoom){
    
    if(this.getById(classRoom.number))
      this.http.post(this.path,classRoom);
    else
      console.log("Ha habido un error al agregar el aula");
  }

  getAll() : Promise<any>{
    return this.http.get(this.path)
      .toPromise();
  }

  //hacer andar 
  getById(number: String){
    return 0;
  }  

  delete(){

  }
  update(classRoom : ClassRoom){

  }
}
