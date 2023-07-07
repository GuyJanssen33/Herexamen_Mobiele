import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'https://example.com/api/list';

  constructor(private http: HttpClient, private storage: Storage) { }

  getList(): Promise<any[]> {
    return this.storage.get('list').then((list) => {
      if (list) {
        return list;
      } else {

      }
    });
  }


}
