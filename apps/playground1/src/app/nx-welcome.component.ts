import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from '@mock-genioma/ui-lib';
@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, UiButtonComponent],
  template: `
    <div class="container text-xl font-bold primary-50">primary??</div>
    <div class="container text-lg text-center bg-secondary rounded-xl">
      <ui-button />
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
