import { Component, Input } from '@angular/core'
import { FollowerModel, FollowingModel } from '../../profile.model'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { addFollowing, removeFollowing } from '../../store/profile.actions' // Adjust this import to your actual store actions

@Component({
  selector: 'app-followers-card',
  standalone: true,
  templateUrl: './followers-card.component.html'
})
export class FollowerCardComponent {
  @Input() profile?: FollowerModel
  @Input() type: string = 'followers'
  @Input() following: FollowingModel[] = []
  @Input() follower: FollowerModel[] = []

  constructor(private router: Router, private store: Store) {}

  openGoToUser(id?: number) {
    if (id) {
      this.router.navigate([`/profile/${id}`])
    }
  }
  isFollowed(profileId: number | undefined): boolean {
    return this.following.some((follow) => follow.id === profileId)
  }

  onUnfollow(profileId: number | undefined) {
    if (profileId) {
      this.store.dispatch(removeFollowing({ id: profileId }))
    }
  }

  onFollowBack(profile: FollowerModel | undefined) {
    if (profile) {
      // Dispatch action to add the profile to following list
      this.store.dispatch(addFollowing({ profile }))
    }
  }
}
