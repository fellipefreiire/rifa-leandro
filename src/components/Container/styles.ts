import { styled } from '../../styles/theme/default'

export const Container = styled('div', {
  maxWidth: '540px',
  paddingRight: '16px',
  paddingLeft: '16px',
  marginLeft: 'auto',
  marginRight: 'auto',

  '@tabletPortraitUp': {
    maxWidth: '720px',
  },

  '@tabletLandscapeUp': {
    maxWidth: '960px',
  },

  '@desktopUp': {
    maxWidth: '1140px',
  },

  '@bigDesktopUp': {
    maxWidth: '1280px',
  },
})
