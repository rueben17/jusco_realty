// Jusco Realtors — Tailwind theme, mapped from the Industry design system tokens.
// Works with the Play CDN as-is; for a build, export this object from tailwind.config.js.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        paper: '#ffffff',
        surface: '#e9e9ea',
        ink: '#1d1f20',
        divider: 'rgb(29 31 32 / 0.16)',
        accent: {
          DEFAULT: '#B22222',
          100: '#fde8e8', 200: '#f8c4c4', 300: '#f09a9a', 400: '#d45a5a', 500: '#c33a3a',
          600: '#B22222', 700: '#8B1A1A', 800: '#661414', 900: '#400d0d',
        },
        neutral: {
          100: '#f5f5f8', 200: '#e7e7ea', 300: '#d4d4d7', 400: '#b7b7ba', 500: '#98989b',
          600: '#7a7a7d', 700: '#5d5d60', 800: '#424244', 900: '#2b2b2d',
        },
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'system-ui', 'sans-serif'],
        body: ['Barlow', 'system-ui', 'sans-serif'],
      },
      borderRadius: { DEFAULT: '4px', sm: '2px', md: '4px', lg: '7px' },
      boxShadow: {
        sm: '0 1px 2px rgb(43 43 45 / 0.14)',
        md: '0 3px 10px rgb(43 43 45 / 0.16)',
        lg: '0 12px 32px rgb(43 43 45 / 0.22)',
      },
    },
  },
  plugins: [
    function ({ addBase, addComponents }) {
      addBase({
        'body': { textWrap: 'pretty', backgroundImage: "url('/static/img/bg-nairobi.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' },
        '[hidden]': { display: 'none !important' },
        '*:focus-visible': { outline: '2px solid #B22222', outlineOffset: '2px' },
        '::selection': { background: '#f8d4d4' },
        'a': { color: '#1d1f20', fontWeight: '600' },
        'a:hover': { color: '#B22222' },
        'header, footer': { backgroundColor: '#ffffff' },
        'main': { display: 'flex', flexDirection: 'column', gap: '24px', paddingBlock: '24px' },
      });
      const mark = 'rgb(29 31 32 / 0.55)';
      addComponents({
        // Blueprint frame: hairline border + four "+" registration marks (<i class="corner tl|tr|bl|br">)
        '.blueprint': { position: 'relative', border: '1px solid rgb(29 31 32 / 0.16)' },
        '.blueprint > .corner': { position: 'absolute', width: '11px', height: '11px', color: mark, pointerEvents: 'none' },
        '.blueprint > .corner::before, .blueprint > .corner::after': { content: '""', position: 'absolute', background: 'currentColor' },
        '.blueprint > .corner::before': { left: '5px', top: '0', width: '1px', height: '100%' },
        '.blueprint > .corner::after': { top: '5px', left: '0', width: '100%', height: '1px' },
        '.blueprint > .corner.tl': { top: '-6px', left: '-6px' },
        '.blueprint > .corner.tr': { top: '-6px', right: '-6px' },
        '.blueprint > .corner.bl': { bottom: '-6px', left: '-6px' },
        '.blueprint > .corner.br': { bottom: '-6px', right: '-6px' },
        // Duotone: photos are desaturated and washed in the steel accent
        '.duotone': { position: 'relative', overflow: 'hidden' },
        '.blueprint.duotone': { overflow: 'visible' },
        '.duotone > img': { filter: 'grayscale(1) contrast(1.05)' },
        '.duotone::after': { content: '""', position: 'absolute', inset: '0', background: '#5980a6', mixBlendMode: 'color', pointerEvents: 'none' },
        // Buttons
        '.btn': {
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flex: 'none',
          whiteSpace: 'nowrap', minHeight: '36px', padding: '7px 14px', fontSize: '14px', fontWeight: '500', lineHeight: '1.4',
          border: '1px solid transparent', borderRadius: '4px', cursor: 'pointer', textDecoration: 'none',
          transition: 'background-color .15s, color .15s, border-color .15s',
        },
        '.btn:disabled': { opacity: '0.45', cursor: 'not-allowed' },
        '.btn-primary, .btn-primary:hover': { color: '#f2f2f3' },
        '.btn-primary': { background: '#B22222' },
        '.btn-primary:hover': { background: '#8B1A1A' },
        '.btn-primary:active': { background: '#661414' },
        '.btn-secondary': { color: '#1d1f20', borderColor: 'rgb(29 31 32 / 0.16)' },
        '.btn-secondary:hover': { color: '#1d1f20', background: 'rgb(29 31 32 / 0.07)' },
        '.btn-secondary:active': { background: 'rgb(29 31 32 / 0.14)' },
        '.btn-ghost': { color: '#B22222', paddingInline: '6px' },
        '.btn-ghost:hover': { color: '#B22222', background: 'rgb(178 34 34 / 0.10)' },
        '.btn-ghost:active': { background: 'rgb(178 34 34 / 0.18)' },
        '.btn-icon': { width: '36px', height: '36px', padding: '0' },
        // Tag
        '.tag': { display: 'inline-flex', alignItems: 'center', fontSize: '11px', letterSpacing: '0.02em', padding: '3px 10px', borderRadius: '3px', background: '#fde8e8', color: '#661414' },
        // Section kicker
        '.kicker': { display: 'block', fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#B22222' },
        // Forms
        '.field-label': { display: 'block', fontSize: '12px', marginBottom: '5px', color: 'rgb(29 31 32 / 0.7)' },
        '.input': {
          width: '100%', minHeight: '36px', padding: '6px 10px', font: 'inherit', fontSize: '14px', color: '#1d1f20',
          caretColor: '#B22222', background: 'transparent', border: '1px solid rgb(29 31 32 / 0.16)', borderRadius: '4px',
        },
        '.input:hover': { borderColor: 'rgb(29 31 32 / 0.45)' },
        '.input:focus-visible': { borderColor: '#B22222', outlineOffset: '0' },
        '.input[aria-invalid="true"]': { borderColor: '#B22222', background: 'rgb(178 34 34 / 0.06)' },
        '.seg': { display: 'inline-flex', overflow: 'hidden', border: '1px solid rgb(29 31 32 / 0.16)', borderRadius: '4px' },
        '.seg-opt': { display: 'inline-flex', alignItems: 'center', padding: '7px 12px', fontSize: '13px', cursor: 'pointer', whiteSpace: 'nowrap' },
        '.seg-opt + .seg-opt': { borderLeft: '1px solid rgb(29 31 32 / 0.16)' },
        '.seg-opt:has(input:checked)': { background: '#B22222', color: '#f2f2f3' },
        '.seg-opt:not(:has(input:checked)):hover': { background: 'rgb(29 31 32 / 0.07)' },
        '.seg-opt:has(input:focus-visible)': { outline: '2px solid #B22222', outlineOffset: '-2px' },
      });
    },
  ],
};
