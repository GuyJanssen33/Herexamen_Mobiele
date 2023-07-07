import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Plant} from "../../Datatypes/Plant";
import {ApiService} from "../../services/api.service";
import {ListService} from "../../services/Favorieten.service";
import {IdService} from "../../services/id.service"
@Component({
  selector: 'app-tab1-favorieten',
  templateUrl: 'favorieten.page.html',
  styleUrls: ['favorieten.page.scss'],
})
export class FavorietenPage implements OnInit {
  public plant?:Plant | any;
  public FavorietenList: Array<Plant> = [];
 /* public receivedId: string;*/
  public linkUrl: string|any= this.plant?.details
  constructor(public idService:IdService,
              public ApiService: ApiService,
              public activatedRoute: ActivatedRoute,
              public route:ActivatedRoute,
              public listService: ListService) {}

  ngOnInit(): void {
    this.setData();
    /*this.getPlant();*/
    /*const objectData = history.state.objectData;*/
    /*const favPlant = objectData;*/
    console.log(this.FavorietenList);
    console.log(this.FavorietenList.length);

  }

  /*getPlant(): void {
    const objectData = history.state.objectData
    this.plant = objectData;
    if (objectData != null){
      this.ApiService.getPlantById(this.receivedId)
        .subscribe(plant => {this.FavorietenList.push(plant);});
      console.log(this.FavorietenList);
    }
  }*/

  addToList():void {
    this.listService.addObject(this.plant);
    this.listService.getList().subscribe(list => this.FavorietenList = list);
    console.log(this.FavorietenList);
  }
  setData(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
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
        /*this.receivedId = id;*/
        this.FavorietenList.push(this.plant);
        this.addToList();

        console.log(this.FavorietenList)
        console.log(this.FavorietenList.length)
      });


    }


}}
