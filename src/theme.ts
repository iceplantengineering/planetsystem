import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#6366F1',
          light: '#818CF8',
          dark: '#4338CA',
          contrastText: '#FFFFFF'
        },
        secondary: {
          main: '#8B5CF6',
          light: '#A78BFA',
          dark: '#7C3AED',
          contrastText: '#FFFFFF'
        },
        background: {
          default: '#0F0F23',
          paper: '#1A1A2E'
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#CBD5E1'
        },
        grey: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A'
        },
        warning: {
          main: '#F59E0B',
          light: '#FCD34D',
          dark: '#D97706',
          contrastText: '#000000'
        },
        info: {
          main: '#1E3A8A',
          light: '#3B82F6',
          dark: '#1E40AF',
          contrastText: '#FFFFFF'
        },
        success: {
          main: '#581C87',
          light: '#8B5CF6',
          dark: '#4C1D95',
          contrastText: '#FFFFFF'
        }
      }
    }
  },
  typography: {
    fontFamily: '"Space Grotesk", "Playfair Display", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2.75rem',
      lineHeight: 1.3
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4
    },
    h4: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.4
    },
    body1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.6
    },
    body2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.5
    }
  },
  shape: {
    borderRadius: 16
  }
});

export default theme;