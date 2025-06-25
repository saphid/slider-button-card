# Testing the Home Assistant 2025.5 Theming Fix

## Quick Test Setup

1. **Clone the fixed repository**:
   ```bash
   git clone https://github.com/alxDisplayr/slider-button-card.git
   cd slider-button-card
   git checkout fix/ha-2025-5-theming-compatibility
   ```

2. **Build the project**:
   ```bash
   npm install
   npm run build
   ```

3. **Copy the built file to Home Assistant**:
   ```bash
   # Copy dist/slider-button-card.js to your HA www folder
   cp dist/slider-button-card.js /path/to/homeassistant/config/www/
   ```

## Testing the Fix

### Before/After Comparison

**Before the fix (broken in HA 2025.5+)**:
- Icons appear white regardless of theme
- Action buttons appear black (invisible in dark themes)
- No proper theme color inheritance

**After the fix**:
- Icons use proper theme colors
- Action buttons visible in all themes
- Proper color inheritance from `--state-icon-color`

### Test Cases

1. **Light Theme Test**:
   - Switch to a light theme
   - Icons should be dark/visible
   - Action buttons should be properly colored

2. **Dark Theme Test**:
   - Switch to a dark theme  
   - Icons should be light/visible
   - Action buttons should be properly colored

3. **Custom Theme Test**:
   - Use a custom theme with specific icon colors
   - Icons should inherit the theme's icon colors

### Sample Card Configuration

```yaml
type: custom:slider-button-card
entity: light.living_room
name: Living Room Light
show_name: true
show_state: true
icon:
  use_state_color: true
  show: true
slider:
  direction: left-right
  background: gradient
  use_state_color: true
action_button:
  show: true
  mode: toggle
```

## Verification Steps

1. **Check CSS Variables** (Developer Tools):
   - Open browser dev tools
   - Inspect the slider button card
   - Look for `--state-icon-color` instead of `--paper-item-icon-color`

2. **Visual Verification**:
   - Icons should match your theme's icon colors
   - No white icons on dark backgrounds
   - No black buttons on dark themes

3. **Theme Switching**:
   - Switch between different themes
   - Icons should adapt to each theme's colors
   - Consistent behavior across all themes
