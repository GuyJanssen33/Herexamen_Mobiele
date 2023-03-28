import { Component, OnInit } from '@angular/core';
import {Plant} from "../Datatypes/Plant";
import {ApiService} from "../services/api.service";
import {mergeMap, Observable, of} from "rxjs";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {



//   get PeulList(): Array<Plant> {
//     return this._PeulList;
//   }
//
//   set PeulList(value: Array<Plant>) {
//     this._PeulList = value;
//   }
//
//   get KoolList(): Array<Plant> {
//     return this._KoolList;
//   }
//
//   set KoolList(value: Array<Plant>) {
//     this._KoolList = value;
//   }
//
//
//   get BladList(): Array<Plant> {
//     return this._BladList;
//   }
//
//   set BladList(value: Array<Plant>) {
//     this._BladList = value;
//   }
//   get KnolList() : Array<Plant> {
//     return this._KnolList;
//   }
//
//   set KnolList(value: Array<Plant>) {
//     this._KnolList = value;
//   }
//
// get UiList() : Array<Plant>{
//     return this._UiList
// }
//
// set UiList(value: Array<Plant>){
//     this._UiList = value;
// }
  public PlantList = this.ApiService.getPlant();

  public BladList: Array<Plant> = [];
  public KoolList: Array<Plant> = [];
  public PeulList: Array<Plant> = [];
  public KnolList: Array<Plant> = [];
  public UiList: Array<Plant> = [];
  public GebleekteList: Array<Plant> = [];
  public VruchtList: Array<Plant> = [];
  // Plant: Plant;
  plant: any;
  constructor( public ApiService: ApiService) {this.PlantList.subscribe(plant => plant.forEach(
    p => {
      switch(p.categorie) {
        case "Blad- en steelgewassen": {
          this.BladList.push(p);
          break;
        }
        case "Knol- en wortelgewassen": {
          this.KnolList.push(p);
          break;
        }
        case "Ui-achtigen": {
          this.UiList.push(p);
          break;
        }
        case "Koolsoorten": {
          this.KoolList.push(p);
          break;
        }
        case "Peulvruchten": {
          this.PeulList.push(p);
          break;
        }
        case "Gebleekte Gewassen": {
          this.GebleekteList.push(p);
          break;
        }
        default: {
          this.VruchtList.push(p);
          break;
        }
      }}));
    console.log(this.BladList, "test", this.VruchtList);
    }

  ngOnInit():void{}

}
