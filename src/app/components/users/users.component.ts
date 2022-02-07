import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Users[] = [];
  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.service.getUsers()
      .pipe(
        tap((users: Users[]) => this.users = users)
      )
        .subscribe();
  }

}
