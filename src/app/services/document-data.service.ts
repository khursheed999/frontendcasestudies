import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentDataService {

  private 
    
    
  
  getStatus(){
    return this.stateDocuments.map(s=>s.state);
  }
  getDocumentsByState(state:string){
    return this.stateDocuments.find(s=>s.state===state)?.documents||[];
  }
  
}
