import { isLoggedIn, isLoggedOut } from './auth/auth.selectors';
import { distinctUntilChanged } from 'rxjs/operators';
import { map, Observable } from 'rxjs';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppState } from './reducers';
import { select, Store } from '@ngrx/store';
import { login, logout } from './auth/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loading = false;
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    const userProfile = localStorage.getItem('user');

    if (userProfile)
      this.store.dispatch(login({ user: JSON.parse(userProfile) }));

    this.router.events.subscribe((event) => {
      // console.log(event);
      if (event instanceof NavigationStart) this.loading = true;
      else if (event instanceof NavigationEnd) this.loading = false;
    });

    this.store.subscribe((state) => console.log('state value : ', state));

    // this.isLoggedIn$ = this.store.pipe(map((state) => !!state['auth'].user), distinctUntilChanged());
    // this.isLoggedOut$ = this.store.pipe(map((state) => !state['auth'].user), distinctUntilChanged());

    // this.isLoggedIn$ = this.store.pipe(select((state) => !!state['auth'].user), distinctUntilChanged());
    // this.isLoggedOut$ = this.store.pipe(select((state) => !state['auth'].user), distinctUntilChanged());

    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn),
      distinctUntilChanged()
    );
    this.isLoggedOut$ = this.store.pipe(
      select(isLoggedOut),
      distinctUntilChanged()
    );
  }

  logout() {
    this.store.dispatch(logout());
  }
}
