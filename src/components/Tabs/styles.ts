import { css, nightModeBlacklist, Theme } from 'wiloke-react-core';

export const container = ({ colors }: Theme) => css`
  debug: Tab-container;
  position: relative;

  .rc-tabs {
    border: none !important;
  }

  .rc-tabs-nav-more {
    cursor: pointer !important;
    outline: none !important;
  }

  .rc-tabs-tab {
    padding: 4px 0;
    text-transform: capitalize;
    background-color: transparent !important;
    background: transparent;
    color: ${colors.dark};
  }

  .rc-tabs-nav {
    margin-bottom: 8px;
    align-items: center;
  }

  .rc-tabs-nav-wrap {
    &::before,
    &::after {
      content: '';
      display: none;
    }
  }

  .rc-tabs-nav-more {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${colors.light};
    color: ${colors.gray8};
    border: 1px solid ${colors.gray4};
    cursor: pointer;

    font-size: 14px;
    padding: 10px 16px;
    margin: 0 !important;

    outline: none !important;
  }

  .rc-tabs-tab .rc-tabs-tab-btn {
    font-weight: 400;
    font-size: 14px;
    border: none;

    &:active,
    &:hover,
    &:focus {
      border: none;
      outline: none;
    }
  }

  .rc-tabs-tab.rc-tabs-tab-active {
    color: ${colors.behance} !important;
  }

  .rc-tabs-ink-bar {
    background: ${colors.behance} !important;
  }

  .rc-tabs-tab-disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  .rc-tabs-tabpane {
    font-size: 14px;
    color: ${colors.gray9};

    &:active,
    &:hover,
    &:focus {
      border: none;
      outline: none;
    }
  }

  :global {
    .rc-tabs-dropdown {
      transition: 0.3s ease-in-out;
      border: unset !important;
      outline: unset !important;
      box-shadow: 0 3px 6px -4px rgba(${colors.rgbDark}, 0.12), 0 6px 16px 0 rgba(${colors.rgbDark}, 0.08),
        0 9px 28px 8px rgba(${colors.rgbDark}, 0.05);

      &:hover,
      &:focus,
      &:active {
        outline: unset !important;
      }
    }
    .rc-tabs-dropdown-menu {
      border: unset !important;
      &:hover,
      &:focus,
      &:active {
        outline: unset !important;
      }
    }
    .rc-tabs-dropdown-menu-item {
      padding: 4px 12px;
      transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
      font-size: 14px;
      color: ${nightModeBlacklist(colors.gray8)};
      cursor: pointer !important;
    }
  }
`;

export const tabPaneChildren = css`
  padding: 8px;
`;
