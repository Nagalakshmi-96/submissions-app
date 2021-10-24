import { Component, OnInit,ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { PlayerDataService } from '../../player-data.service';

import { PlayerDetailsDataComponent } from '../player-details-data/player-details-data.component';

@Component({
  selector: 'app-player-details-header',
  templateUrl: './player-details-header.component.html',
  styleUrls: ['./player-details-header.component.css']
})
export class PlayerDetailsHeaderComponent implements OnInit {

  @ViewChild(PlayerDetailsDataComponent) child;

playerDetails:any;
currentPlayer:any;
id:any;
editContentFlag:boolean=false;




editContent()
{
  this.editContentFlag=!this.editContentFlag;
  this.child.edit();

}
updateContent()
{
  if(this.child.update()) this.editContentFlag=!this.editContentFlag;
}
cancelContent()
{
  this.child.cancel();
  this.editContentFlag=!this.editContentFlag;
}
constructor(private route: ActivatedRoute,private playerService: PlayerDataService) {

  this.playerDetails=this.playerService.tempArray;

  this.route.params.subscribe(res =>
   this.id=res.id);

   this.id=this.id-1;

   this.currentPlayer=this.playerDetails[this.id];

 }

ngOnInit() {


}
}
