import { Component, Input, Output, EventEmitter } from '@angular/core'
import { ButtonComponent } from '../button/button.component'
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  @Input() isOpen = false
  @Output() isOpenChange = new EventEmitter<boolean>()

  closeDialog() {
    this.isOpen = false
    this.isOpenChange.emit(this.isOpen)
  }
}
