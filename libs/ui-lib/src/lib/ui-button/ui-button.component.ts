import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'ui-button',
  template: `<p-button label="static p-button label" severity="secondary" />
    <div class="bg-primary text-primary-contrast border-primary-100">
      bg-primary text-primary-contrast border-primary-500
    </div> `,
  standalone: true,
  imports: [ButtonModule],
})
export class UiButtonComponent {}
