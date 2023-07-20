import { Injectable } from '@angular/core';
import {Plugins} from '@capacitor/core';
import {Preferences} from "@capacitor/preferences";
import {Observable} from "rxjs";
import {Plant} from "../Datatypes/Plant";

@Injectable({
  providedIn: 'root'
})
export class FavorietenService {
  mijnFavorieten: string[] = [];
  listKey = 'mijnFavorieten';

  saveList(mijnFavorieten: string[]) {
    const liststring = JSON.stringify(mijnFavorieten);
    Preferences.set({key: this.listKey, value:liststring})
  }

  async getList(): Promise<any[]> {
    const result = await Preferences.get({ key: this.listKey });
    if (result.value) {
      return JSON.parse(result.value);
    }
    return [];
  }
  constructor() {}
}
