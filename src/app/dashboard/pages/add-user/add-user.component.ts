import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { FormControl, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    CommonModule,  TitleComponent, ReactiveFormsModule
  ],
  templateUrl: './add-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AddUserComponent {

  private userService = inject(UsersService);

  addUserForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  AddUser(){
    console.log("add User")
    if( !this.addUserForm.valid){
      console.log("not valid")
      return
    }
    this.userService.saveUser(this.addUserForm.value).subscribe(
      res => {
        console.log(res)
    })
    console.warn(this.addUserForm.value);
  }

 }
