import { Component, OnInit, Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-add-assignee',
  templateUrl: './add-assignee.component.html',
  styleUrls: ['./add-assignee.component.css']
})
export class AddAssigneeComponent implements OnInit {

  @Input() player:any;
  assignee:any='';

  showAssigneeFlag:boolean=false;
  showCancelAssignee:boolean=false;

  constructor(private cdRef:ChangeDetectorRef) {

  }
  ngAfterViewChecked()
{
  this.cdRef.detectChanges();
}

  ngAfterViewInit()
  {
    if(this.player.assigneeShort!="NA")
    {
      this.showCancelAssignee=true;
      this.assignee=this.player.assignee;
    }
    else
    {
      this.showCancelAssignee=false;
    }
  }




  ngOnInit() {
  }
  addAssigneeFn(event:Event)
  {
    this.showAssigneeFlag = true;
    event.stopPropagation();
  }
  closePopup()
  {
    this.showAssigneeFlag = false;
  }
  updateAssignee(value)
  {
    this.showAssigneeFlag = false;
    this.showCancelAssignee=true;

    if(value=="FAR TEST")
    {
        this.player.assigneeShort="FT";
        this.player.assignee="FAR TEST";
        this.player.color="FAR TEST";
    }
    else if(value=="Jordan Caggiano")
    {
      this.player.assigneeShort="JC";
      this.player.assignee="Jordan Caggiano";
    }
    else if(value=="me")
    {
    this.player.assigneeShort="TL";
    this.player.assignee="Tim Lake";
    }

  }
  cancelAssignee()
  {
    this.assignee='';
    this.showCancelAssignee=false;
    this.player.assigneeShort="NA";
    this.player.assignee="NA";

  }
  findColor(colorVal)
  {
    if(colorVal=="JC")
    {
      return "JCassignee";
    }
    else if(colorVal=="FT") return "FTAssignee";
    else if(colorVal=="TL") return "TLAssignee";
  }

}
