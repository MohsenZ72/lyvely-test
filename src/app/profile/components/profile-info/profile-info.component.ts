import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { DialogComponent } from '../../../ui/dialog/dialog.component'
import { TextFieldComponent } from '../../../ui/text-field/text-field.component'
import { FollowerModel, FollowingModel } from '../../profile.model'
import { FollowerCardComponent } from '../followers-card/followers-card.component'
@Component({
  selector: 'app-profile-info',
  imports: [
    CommonModule,
    DialogComponent,
    TextFieldComponent,
    FollowerCardComponent
  ],
  templateUrl: './profile-info.component.html',
  standalone: true
})
export class ProfileInfoComponent {
  @Input() fullname: string = ''
  @Input() username: string = ''
  @Input() bio: string = ''
  @Input() follower: FollowerModel[] = []
  @Input() following: FollowingModel[] = []
  @Input() otherProfile: boolean = false

  searchQuery: string = ''
  dialogOpen = false
  dialogType: string = 'following'

  openDialog(type: string) {
    this.dialogOpen = true
    this.dialogType = type
    this.searchQuery = ''
  }

  closeDialog() {
    this.dialogOpen = false
  }

  trackById(
    index: number,
    profile: FollowingModel | FollowerModel
  ): number | string {
    return profile.id
  }

  get filteredFollowers() {
    return this.follower.filter((f) =>
      f.username.toLowerCase().includes(this.searchQuery.toLowerCase())
    )
  }

  get filteredFollowing() {
    return this.following.filter((f) =>
      f.username.toLowerCase().includes(this.searchQuery.toLowerCase())
    )
  }

  constructor() {}
}
