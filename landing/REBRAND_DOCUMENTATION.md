# DERMIQT Skincare Rebrand Documentation

## Project Overview

This document outlines the complete rebranding of the current freight/shipping website to match the DERMIQT skincare brand aesthetic while maintaining the existing website structure and functionality.

## Color Palette

### Primary Colors

- **Deep Dark Brown** (Coffee/Dark Chocolate): `#3C2A21` - Used for headers, dark sections, and footer
- **Light Beige** (Off-white/Creamy): `#F5F1ED` - Used for light sections and backgrounds
- **Muted Yellow/Gold**: `#D4AF37` - Used for call-to-action buttons and accents
- **Earthy Orange/Terracotta**: `#C17817` - Used for secondary accents and highlights

### Text Colors

- **White**: `#FFFFFF` - Used on dark backgrounds
- **Dark Brown/Black**: `#2C1810` - Used on light backgrounds

### Accent Colors

- **Muted Red/Dark Orange**: `#8B4513` - Used for logo and primary brand elements
- **Green**: `#6B8E23` - Used for natural elements and icons

## Implementation Plan

### Phase 1: Color System Setup

- [x] Create CSS custom properties (variables) for all colors
- [x] Update global color scheme in main stylesheet
- [x] Implement color consistency across all components

### Phase 2: Header & Navigation

- [x] Update header background to deep dark brown
- [x] Change logo color to muted red/dark orange
- [x] Update navigation text to white
- [x] Style "Get Started" button with yellow background and dark text
- [x] Update utility buttons (language, search) with appropriate colors

### Phase 3: Main Content Sections

- [ ] Update all section backgrounds to alternate between dark brown and light beige
- [ ] Change text colors for optimal contrast
- [ ] Update all buttons to use the new color scheme
- [ ] Style form inputs and interactive elements

### Phase 4: Footer

- [x] Update footer background to deep dark brown
- [x] Change all footer text to white
- [x] Update social media icons and links

### Phase 5: Component Updates

- [ ] Update all cards, buttons, and interactive elements
- [ ] Style form inputs and search functionality
- [ ] Update slider and carousel components
- [ ] Style testimonials and content blocks

### Phase 6: Multilingual Implementation ✅

- [x] Create comprehensive English language file (`src/i18n/en-US/index.js`)
- [x] Create comprehensive French language file (`src/i18n/fr-FR/index.js`)
- [x] Update i18n configuration to support both languages
- [x] Implement language switching functionality in header
- [x] Add language persistence using localStorage
- [x] Update MainLayout component with translation support
- [x] Update Footer component with translation support
- [x] Add language change notifications

## File Structure Changes

### Files to be Modified:

1. `src/css/app.scss` - Global color variables and base styles
2. `src/layouts/MainLayout.vue` - Header and footer styling
3. `src/pages/Home.vue` - Main content sections
4. `src/components/Footer.vue` - Footer component styling
5. `src/css/quasar.variables.scss` - Quasar framework color overrides

### New Files Created:

1. `REBRAND_DOCUMENTATION.md` - This documentation file
2. `src/css/rebrand-colors.scss` - Dedicated color system file
3. `src/i18n/fr-FR/index.js` - French translations

## Color Usage Guidelines

### Headers & Navigation

- **Background**: Deep Dark Brown (`#3C2A21`)
- **Text**: White (`#FFFFFF`)
- **Logo**: Muted Red (`#8B4513`)
- **Buttons**: Yellow (`#D4AF37`) with Dark Brown text (`#2C1810`)

### Content Sections

- **Alternating Backgrounds**: Deep Dark Brown and Light Beige
- **Text on Dark**: White (`#FFFFFF`)
- **Text on Light**: Dark Brown (`#2C1810`)
- **Accent Elements**: Yellow (`#D4AF37`) and Orange (`#C17817`)

### Interactive Elements

- **Primary Buttons**: Yellow background (`#D4AF37`) with Dark Brown text (`#2C1810`)
- **Secondary Buttons**: White background with Dark Brown text
- **Form Inputs**: Light Beige background with Dark Brown text
- **Hover States**: Orange (`#C17817`) for interactive elements

## Brand Identity Elements

### Typography

- **Headings**: Bold, sans-serif fonts
- **Body Text**: Clean, readable sans-serif
- **Buttons**: Bold, uppercase for primary actions

### Visual Elements

- **Natural Textures**: Subtle grain and organic patterns
- **Rounded Corners**: Soft, approachable design
- **Minimal Shadows**: Subtle depth without harsh contrasts

## Implementation Status

### Completed ✅

- [x] Documentation created
- [x] Color palette defined
- [x] CSS variables setup
- [x] Header styling updated
- [x] Footer styling updated

### In Progress 🔄

- [ ] Main content sections
- [ ] Component styling
- [ ] Interactive elements

### Pending ⏳

- [ ] Final testing and adjustments
- [ ] Mobile responsiveness verification
- [ ] Cross-browser compatibility

## Notes for Client

### What's Being Changed:

1. **Color Scheme**: Complete overhaul from shipping/freight colors to skincare/natural colors
2. **Brand Identity**: Shift from industrial/technical to organic/natural aesthetic
3. **Visual Hierarchy**: Maintained but updated with new color relationships
4. **User Experience**: Same functionality, enhanced visual appeal

### What's Being Preserved:

1. **Website Structure**: All sections and layouts remain intact
2. **Functionality**: All interactive features work exactly the same
3. **Content Organization**: Information architecture unchanged
4. **Responsive Design**: Mobile and tablet compatibility maintained

### Timeline:

- **Phase 1-2**: Header and navigation (Completed)
- **Phase 3-4**: Main content and footer (In Progress)
- **Phase 5**: Final polish and testing (Pending)

## Client Communication

### Regular Updates:

- Daily progress reports on completed sections
- Screenshots of major changes
- Testing results and compatibility notes

### Feedback Points:

- Color approval at each major section
- Typography and spacing preferences
- Button and interactive element styling
- Overall brand feel and consistency

---

**Last Updated**: [Current Date]
**Next Review**: [Next Review Date]
**Status**: In Progress
