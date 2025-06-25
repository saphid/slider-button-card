/* eslint-disable @typescript-eslint/naming-convention */
import { ActionConfig, LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'slider-button-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

export interface SliderButtonCardConfig extends LovelaceCardConfig {
  type: string;
  entity: string;
  name?: string;
  show_name?: boolean;
  show_state?: boolean;
  icon?: IconConfig;
  action_button?: ActionButtonConfig;
  slider?: SliderConfig;
  additional_entity?: AdditionalEntityConfig;
  theme?: string;
  debug?: boolean;
  compact?: boolean;
}

export interface ActionButtonConfig {
  mode?: ActionButtonMode;
  icon?: string;
  show?: boolean;
  show_spinner?: boolean;
  tap_action?: ActionConfig;
}

export interface IconConfig {
  icon?: string;
  show?: boolean;
  tap_action?: ActionConfig;
  use_state_color?: boolean;
}

export interface SliderConfig {
  min?: number;
  max?: number;
  step?: number;
  attribute?: string;
  direction?: SliderDirections;
  background: SliderBackground;
  use_percentage_bg_opacity?: boolean;
  use_state_color?: boolean;
  show_track?: boolean;
  toggle_on_click?: boolean;
  invert?: boolean;
  force_square: boolean;
  color?: string;
}

export interface AdditionalEntityConfig {
  entity?: string;
  attribute?: string;
  prefix?: string;
  suffix?: string;
  show?: boolean;
  position?: AdditionalEntityPosition;
}

export enum ActionButtonMode {
  TOGGLE = 'toggle',
  CUSTOM = 'custom',
}

export enum SliderDirections {
  LEFT_RIGHT = 'left-right',
  TOP_BOTTOM = 'top-bottom',
  BOTTOM_TOP = 'bottom-top',
}

export enum SliderBackground {
  SOLID = 'solid',
  GRADIENT = 'gradient',
  TRIANGLE = 'triangle',
  STRIPED = 'striped',
  CUSTOM = 'custom',
}

export enum AdditionalEntityPosition {
  ABOVE_STATE = 'above_state',
  BELOW_STATE = 'below_state',
  INLINE_STATE = 'inline_state',
  RIGHT_TOP = 'right_top',
  RIGHT_BOTTOM = 'right_bottom',
}

export enum Domain {
  LIGHT = 'light',
  SWITCH = 'switch',
  FAN = 'fan',
  COVER = 'cover',
  INPUT_BOOLEAN = 'input_boolean',
  MEDIA_PLAYER = 'media_player',
  CLIMATE = 'climate',
  LOCK = 'lock',
}

export const ActionButtonConfigDefault: ActionButtonConfig = {
  mode: ActionButtonMode.TOGGLE,
  icon: 'mdi:power',
  show: true,
  show_spinner: true,
  tap_action: {
    action: 'toggle'
  },
};

export const IconConfigDefault: IconConfig = {
  show: true,
  use_state_color: true,
  tap_action: {
    action: 'more-info'
  },
};

export const AdditionalEntityConfigDefault: AdditionalEntityConfig = {
  show: false,
  position: AdditionalEntityPosition.BELOW_STATE,
  attribute: 'state',
  prefix: '',
  suffix: '',
};

export const SliderConfigDefault: SliderConfig = {
  direction: SliderDirections.LEFT_RIGHT,
  background: SliderBackground.SOLID,
  use_percentage_bg_opacity: false,
  use_state_color: false,
  show_track: false,
  toggle_on_click: false,
  force_square: false,
};

export const SliderConfigDefaultDomain: Map<string, SliderConfig> = new Map([
  [Domain.LIGHT, {
    direction: SliderDirections.LEFT_RIGHT,
    background: SliderBackground.GRADIENT,
    use_state_color: true,
    use_percentage_bg_opacity: false,
    show_track: false,
    toggle_on_click: false,
    force_square: false,
  }],
  [Domain.FAN, {
    direction: SliderDirections.LEFT_RIGHT,
    background: SliderBackground.SOLID,
    use_state_color: false,
    use_percentage_bg_opacity: false,
    show_track: false,
    toggle_on_click: false,
    force_square: false,
  }],
  [Domain.SWITCH, {
    direction: SliderDirections.LEFT_RIGHT,
    background: SliderBackground.SOLID,
    use_state_color: false,
    use_percentage_bg_opacity: false,
    show_track: false,
    toggle_on_click: true,
    force_square: false,
  }],
  [Domain.COVER, {
    direction: SliderDirections.TOP_BOTTOM,
    background: SliderBackground.STRIPED,
    use_state_color: false,
    use_percentage_bg_opacity: false,
    toggle_on_click: false,
    show_track: false,
    force_square: false,
    invert: true,
  }],
  [Domain.INPUT_BOOLEAN, {
    direction: SliderDirections.LEFT_RIGHT,
    background: SliderBackground.SOLID,
    use_state_color: false,
    use_percentage_bg_opacity: false,
    show_track: false,
    toggle_on_click: true,
    force_square: false,
  }],
  [Domain.MEDIA_PLAYER, {
    direction: SliderDirections.LEFT_RIGHT,
    background: SliderBackground.TRIANGLE,
    use_state_color: false,
    use_percentage_bg_opacity: false,
    show_track: true,
    toggle_on_click: false,
    force_square: false,
  }],
  [Domain.LOCK, {
    direction: SliderDirections.LEFT_RIGHT,
    background: SliderBackground.SOLID,
    use_state_color: false,
    use_percentage_bg_opacity: false,
    show_track: false,
    toggle_on_click: true,
    force_square: false,
  }],
  [Domain.CLIMATE, {
    direction: SliderDirections.LEFT_RIGHT,
    background: SliderBackground.TRIANGLE,
    use_state_color: false,
    use_percentage_bg_opacity: false,
    show_track: true,
    toggle_on_click: false,
    force_square: false,
  }],
]);

export enum LightAttributes {
  COLOR_TEMP = 'color_temp',
  BRIGHTNESS = 'brightness',
  BRIGHTNESS_PCT = 'brightness_pct',
  HUE = 'hue',
  SATURATION = 'saturation',
  ON_OFF = 'onoff',
}

export enum LightColorModes {
  COLOR_TEMP = 'color_temp',
  BRIGHTNESS = 'brightness',
  HS = 'hs',
  ON_OFF = 'onoff',
}

export enum CoverAttributes {
  POSITION = 'position',
  TILT = 'tilt',
}
