import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RepoUsers } from '../../services/repo.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'isdi-user-list',
  template: `
    <div>
      <h2>User List</h2>
      <button (click)="loadAllUsers()">All Users</button>
      <button (click)="loadFriends()">My Friends</button>
      <button (click)="loadEnemies()">My Enemies</button>

      <ul *ngIf="users$ | async as users; else loading">
        <li *ngFor="let user of users">{{ user.name }}</li>
      </ul>
      <ng-template #loading><p>Loading...</p></ng-template>
    </div>
  `,
  styles: [
    `
      div {
        text-align: center;
      }
      ul {
        list-style: none;
        padding: 0;
      }
      li {
        padding: 5px;
        margin: 5px;
        background: #efefef;
      }
    `,
  ],
})
export class UserListComponent implements OnInit {
  users$: Observable<unknown[]> = new Observable();

  constructor(
    private repoUsers: RepoUsers,
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.loadAllUsers(); // Initially load all users
  }

  loadAllUsers() {
    this.users$ = this.repoUsers.getAllUsers();
  }

  loadFriends() {
    const userId = this.stateService.getCurrentUserId(); // This method needs to be implemented in StateService
    this.users$ = this.repoUsers.getFriends(userId);
  }

  loadEnemies() {
    const userId = this.stateService.getCurrentUserId(); // This method needs to be implemented in StateService
    this.users$ = this.repoUsers.getEnemies(userId);
  }
}
