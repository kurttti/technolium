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
  			'section-margin': '64px',
  			'card-padding': '32px',
  			'min-gap-button-text': '16px',
  			'content-padding-desktop': '80px',
  			'content-padding-tablet': '80px',
  			'content-padding-mobile': '24px',
  			'btn-padding-x': '2.5rem',
  			'btn-padding-y': '1rem',
  			'btn-gap': '1rem',
  			'btn-icon-size': '1.25rem',
  			'btn-max-width': '280px',
  			'btn-height': '56px',
  			'btns-gap': '1.5rem',
  		},
  		fontSize: {
  			'h1': '4.052rem',
  			'h2': '3.441rem',
  			'h3': '2.953rem',
  			'h4': '2.25rem',
  			'h5': '1.563rem',
  			'h6': '1.25rem',
  			'text-lg': '1.125rem',
  			'text-base': '1rem',
  			'text-sm': '0.875rem',
  			'text-xs': '0.75rem',
  			'heading': '4.052rem',
  			'block': '3.441rem',
  			'subheading': '2.953rem',
  			'body': '2.25rem',
  			'quote': '1rem',
  		},
  		lineHeight: {
  			'h1': '1.2',
  			'h2': '1.3',
  			'h3': '1.4',
  			'h4': '1.5',
  			'h5': '1.6',
  			'h6': '1.7',
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
  			'text-content': '780px',
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
  		fontWeight: {
  			'h1': '700',
  			'h2': '700',
  			'h3': '600',
  			'h4': '600',
  			'h5': '500',
  			'h6': '500',
  			'text': '400',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
