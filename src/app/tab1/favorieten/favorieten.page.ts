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
  public plant?: Plant|any;
  public favorietenLijst: Array<string> = [];
  public favorietePlanten: Array<Plant> = [];
  public id = this.activatedRoute.snapshot.paramMap.get('id');
  constructor(
    public ApiService: ApiService,
    public activatedRoute: ActivatedRoute,
    public route:ActivatedRoute,
    public favorietenService: FavorietenService) {}

  ngOnInit(): void {
    this.getListFromService().then(() => {

      if (this.id != null) {
        this.putIdToList();
      }


      console.log(this.favorietenLijst);

      if (this.favorietenLijst.length > 0) {
        console.log("nu nog de volgende methoden");
        this.getPlantsFromList()
      }
    });
  }

  ionViewDidLeave() {
    this.favorietenService.saveList(this.favorietenLijst);
  }
  getPlantsFromList(){
    console.log("hier zijn we geraakt")
    console.log(this.favorietenLijst.length);
    this.favorietenLijst.forEach((id) => {
        this.ApiService.getPlantById(id).subscribe((plant) => {
          this.favorietePlanten.push(plant);
          console.log(this.favorietePlanten)
        });
      }
    );
  }
  putIdToList(){
    console.log("nu gaan we de id toeveogen")

    if (this.id!=null){
      console.log(this.favorietenLijst)
      this.favorietenLijst.push(this.id);
      console.log(this.favorietenLijst)
      this.favorietenService.saveList(this.favorietenLijst);
    }
  }

  async getListFromService(){
    await this.favorietenService.getList().then((result) => {
      this.favorietenLijst = result;
      console.log(this.favorietenLijst);

    });
  }

}
