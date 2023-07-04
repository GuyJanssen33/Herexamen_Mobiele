import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";
import {Plant} from "../../Datatypes/Plant";

@Component({
  selector: 'app-tab1-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss'],
})
export class DetailsPage implements OnInit {

  public plant?:Plant;

  public linkUrl: string|any= this.plant?.details
  constructor(public ApiService: ApiService, public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.setData();
  }
  setData(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
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
console.log(plant)
      });
    }

  }


}
