import { createTheme } from '@mui/material/styles'
// import { COLORS } from './color'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    '2xl': true
  }
}

export const theme = createTheme({
  breakpoints: { // same as tailwind default breakpoint
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536
    }
  },
  typography: {
    fontFamily: '\'Open Sans\', sans-serif'
  }
  // palette: {
  //   primary: COLORS.primary,
  //   secondary: COLORS.secondary
  // }
  // components: {
  //   MuiPaper: {
  //     defaultProps: {
  //       variant: 'outlined'
  //     },
  //     styleOverrides: {
  //       root: {
  //         rounded: {
  //           borderRadius: '0.5rem'
  //         }
  //       }
  //     }
  //   },
  //   MuiCheckbox: {
  //     defaultProps: {
  //       disableRipple: true,
  //       disableFocusRipple: true,
  //       disableTouchRipple: true
  //     }

  //   },
  //   MuiSelect: {
  //     defaultProps: {
  //       variant: 'outlined',
  //       fullWidth: true,
  //       margin: 'dense'
  //     }
  //   },
  //   MuiTextField: {
  //     defaultProps: {
  //       variant: 'outlined',
  //       fullWidth: true,
  //       margin: 'dense'
  //     }
  //   },
  //   MuiListItem: {
  //     defaultProps: {
  //       dense: true
  //     },
  //     styleOverrides: {
  //       root: {
  //         cursor: 'pointer',
  //         '&:hover': {
  //           color: COLORS.primary.hover
  //         },
  //         '&:hover .MuiListItemIcon-root svg': {
  //           color: COLORS.primary.hover
  //         },
  //         container: {
  //           cursor: 'pointer',
  //           '&:hover': {
  //             color: COLORS.primary.hover
  //           }
  //         }
  //       }
  //     }
  //   },
  //   MuiButtonBase: {
  //     defaultProps: {
  //       color: 'primary'
  //     }
  //   },
  //   MuiIconButton: {
  //     styleOverrides: {
  //       root: {
  //         '&:hover': {
  //           backgroundColor: COLORS.primary.dark
  //         },
  //         color: 'white !important'
  //       }
  //     }
  //   },
  //   MuiButton: {
  //     defaultProps: {
  //       variant: 'contained',
  //       color: 'primary'
  //     },
  //     styleOverrides: {
  //       text: {
  //         textTransform: 'none',
  //         '&:hover': {
  //           backgroundColor: COLORS.primary.dark
  //         },
  //         color: ' !important'
  //       },
  //       root: {
  //         borderRadius: '0.75rem'
  //       },
  //       containedPrimary: {
  //         ':disabled': {
  //           color: ' !important',
  //           backgroundColor: '#4a426e !important',
  //           opacity: '0.5'
  //         }
  //       },
  //       containedSecondary: {
  //         ':disabled': {
  //           color: 'white !important',
  //           backgroundColor: '#fdc414 !important',
  //           opacity: '0.5'
  //         }
  //       }
  //     }
  //   },
  //   MuiTabs: {
  //     defaultProps: {
  //       indicatorColor: 'primary'
  //     }
  //   },
  //   MuiStepper: {
  //     defaultProps: {
  //       variant: 'elevation',
  //       elevation: 0
  //     }
  //   },
  //   MuiTab: {
  //     styleOverrides: {
  //       root: {
  //         minWidth: '0 !important',
  //         backgroundColor: 'white !important'
  //       },
  //       wrapped: {
  //         flexDirection: 'row',
  //         '& :first-child': {
  //           marginBottom: '0 !important'
  //         }
  //       }
  //     }
  //   },
  //   MuiInputBase: {
  //     styleOverrides: {
  //       root: {
  //         width: 'auto'
  //       }
  //     }
  //   },
  //   MuiDrawer: {
  //     styleOverrides: {
  //       root: {
  //         '& .MuiBackdrop-root, .MuiDrawer-paper': {
  //           height: '130%'
  //         }
  //       }
  //     }
  //   },
  //   MuiFormControl: {
  //     styleOverrides: {
  //       marginDense: {
  //         margin: '0px !important'
  //       }
  //     }
  //   },
  //   MuiInput: {
  //     styleOverrides: {
  //       root: {
  //         '&&:before': {
  //           borderBottom: '1px solid rgba(0, 0, 0, 0.23) !important'
  //         },
  //         '&&:after': {
  //           borderBottom: 'none'
  //         }
  //       }
  //     }
  //   },
  //   MuiOutlinedInput: {
  //     styleOverrides: {
  //       root: {
  //         '&:not(.read-only-input) fieldset': {
  //           border: '1px solid rgba(0, 0, 0, 0.28) !important'
  //         },
  //         '&.read-only-input fieldset': {
  //           border: '1px solid rgba(0, 0, 0, 0.08) !important'
  //         },
  //         borderRadius: '0.5rem'
  //       }
  //     }
  //   },
  //   MuiPopover: {
  //     styleOverrides: {
  //       paper: {
  //         borderRadius: '0.25rem'
  //       }
  //     }
  //   },
  //   MuiListItemIcon: {
  //     styleOverrides: {
  //       root: {
  //         minWidth: 0,
  //         marginRight: '1rem'
  //       }
  //     }
  //   },
  //   MuiAccordion: {
  //     styleOverrides: {
  //       root: {
  //         border: '1px solid rgba(0, 0, 0, .125)',
  //         boxShadow: 'none',
  //         '&:not(:last-child)': {
  //           borderBottom: 0
  //         },
  //         '&:before': {
  //           display: 'none'
  //         },
  //         '&$expanded': {
  //           margin: 'auto'
  //         }
  //       },
  //       expanded: {}
  //     }
  //   },
  //   MuiAccordionSummary: {
  //     styleOverrides: {
  //       root: {
  //         backgroundColor: 'rgba(0, 0, 0, .03)',
  //         borderBottom: '1px solid rgba(0, 0, 0, .125)',
  //         marginBottom: -1,
  //         minHeight: '3.5rem',
  //         '&$expanded': {
  //           minHeight: '3.5rem'
  //         }
  //       },
  //       content: {
  //         '&$expanded': {
  //           margin: '0.75rem 0'
  //         }
  //       },
  //       expanded: {}
  //     }
  //   },
  //   MuiAccordionDetails: {
  //     styleOverrides: {
  //       root: {
  //         padding: '1rem'
  //       }
  //     }
  //   },
  //   MuiFormHelperText: {
  //     styleOverrides: {
  //       root: {
  //         position: 'absolute',
  //         margin: 0,
  //         bottom: '-1.15rem',
  //         right: 0,
  //         height: '1.25rem',
  //         overflowY: 'hidden'
  //       }
  //     }
  //   },
  //   MuiDialogTitle: {
  //     styleOverrides: {
  //       root: {
  //         textAlign: 'center',
  //         paddingTop: '2rem',
  //         paddingBottom: '0.5rem',
  //         '& .MuiTypography-root': {
  //         }
  //       }
  //     }
  //   },
  //   MuiList: {
  //     styleOverrides: {
  //       root: {
  //         '& .MuiListItemText-secondary': {
  //           fontSize: '0.625rem'
  //         },
  //         '& .MuiListItem-root.Mui-selected': {
  //           '& .MuiListItemText-primary': {
  //             color: '#3b82f6'
  //           },
  //           '& .MuiListItemText-secondary': {
  //             color: '#3b82f6'
  //           }
  //         }
  //       }
  //     }
  //   },
  //   MuiStepLabel: {
  //     styleOverrides: {
  //       vertical: {
  //         height: '3rem',
  //         alignItems: 'flex-start',
  //         '& .MuiStepLabel-iconContainer': {
  //           height: '100%',
  //           alignItems: 'center'
  //         },
  //         '& .MuiStepLabel-labelContainer': {
  //           height: '50%',
  //           display: 'flex',
  //           justifyContent: 'flex-end',
  //           borderBottomWidth: '1px'
  //         },
  //         '& .MuiStepIcon-root': {
  //           height: '2rem',
  //           width: '2rem'
  //         },
  //         '& .MuiStepLabel-completed': {
  //           color: 'rgba(0, 0, 0, 0.54) !important'
  //         }
  //       }
  //     }
  //   },
  //   MuiStepIcon: {
  //     styleOverrides: {
  //       root: {
  //         '&.Mui-completed': {
  //           color: '#06C666'
  //         }
  //       }
  //     }
  //   },
  //   MuiRadio: {
  //     styleOverrides: {
  //       root: {
  //         '& .MuiSvgIcon-fontSizeSmall': {
  //           fontSize: '0.875rem'
  //         }
  //       }
  //     }
  //   },
  //   MuiTableCell: {
  //     defaultProps: {
  //       align: 'center'
  //     }
  //   }
  // }
})

export default theme
