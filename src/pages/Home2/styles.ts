import { styled } from '../../styles/theme/default'

export const HomeContainer = styled('div', {
  backgroundColor: '$yellow900',
  margin: '60px 0'
})

export const ContentWrapper = styled('div', {
  '@desktopUp': {
    display: 'flex',
    gap: 32,
    maxWidth: '100%',
  }
})

export const ImageWrapper = styled('div', {
  width: 288,
  height: 288,
  borderRadius: '50%',
  overflow: 'hidden',
  margin: 'auto',
  marginBottom: 32,

  '& img': {
    width: '100%'
  }
})

export const InitialTitle = styled('h1', {
  fontWeight: '700',
  color: '$blue900',
  textAlign: 'center',
  fontSize: '3rem',
  textTransform: 'uppercase',
  marginBottom: 16
})

export const InitialMessage = styled('p', {
  fontWeight: '700',
  color: '$blue900',
  textAlign: 'center',
  marginBottom: 16,
  fontSize: '1.25rem'
})

export const Container = styled('div', {
  backgroundColor: '$blue900',
  padding: 16,
  borderRadius: 6,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  marginBottom: 16,
  boxShadow: '2px 2px 8px 4px rgba(0,0,0,0.2)',

  '& h2': {
    fontSize: '2rem',
    textTransform: 'uppercase',
    color: '$text',

  },

  '& p': {
    fontSize: '1.5rem',
    color: '$text',

  },

  variants: {
    variant: {
      white: {
        background: 'white',
        '& h2': {
          color: '$blue900'
        },
        '& p': {
          color: '$blue900'
        },

        '@desktopUp': {
          // maxWidth: '50%'
        }
      }
    }
  }
})

export const SocialLinks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,

  '& a': {
    textDecoration: 'none',
    color: '$blue900',
    fontWeight: '700'
  }
})




export const WarningWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  textAlign: 'center',
  marginTop: 32,

  '& p': {
    color: '$blue900',
    fontSize: '1.25rem'
  }
})


export const CardWrapper = styled('div', {
  '@desktopUp': {
    // maxWidth: '50%'
  }
})

export const WhiteCardWrapper = styled('div', {
  '@desktopUp': {
    // display: 'flex',
    gap: 32
  }
})