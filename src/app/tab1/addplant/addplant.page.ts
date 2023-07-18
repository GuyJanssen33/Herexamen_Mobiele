import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";
import {Plant} from "../../Datatypes/Plant";
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {FavorietenService} from "../../services/favorieten.service";

@Component({
  selector: 'app-addplant',
  templateUrl: './addplant.page.html',
  styleUrls: ['./addplant.page.scss'],
})
export class AddplantPage implements OnInit {

  public highestValue: number|any;
  public plant?:Plant | any;
  _id: string | any= "";
  id:number | any;
  naam: string | any;
  categorie: string | any;
  zaaitijdBuiten: string | any;
  zaaitijd: string | any;
  oogsttijd: string | any;
  zaaienTotKiem: string | any;
  zaaienTotOogst: string | any;
  plantafstand: string | any;
  details: string | any;
  constructor(public router: Router,
              public ApiService: ApiService,
              public favorietenservice: FavorietenService,
              public activatedRoute: ActivatedRoute,
              public navCtrl: NavController) { }

  addPlant(plant: Plant): void {
    const newPlant: Plant = {
      _id: "",
      Id: this.id,
      naam: this.naam,
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
    this.ApiService.addPlant(newPlant).subscribe(
      response => {console.log('Plant succesvol toegevoegd: ', response);
      },
      error => {
        console.log('Er is een fout opgetreden: ', error);
      }
    );
  }


  async ngOnInit() {
    const Plantlist: Plant[]|any = await this.ApiService.getPlant().toPromise();
    this.highestValue = this.findHighestValue(Plantlist);
  }

  findHighestValue(Plantlist: Plant[]): number {
    return this.highestValue = Plantlist.reduce((maxValue, plant) => plant.Id > maxValue ? plant.Id : maxValue, 0) + 1;
  }

}
