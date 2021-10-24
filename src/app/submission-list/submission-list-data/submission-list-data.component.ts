import { Component, OnInit, Input,ViewChildren  } from '@angular/core';

@Component({
  selector: 'app-submission-list-data',
  templateUrl: './submission-list-data.component.html',
  styleUrls: ['./submission-list-data.component.css']
})
export class SubmissionListDataComponent implements OnInit {

  @Input() playerDetails: any;
  @Input() searchText:any;
  @Input() filterStatus:any;
  @Input() filterRegType:any;
  @Input() filterRegClub:any;
  @Input() filterSections:any;
  @Input() filterAssignees:any;

  //@ViewChildren('myVar') createdItems;
  p:number=1;
  filLen:number;
/// <amd-dependency path="






  a:any;
  test()
  {
    console.log(this.a.length);
  }


    //this.filLen=Math.ceil(this.createdItems.toArray().length/3);

  showHideFilter:boolean = false;
  showHideFilterButton:any = 'Show Filter';
  filterArrow:any="dropdownIcon";


  constructor() {

  }

  ngOnInit() {

  }


  findApplicationStatus(status)
  {
    if(status == "Pending (FA & League)" || status == "Pending (FA)") return "pendingStyle";
    else if(status == "Pending (League)") return "pendingStyle2";
    else if(status == "On-hold") return "holdStyle";
    else if(status == "Rejected") return "rejectedStyle";
    else if(status == "Approved") return "approvedStyle";
  }
  findStatusIcon(status) {
     if(status == "pending") return "pendingIcon";
     else if(status == "approved") return "approvedIcon";
     else if(status == "rejected") return "rejectedIcon";
     else if(status == "NA") return "NAIcon";
     else if(status == "hold") return "holdIcon";
   }


}
