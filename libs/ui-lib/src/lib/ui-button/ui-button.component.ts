import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'ui-button',
  template: `<p-button label="static p-button label" />`,
  standalone: true,
  imports: [ButtonModule],
})
export class UiButtonComponent {}
