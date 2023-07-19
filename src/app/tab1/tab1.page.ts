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
  public isListLoaded: boolean = false;
  public newFavorite : any;
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

  isClicked: boolean = false;
  constructor( public ApiService: ApiService) {}

  toggleClick() {
    this.isClicked = !this.isClicked;
  }
  sendId(_id:string) {
    console.log(_id)
    const id: string =_id
    console.log('ID:',id)
  }


   ionViewDidLeave() {
    this.isListLoaded = false;
   }
  ionViewWillEnter() {
    if(!this.isListLoaded){
      this.getListAndDivide();
      this.isListLoaded = true;
    }

  }
  getListAndDivide(){
    this.PlantList.subscribe(plant => plant.forEach(
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
  ngOnInit():void{


  }

}
