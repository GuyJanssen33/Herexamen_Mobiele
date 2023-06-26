import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailsPageRoutingModule } from './details-routing.module';
import { DetailsPage } from './details.page';
import {HttpClientModule} from "@angular/common/http";
import {ExploreContainerComponentModule} from "../../explore-container/explore-container.module";


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DetailsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [DetailsPage]
})
export class DetailsPageModule {}
