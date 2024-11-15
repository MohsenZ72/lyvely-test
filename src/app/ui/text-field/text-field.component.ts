import { Component, Input, Output, EventEmitter } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-text-field',
  standalone: true,
  templateUrl: './text-field.component.html',
  imports: [FormsModule]
})
export class TextFieldComponent {
  @Input() placeholder: string = ''
  @Input() value: string = ''
  @Input() type: string = 'text'
  @Input() inputClass: string = ''
  @Input() showSearchIcon: boolean = true
  @Output() valueChange = new EventEmitter<string>()

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement
    this.valueChange.emit(input.value)
  }
}
