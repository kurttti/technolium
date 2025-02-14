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
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  			darkblue: '#1A365D',
  			cta: '#6B5BFF',
  			warning: '#FF6B35',
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
