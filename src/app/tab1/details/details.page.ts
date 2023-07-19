import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";
import {Plant} from "../../Datatypes/Plant";
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {FavorietenService} from "../../services/favorieten.service";

@Component({
  selector: 'app-tab1-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss'],
})
export class DetailsPage implements OnInit {

  public plant?:Plant|any;
  public favPlant?:Plant = this.plant;


  public naam: string|any = this.plant?.naam;
  public _id: string|any = this.plant?._id;
  public Id: number|any = this.plant?.Id;
  public zaaitijd: string|any = this.plant?.zaaitijd;
  public zaaitijdBuiten: string|any = this.plant?.zaaitijdBuiten;
  public oogsttijd: string|any = this.plant?.oogsttijd;
  public zaaienTotKiem: string|any = this.plant?.zaaienTotKiem;
  public zaaienTotOogst: string|any = this.plant?.zaaienTotOogst;
  public plantafstand: string|any = this.plant?.plantafstand;
  public categorie: string|any = this.plant?.categorie;
  public details: string|any = this.plant?.details;
  public linkUrl: string|any= this.plant?.details
  constructor(public router: Router,
              public ApiService: ApiService,
              public favorietenservice: FavorietenService,
              public activatedRoute: ActivatedRoute,
              public navCtrl: NavController) {}

  ngOnInit(): void {
    this.setData();
  }

  AddPlantToFavorietenList(): void {

    const id : string|any = this.plant?._id;

    this.favorietenservice.mijnFavorieten.push(id);
  }

  updatePlant(plant: Plant): void {
    const newPlant: Plant = {
      _id: this._id,
      Id: this.Id,
      naam: this.naam ,
      zaaitijd: this.zaaitijd,
      zaaitijdBuiten: this.zaaitijdBuiten,
      oogsttijd: this.oogsttijd,
      zaaienTotKiem: this.zaaienTotKiem,
      zaaienTotOogst: this.zaaienTotOogst,
      plantafstand: this.plantafstand,
      categorie: this.categorie,
      details: this.details,
    };
    console.log(newPlant);
    this.ApiService.updatePlant(newPlant).subscribe(
      response => {console.log('Plant succesvol toegevoegd: ', response);
      },
      error => {
        console.log('Er is een fout opgetreden: ', error);
      }
    );
  }
  navigateToFavorietenPage() {
    const myObject = { favPlant: this.plant};
    this.navCtrl.navigateForward('favorieten', );
  }
  setData(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null){
      this.ApiService.getPlantById(id).subscribe(plant => {
        this.plant = plant;
        this._id = plant._id;
        this.Id = plant.Id;
        this.naam = plant.naam;
        this.zaaitijd = plant.zaaitijd;
        this.zaaitijdBuiten = plant.zaaitijdBuiten;
        this.oogsttijd = plant.oogsttijd;
        this.zaaienTotKiem = plant.zaaienTotKiem;
        this.zaaienTotOogst = plant.zaaienTotOogst;
        this.plantafstand = plant.plantafstand;
        this.categorie = plant.categorie;
        this.details = plant.details;
        this.linkUrl = this.plant.details;

      });
    }

  }


}
