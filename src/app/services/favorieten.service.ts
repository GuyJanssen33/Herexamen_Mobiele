import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Storage } from '@ionic/storage-angular';
import {Observable} from "rxjs";
import {Plant} from "../Datatypes/Plant";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public FavorietenList: Observable<Plant>[] = [];
  constructor( private storage: Storage) { this.loadList()}
getList(): Observable<Plant[]> {
  return this.storage.get('list');
}
  /*getList(): Promise<any[]> {
    return this.storage.get('list').then((list) => {
      if (list) {
        return list;
      } else {

      }
    });*/
  addObject(object: any) {
    this.FavorietenList.push(object);
    this.saveList();
  }
  // Save the list to local storage
  private saveList() {
    localStorage.setItem('list', JSON.stringify(this.FavorietenList));
  }

  // Load the list from local storage
  private loadList() {
    const storedList = localStorage.getItem('list');
    if (storedList) {
      this.FavorietenList = JSON.parse(storedList);
    }

  }

}
