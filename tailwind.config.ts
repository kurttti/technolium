import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			darkblue: '#1A365D',
  			cta: '#6B5BFF',
  			warning: '#FF6B35',
  		},
  		backgroundImage: {
  			'gradient-dark': 'linear-gradient(to bottom right, rgb(0, 2, 136, 0.9), rgb(0, 0, 0, 0.9))',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			btn: '8px',
  			card: '12px',
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		spacing: {
  			'btn-width-desktop': '240px',
  			'btn-height-desktop': '56px',
  			'btn-width-mobile': '90vw',
  			'card-width': '320px',
  			'card-height': '420px',
  			'section-margin': '2.5rem',
  			'card-padding': '1.5rem',
  			'min-gap-button-text': '1rem',
  		},
  		fontSize: {
  			'heading': '3.625rem',
  			'block': '64px',
  			'subheading': '1.75rem',
  			'body': '1rem',
  			'quote': '1.25rem',
  		},
  		lineHeight: {
  			'body': '1.6',
  			'quote': '1.8',
  		},
  		letterSpacing: {
  			'heading': '0.5px',
  			'button': '1px',
  			'tariff': '0.8px',
  			'banner': '1.2px',
  		},
  		boxShadow: {
  			'card': '0 4px 12px rgba(0, 0, 0, 0.1)',
  		},
  		textShadow: {
  			'banner': '1px 1px 4px rgba(0, 0, 0, 0.2)',
  		},
  		maxWidth: {
  			'content': '1750px',
  		},
  		screens: {
  			'mobile': '768px',
  			'tablet': '1024px',
  			'desktop': '1025px',
  		},
  		transitionDuration: {
  			'button': '300ms',
  			'tariff': '500ms',
  		},
  		zIndex: {
  			'modal': '1000',
  			'header': '100',
  		},
  		width: {
  			'icon-social': '24px',
  			'icon-menu': '32px',
  		},
  		height: {
  			'icon-social': '24px',
  			'icon-menu': '32px',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
