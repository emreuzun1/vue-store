import '@fortawesome/fontawesome-free/css/all.css'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'

const customTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#F9F7F7',
    surface: '#DBE2EF',
    primary: '#3F72AF',
    'primary-darken-1': '#112D4E',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme,
    },
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
})
