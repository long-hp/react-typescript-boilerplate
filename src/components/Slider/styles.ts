import { css, Theme } from 'wiloke-react-core';

export const disabled = (disabled: boolean) => {
  if (!disabled) {
    return {};
  }
  return css`
    debug: Slider-disabled;
    opacity: 0.4;
    cursor: no-drop;
  `;
};

export const container = (colors: Theme['colors']) => css`
  position: relative;
  padding: 5px 0;
  width: 100%;
  border-radius: 6px;
  touch-action: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: ${colors.dark};

  .rc-slider-rail {
    position: absolute;
    width: 100%;
    background-color: ${colors.info};
    height: 3px;
    border-radius: 6px;
  }

  .rc-slider-track {
    position: absolute;
    left: 0;
    height: 3px;
    border-radius: 6px;
    background-color: ${colors.primary};
  }

  .rc-slider-handle {
    position: absolute;
    margin-top: calc(-20px / 2.25);

    width: 20px;
    height: 20px;
    border: 2px solid transparent;

    cursor: pointer;
    border-radius: 50%;
    background-color: ${colors.primary};
    touch-action: pan-x;

    &:focus {
      outline: none;
    }

    &:hover {
      border: 2px solid rgba(${colors.rgbPrimary}, 0.2);
    }

    &:active {
      box-shadow: 0 0 5px rgba(${colors.rgbPrimary}, 0.2);
      cursor: pointer;
    }
  }

  .rc-slider-handle-click-focused {
    &:focus {
      box-shadow: unset;
    }
  }

  .rc-slider-mark {
    position: absolute;
    top: 18px;
    left: 0;
    width: 100%;
    font-size: 12px;
  }

  .rc-slider-mark-text {
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    color: ${colors.gray5};
  }

  .rc-slider-mark-text-active {
    color: ${colors.gray6};
  }

  .rc-slider-step {
    position: absolute;
    width: 100%;
    height: 4px;
    background: transparent;
  }

  .rc-slider-dot {
    position: absolute;
    bottom: -2px;
    margin-left: -4px;
    width: 8px;
    height: 8px;
    border: 1px solid ${colors.gray4};
    background-color: ${colors.light};
    cursor: pointer;
    border-radius: 50%;
    vertical-align: middle;
  }

  .rc-slider-dot-active {
    border-color: ${colors.gray4};
  }

  .rc-slider-dot-reverse {
    margin-right: -4px;
  }

  .rc-slider-disabled {
    background-color: ${colors.gray2};

    .rc-slider-track {
      background-color: ${colors.gray5};
    }
  }

  .rc-slider-disabled .rc-slider-handle,
  .rc-slider-disabled .rc-slider-dot {
    border-color: ${colors.gray5};
    box-shadow: none;
    background-color: ${colors.light};
    cursor: not-allowed;
  }

  .rc-slider-disabled .rc-slider-mark-text,
  .rc-slider-disabled .rc-slider-dot {
    cursor: not-allowed !important;
  }

  .rc-slider-vertical {
    width: 14px;
    height: 100%;
    padding: 0 5px;

    .rc-slider-rail {
      height: 100%;
      width: 4px;
    }

    .rc-slider-track {
      left: 5px;
      bottom: 0;
      width: 4px;
    }

    .rc-slider-handle {
      margin-left: -5px;
      touch-action: pan-y;
    }

    .rc-slider-mark {
      top: 0;
      left: 18px;
      height: 100%;
    }

    .rc-slider-step {
      height: 100%;
      width: 4px;
    }

    .rc-slider-dot {
      left: 2px;
      margin-bottom: -4px;

      &:first-child {
        margin-bottom: -4px;
      }

      &:last-child {
        margin-bottom: -4px;
      }
    }
  }

  .rc-slider-tooltip-zoom-down-enter,
  .rc-slider-tooltip-zoom-down-appear {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    display: block !important;
    animation-play-state: paused;
    transform: scale(0, 0);
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }

  .rc-slider-tooltip-zoom-down-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    display: block !important;
    animation-play-state: paused;
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);

    &.rc-slider-tooltip-zoom-down-leave-active {
      animation-name: rcSliderTooltipZoomDownOut;
      animation-play-state: running;
    }
  }

  .rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,
  .rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {
    animation-name: rcSliderTooltipZoomDownIn;
    animation-play-state: running;
  }

  .rc-slider-tooltip {
    position: absolute;
    left: -9999px;
    top: -9999px;
    visibility: visible;
    box-sizing: border-box;
    -webkit-tap-highlight-color: ${colors.dark};
  }

  .rc-slider-tooltip {
    * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: ${colors.dark};
    }
  }

  .rc-slider-tooltip-hidden {
    display: none;
  }

  .rc-slider-tooltip-placement-top {
    padding: 4px 0 8px 0;

    .rc-slider-tooltip-arrow {
      bottom: 4px;
      left: 50%;
      margin-left: -4px;
      border-width: 4px 4px 0;
      border-top-color: $color-gray-9;
    }
  }

  .rc-slider-tooltip-inner {
    padding: 6px 2px;
    min-width: 24px;
    height: 24px;
    font-size: 12px;
    line-height: 1;
    color: ${colors.light};
    text-align: center;
    text-decoration: none;
    background-color: ${colors.gray9};
    border-radius: 6px;
  }

  .rc-slider-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }

  @keyframes rcSliderTooltipZoomDownIn {
    0% {
      opacity: 0;
      transform-origin: 50% 100%;
      transform: scale(0, 0);
    }

    100% {
      transform-origin: 50% 100%;
      transform: scale(1, 1);
      opacity: 0;
      transform-origin: 50% 100%;
      transform: scale(0, 0);
    }
  }

  @keyframes rcSliderTooltipZoomDownOut {
    0% {
      transform-origin: 50% 100%;
      transform: scale(1, 1);
    }
  }
`;

export const loadingContainer = ({ colors }: Theme) => css`
  flex-grow: 1;
  height: 3px;
  position: relative;
  border-radius: 4px;
  background-color: ${colors.gray5};
`;

export const loadingInner = ({ colors }: Theme) => css`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 50%;
  background-color: ${colors.gray6};
  transform: translateY(-50%);
`;
