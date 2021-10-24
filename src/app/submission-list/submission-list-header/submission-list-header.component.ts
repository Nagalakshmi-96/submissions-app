import { Component, OnInit } from '@angular/core';

import { PlayerDataService } from '../../player-data.service';

@Component({
  selector: 'app-submission-list-header',
  templateUrl: './submission-list-header.component.html',
  styleUrls: ['./submission-list-header.component.css']
})
export class SubmissionListHeaderComponent implements OnInit {

  showHideFilter:boolean = false;
  showHideFilterButton:any = 'Show Filter';
  filterArrow:any="dropdownIcon";
  playerDetails:any;


  searchSubmissions: string = '';
  filterStatusval: string = 'All statuses';
  filterRegType:string='All types';
  filterRegClub:string='';
  filterSections:string='All sections';
  filterAssignees:string='All assignees';



  constructor(private playerService: PlayerDataService) {
    this.playerDetails=this.playerService.tempArray;
   }
  clearFiltersFn()
  {
    this.searchSubmissions='';
    this.filterStatusval= 'All statuses';
    this.filterRegType='All types';
    this.filterRegClub='';
    this.filterSections='All sections';
    this.filterAssignees="All assignees"
  }
  ngOnInit() {
  }
  showHideFilterFn()
  {
    this.showHideFilter = !this.showHideFilter;
    if(this.showHideFilter)
    {
        this.showHideFilterButton = "Hide Filter";
        this.filterArrow="dropdownIconInverted";
      }
      else
      {
        this.showHideFilterButton = "Show Filter";
        this.filterArrow="dropdownIcon";
      }
  }

}
