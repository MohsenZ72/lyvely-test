import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from '../../../ui/button/button.component'
@Component({
  selector: 'app-profile-cta',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './profile-cta.component.html'
})
export class ProfileCtaComponent {
  @Input() otherProfile?: boolean = false
}
