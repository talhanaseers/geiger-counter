import presetUno from '@unocss/preset-uno'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
  ],
  include: [
    // Scan your source files for UnoCSS classes and directives
    './src/**/*.{js,jsx,ts,tsx,vue}',
    // Include your global.css file
    './src/styles/global.css',
  ],
  theme: {
    fontFamily: {
      'latin_modern_roman_caps10Ob': ['latin_modern_roman_caps10Ob', 'serif'],
      'lora_regular': ['lora_regular', 'serif'],
      'lora_medium': ['lora_medium', 'serif'],
      'lora_bold': ['lora_bold', 'serif'],
    },
  },
})
