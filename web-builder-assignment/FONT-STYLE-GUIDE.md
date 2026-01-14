# Font Style Guide - 3 Font Styles

This document outlines the standardized font styles used across the entire application.

## Font Families
- **Serif**: Georgia, 'Times New Roman', Times, serif
- **Sans-serif**: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

## The 3 Font Styles

### 1. Heading Style (Serif, 400)
**Usage**: All major headings (h2, h3, h4)
**Properties**:
- Font Family: Serif (Georgia)
- Font Weight: 400 (normal)
- Use Cases: Section titles, card titles, modal headings

**Examples**:
- "Featured Properties"
- "Our Services"
- "Client Testimonials"
- "Community Gallery"

### 2. Subheading Style (Serif, 300)
**Usage**: Hero headlines, secondary emphasis, stats
**Properties**:
- Font Family: Serif (Georgia)
- Font Weight: 300 (light)
- Use Cases: Hero h1, gallery captions, statistics

**Examples**:
- "The Pahrump Realtor" (Hero)
- Gallery image captions
- "30+" and "$50M+" (stats)

### 3. Body Style (Sans-serif, 400)
**Usage**: All body text, buttons, labels, UI elements
**Properties**:
- Font Family: Sans-serif (Inter)
- Font Weight: 400 (normal)
- Use Cases: Paragraphs, descriptions, buttons, form labels, links

**Examples**:
- Service descriptions
- Property descriptions
- Button text
- Form labels and inputs
- Footer text

## Implementation Notes

### Removed Font Weights
The following font weights have been removed for consistency:
- ~~font-weight: 500 (medium)~~
- ~~font-weight: 600 (semibold)~~
- ~~font-weight: 700 (bold)~~

### CSS Classes Removed
- ~~font-medium~~
- ~~font-semibold~~
- ~~font-bold~~

### Inline Styles
All font weights are now explicitly set via inline styles:
- `style={{ fontWeight: 300 }}` for subheadings
- `style={{ fontWeight: 400 }}` for headings and body text

## Consistency Checklist

✅ All h2 headings use Serif, 400
✅ All h3 headings use Serif, 400
✅ Hero h1 uses Serif, 300
✅ All body text uses Sans-serif, 400
✅ All buttons use Sans-serif, 400
✅ All form labels use Sans-serif, 400
✅ All links use Sans-serif, 400
✅ Gallery captions use Serif, 300
✅ Statistics use Serif, 300

## Benefits

1. **Visual Hierarchy**: Clear distinction between headings (Serif) and body (Sans-serif)
2. **Simplicity**: Only 3 font styles to maintain
3. **Performance**: Fewer font weights to load
4. **Consistency**: Uniform appearance across all components
5. **Accessibility**: Proper contrast and readability maintained
