import { Component, Input } from '@angular/core'
import { ButtonComponent } from '../../../ui/button/button.component'
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-profile-header',
  standalone: true,
  templateUrl: './profile-header.component.html',
  imports: [CommonModule, ButtonComponent]
})
export class ProfileHeaderComponent {
  @Input() coverImage?: string
  @Input() profileImage?: string
  @Input() otherProfile?: boolean = false
  fallbackCoverImage: string = './assets/images/fallback_cover_image.png'
  fallbackProfileImage: string = './assets/images/fallback_profile_image.png'
  onClick() {
    console.log('click on Edit cover')
  }

  onImageError(type: string): void {
    if (type === 'cover') {
      this.coverImage = this.fallbackCoverImage
    } else if (type === 'profile') {
      this.profileImage = this.fallbackProfileImage
    }
  }
}
