import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {Plant} from "../Datatypes/Plant";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  setData(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id === null) {
      return;
    }
    const plant = this.ApiService.getPlantById(id);


  }




  constructor( public ApiService: ApiService,  public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.setData();
  }

}

