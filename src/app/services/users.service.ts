import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UsersResponse, UserResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';

interface state {
  loading: boolean,
  users: User[]
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient)

  #state = signal<state>({
    loading: true,
    users: []
  })

  public users = computed(() => this.#state().users)
  public loading = computed(() => this.#state().loading)

  constructor() { 
    this.http.get<UsersResponse>('http://localhost:5063/api/user')
    .pipe(delay(1500))
    .subscribe( res => {
      this.#state.set({
        loading: false,
        users: res.data
      })
    })    
  }

  getUserById(id: string){
    return this.http.get<UserResponse>(`http://localhost:5063/api/user/${id}`)
    .pipe(
      delay(1500),
      map(res => res.data)
    )   
  }

  saveUser(data: any){
    return this.http.post<User>(`http://localhost:5063/api/user`, data);
  }

}
