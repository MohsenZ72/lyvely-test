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
  onClick() {
    console.log('click on Edit cover')
  }
}
