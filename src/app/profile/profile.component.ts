import { Component, OnInit, OnDestroy } from '@angular/core'
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component'
import { ProfileInfoComponent } from './components/profile-info/profile-info.component'
import { ProfileCtaComponent } from './components/profile-cta/profile-cta.component'
import { ActivatedRoute, Router } from '@angular/router'
import { CommonModule } from '@angular/common'
import { Store, select } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { setProfile } from './store/profile.actions' // Import the setProfile action
import { selectProfile } from './store/profile.selectors' // Import the selector for getting profile
import { ProfileModel } from './profile.model'
import { ProfileState } from './store/profile.reducer'

@Component({
  selector: 'app-profile',
  imports: [
    HttpClientModule,
    CommonModule,
    ProfileHeaderComponent,
    ProfileInfoComponent,
    ProfileCtaComponent
  ],
  standalone: true,
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit, OnDestroy {
  userId: string | null = null
  otherProfile: boolean = false
  profile$: Observable<ProfileModel | null>
  routeSub: Subscription | null = null

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ profile: ProfileState }>,
    private http: HttpClient,
    private router: Router
  ) {
    this.profile$ = this.store.pipe(select(selectProfile))
  }

  ngOnInit(): void {
    this.subscribeToRouteChanges()
  }

  subscribeToRouteChanges(): void {
    this.routeSub = this.route.paramMap.subscribe((params) => {
      this.userId = params.get('user-id')
      this.otherProfile = this.userId !== '1'
      this.getUserData()
    })
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe()
    }
  }

  getUserData() {
    this.http.get<ProfileModel[]>('/data/users.json').subscribe((users) => {
      const profile = users.find((user) => user.id === Number(this.userId))
      console.log(profile)
      if (profile) {
        this.store.dispatch(setProfile({ profile }))
      } else {
        this.router.navigate(['/profile/1'])
      }
    })
  }
}
