const theme = {
  color: {
    background: '#f8f9fa',
    text: {
      primary: '#212529',
      secondary: '#6b6375',
      heading: '#08060d',
    },
    border: {
      primary: '#001219',
      secondary: '#e5e4e7',
    },
    accent: {
      default: '#aa3bff',
      background: 'rgba(170, 59, 255, 0.1)',
      border: 'rgba(170, 59, 255, 0.5)',
    },
    code: {
      background: '#f4f3ec',
    },
    social: {
      background: 'rgba(244, 243, 236, 0.5)',
    },
    link: {
      default: '#70a288',
      hover: '#395748f3',
    },
    shadow: 'rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px',
  },

  font: {
    family: {
      body: "'Open Sans', 'Roboto', sans-serif",
      heading: "'Roboto', 'Open Sans', sans-serif",
      ui: "'Lato', 'Open Sans', sans-serif",
      mono: 'ui-monospace, Consolas, monospace',
    },
    size: {
      xs: '12px',
      sm: '14px',
      body: '16px',
      md: '18px',
      lg: '24px',
      xl: '36px',
      xxl: '56px',
      logo: '1.1rem',
    },
    weight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: '118%',
      body: '145%',
      code: '135%',
    },
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },

  layout: {
    headerHeight: '56px',
    sidebarWidth: '220px',
    borderWidth: '2px',
    borderRadius: {
      sm: '4px',
      md: '6px',
      lg: '8px',
    },
  },
}

export default theme
