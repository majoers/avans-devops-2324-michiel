import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
   user!: User;
   userForm =  this.fb.group({
    userFirstName:  new FormControl<string>(
      '',
      Validators.required
    ),
    userLastName: new FormControl<string>(
      '',
      Validators.required
    ),

  });

  constructor(private userService: UserService, private fb: FormBuilder,) { }

  onSubmit(): void {
   console.log("works!")
   this._mapFormValuesToModel();
   this.userService.addUser(this.user).subscribe();
  }

  ngOnInit(): void {

  }

  private _mapFormValuesToModel() {
    this.user = {
      _id: undefined,
      firstName: this.userForm.value.userFirstName!,
      lastName: this.userForm.value.userLastName!,

    }
  }

}
