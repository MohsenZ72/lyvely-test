import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() profileImage?: string = './assets/images/Avatar.jpg'

  constructor(private router: Router) {}

  redirectToProfile(): void {
    this.router.navigate(['/profile', 1])
  }
}
