import { Injectable } from '@angular/core';
import { Commision } from '../../models/Commision';
import { HttpClient } from '@angular/common/http';
import { IService } from '../IService';

@Injectable({
  providedIn: 'root'
})

export class CommisionService implements IService{

  path = '../../assets/Commision.json';

  constructor(private http: HttpClient) { }

  add(commision: Commision){
    
    //if(this.getByNumber(commision.number,commision.year))
      this.http.post(this.path,commision);
    //else
    //  console.log("Ha habido un error al agregar el aula");
  }

  getAll() : Promise<any>{
    return this.http.get(this.path)
      .toPromise();
  }

  //hacer andar 
  getByNumber(){
   
  }  

  getById(){
    
  }

  delete(){

  }
  update(){

  }
}
