import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UsersService } from '../../../services/users.service';
import { TitleComponent } from '../../../shared/title/title.component';



@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {
  public userService = inject(UsersService)

  
}
