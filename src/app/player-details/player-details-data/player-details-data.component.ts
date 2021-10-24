import { Component, OnInit, Input , AfterViewInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-player-details-data',
  templateUrl: './player-details-data.component.html',
  styleUrls: ['./player-details-data.component.css']
})
export class PlayerDetailsDataComponent implements OnInit {


@Input() player: any;
@Input() editFlag:any;



details: any;
playerCopy:any;
numSplCharsPattern = "^[a-zA-Z ]*$";
insNumPattern = "^[a-zA-Z0-9 ]*$";
numSplChars2Pattern = "^[a-zA-Z- ]*$";


playerForm = new FormGroup({
   firstName: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(this.numSplCharsPattern)
      ]),

   lastName: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(this.numSplCharsPattern)
      ]),


   preferredName: new FormControl('',[
      Validators.required,
      Validators.pattern(this.numSplChars2Pattern)
      ]),


   gender:new FormControl(''),

   dateOfBirth:new FormControl(''),

   townOfBirth:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(this.numSplCharsPattern)
      ]),



   countryOfBirth:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(this.numSplCharsPattern)
      ]),


   nationalities:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(this.numSplCharsPattern)
      ]),


   nationalInsuranceNumber:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(this.insNumPattern)
      ]),


   submittedBy:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(this.numSplCharsPattern)
      ]),

   registrationDateTime:new FormControl(''),

   submittedDateTime:new FormControl('')

});


  constructor() {




  }

  ngOnInit() {




  }

  edit()
  {
    this.playerCopy=this.player;

    this.playerForm.patchValue({
      firstName: this.player.firstName,
      lastName:this.player.lastName,
      preferredName:this.player.preferredName,
      gender:this.player.gender,
      dateOfBirth:this.player.dateOfBirth,
      townOfBirth:this.player.townOfBirth,
      countryOfBirth:this.player.countryOfBirth,
      nationalities:this.player.nationalities,
      nationalInsuranceNumber:this.player.nationalInsuranceNumber,
      submittedBy:this.player.submittedBy,
      registrationDateTime:this.player.registrationDate+" "+this.player.registrationTime,
      submittedDateTime:this.player.submittedDate+" "+this.player.submittedTime
    });
  }
  update()
  {
    if(this.playerForm.status=="VALID")
    {
      this.player.firstName=this.playerForm.get('firstName').value;
      this.player.lastName=this.playerForm.get('lastName').value;
      this.player.preferredName=this.playerForm.get('preferredName').value;
      this.player.gender=this.playerForm.get('gender').value;
      this.player.townOfBirth=this.playerForm.get('townOfBirth').value;
      this.player.dateOfBirth=this.playerForm.get('dateOfBirth').value;
      this.player.countryOfBirth=this.playerForm.get('countryOfBirth').value;
      this.player.nationalities=this.playerForm.get('nationalities').value;
      this.player.nationalInsuranceNumber=this.playerForm.get('nationalInsuranceNumber').value;
      this.player.submittedBy=this.playerForm.get('submittedBy').value;
      this.player.registrationDate=(this.playerForm.get('registrationDateTime').value).slice(0,11);
      this.player.registrationTime=(this.playerForm.get('registrationDateTime').value).slice(13,);
      this.player.submittedDate=(this.playerForm.get('submittedDateTime').value).slice(0,11);
      this.player.submittedTime=(this.playerForm.get('submittedDateTime').value).slice(13,);

      return true;
    }
    else
    {
      return false;
    }
  }

  cancel()
  {
    this.player=this.playerCopy;
  }
  getColor(status)
  {
      if(status == "Pending (FA & League)" || status == "Pending (FA)") return "pendingStyleBg";
      else if(status == "Pending (League)") return "pendingStyle2Bg";
      else if(status == "On-hold") return "holdStyleBg";
      else if(status == "Rejected") return "rejectedStyleBg";
      else if(status == "Approved") return "approvedStyleBg";
  }

}
