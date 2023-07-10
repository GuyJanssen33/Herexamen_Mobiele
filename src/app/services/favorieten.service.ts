import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavorietenService {
  mijnFavorieten: string[] = [];

  constructor() {}
}
