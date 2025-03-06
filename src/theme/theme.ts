import { outlinedInputClasses } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { EColors } from './helpers';

// 🎨 Define Global Theme
const theme = createTheme({
  palette: {
    primary: {
      main: EColors.primary, // Default primary color
    },
    secondary: {
      main: EColors.secondary, // Default secondary color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h6: {
      fontWeight: 600, // Default style for h6
    },
  },
  components: {
    // Default styles for buttons
    MuiButton: {
      defaultProps: {
        variant: 'contained', // All buttons will be "contained" by default
        color: 'primary',
      },
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevents uppercase text
          borderRadius: 8,
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
    },
    // Default styles for text fields
    MuiTextField: {
      defaultProps: {
        variant: 'outlined', // All text fields will be "outlined" by default
        fullWidth: true,
        size: 'small',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        notched: true,
      },
      styleOverrides: {
        input: {
          '&::placeholder': {
            fontSize: '0.75rem',
          },
        },

        notchedOutline: ({ theme }) => ({
          borderColor: theme.palette.primary.main,
        }),

        root: ({ theme }) => ({
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: theme.palette.primary.main,
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
    },
    // Default styles for selects
    MuiSelect: {
      defaultProps: {
        fullWidth: true,
        size: 'small',
        notched: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
