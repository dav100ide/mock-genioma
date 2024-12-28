import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from '@mock-genioma/ui-lib';
@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, UiButtonComponent],
  template: `
    <div class="container text-lg text-center bg-primary mb-4">primary??</div>
    <div class="container text-lg text-center bg-red-300 rounded">
      <ui-button />
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
