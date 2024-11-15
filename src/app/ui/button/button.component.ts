import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'

type ButtonStyle = 'filled' | 'filled-dark' | 'outline' | 'transparent' | 'icon'

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() label = ''
  @Input() icon?: string
  @Input() iconPosition: 'left' | 'right' = 'left'
  @Input() style: ButtonStyle = 'filled'
  @Input() disabled = false
  @Input() iconOnly = false

  @Output() clicked = new EventEmitter<Event>()

  onClick(event: Event) {
    if (!this.disabled) {
      this.clicked.emit(event)
    }
  }

  getButtonStyles(): string {
    switch (this.style) {
      case 'filled':
        return 'bg-white text-[#251E31] hover:opacity-90	'
      case 'filled-dark':
        return 'bg-[#251E31] text-white hover:opacity-90	'
      case 'outline':
        return 'border border-white text-white hover:bg-white  hover:text-[#251E31]'
      case 'transparent':
        return 'bg-[#0000004D] text-white hover:bg-[#000000]'
      case 'icon':
        return 'p-2 text-white hover:bg-blue-100 '
      default:
        return ''
    }
  }
}
