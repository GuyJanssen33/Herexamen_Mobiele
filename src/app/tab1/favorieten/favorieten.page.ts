import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Plant} from "../../Datatypes/Plant";
import {ApiService} from "../../services/api.service";
import {FavorietenService} from "../../services/favorieten.service"

@Component({
  selector: 'app-tab1-favorieten',
  templateUrl: 'favorieten.page.html',
  styleUrls: ['favorieten.page.scss'],
})
export class FavorietenPage implements OnInit {
  public plant?:Plant | any;
  public favorietenList = this.favorietenService.mijnFavorieten;
  public favorietePlanten: Array<Plant> = [];
  public linkUrl: string|any= this.plant?.details
  constructor(
              public ApiService: ApiService,
              public activatedRoute: ActivatedRoute,
              public route:ActivatedRoute,
              public favorietenService: FavorietenService) {}

  ngOnInit(): void {
    this.getList()
   this.favorietenList.forEach((id => {this.getPlants(id)}))

  }

getList(): void {
  this.favorietenList = this.favorietenService.mijnFavorieten;
}

plantToList(): void {
    if (this.favorietePlanten.includes(this.plant)) {
      this.favorietePlanten.push(this.plant);
    }
}
  getPlants(id:string): void {

    if (id != null){
      this.ApiService.getPlantById(id).subscribe(plant => {
        this.plant = plant;
        this.plant._id = plant._id;
        this.plant.Id = plant.Id;
        this.plant.naam = plant.naam;
        this.plant.zaaitijd = plant.zaaitijd;
        this.plant.zaaitijdBuiten = plant.zaaitijdBuiten;
        this.plant.oogsttijd = plant.oogsttijd;
        this.plant.zaaienTotKiem = plant.zaaienTotKiem;
        this.plant.zaaienTotOogst = plant.zaaienTotOogst;
        this.plant.plantafstand = plant.plantafstand;
        this.plant.categorie = plant.categorie;
        this.plant.details = plant.details;
        this.linkUrl = this.plant.details;

          this.favorietePlanten.push(this.plant);

        console.log (this.favorietePlanten);

  });


    }}}
