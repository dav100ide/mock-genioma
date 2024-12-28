import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import { palette } from '@primeng/themes';

export const adarobozPrimaryPalette = palette('#242037');

console.log(adarobozPrimaryPalette);
export const AdarobozThemePreset = definePreset(Aura, {
  semantic: {
    primary: adarobozPrimaryPalette,
  },
});
