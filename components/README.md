# Components Directory Structure

This directory contains all React components used in the application. The components are organized into the following directories:

## Directory Structure

### `/admin`
Components used in the administrative interface:
- `LinksList`: Managing administrative links and settings

### `/features`
Main functional components implementing business features:
- `admission-plan`: Admission plans and requirements
- `application-button`: Course application buttons
- `contacts`: Contact information and forms
- `course-details`: Course information display
- `news-articles`: News listing and articles
- `news-search`: News search functionality
- `regions`: Region selection

### `/forms`
Form-related components:
- `application-form`: Course enrollment form
- `application-modal`: Application form modal
- `callback-form`: Callback request form
- `conditions-modal`: Terms and conditions modal
- `consultation-form`: Main consultation form
- `consultation-form-2`: Career test form
- `contact-form-modal`: Contact form modal

### `/layout`
Components defining the application structure:
- `footer`: Global footer
- `hero`: Landing page hero section
- `nav-bar`: Global navigation
- `providers`: Context providers
- `scroll-manager`: Scroll behavior management

### `/ui`
Reusable UI components:
- `button`: Custom button component
- `card`: Card container
- `loading-screen`: Full-screen loader
- `loading-spinner`: Loading animation
- `notification-toast`: Toast notifications
- `toaster`: Toast manager

### `/widgets`
External integrations and widgets:
- `bitrix24-widget`: Bitrix24 integration
- `call-widget`: Call request widget
- `mailru-counter`: Mail.ru counter integration

## Best Practices

1. Keep components focused and single-responsibility
2. Use appropriate directory based on component purpose
3. Maintain consistent naming conventions
4. Document complex components
5. Keep related files close together
