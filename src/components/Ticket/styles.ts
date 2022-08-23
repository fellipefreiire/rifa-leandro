import { styled } from '../../styles/theme/default'

export const TicketContainer = styled('div', {
  background: '$blue900',
  borderRadius: 6,
  position: 'relative',
  overflow: 'hidden',
  backgroundClip: 'content-box',

  '&:before': {
    content: '',
    position: 'absolute',
    width: 60,
    height: 60,
    background: '$yellow900',
    left: 0,
    top: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
  },

  '&:after': {
    content: '',
    position: 'absolute',
    width: 60,
    height: 60,
    background: '$yellow900',
    right: 0,
    top: '50%',
    transform: 'translate(50%, -50%)',
    borderRadius: '50%',
  },

  '@desktopUp': {
  }
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'center',
  borderBottom: '1px dashed white',
  padding: 32,
})

export const ImageWrapper = styled('div', {
  width: 96,
  height: 96,
  borderRadius: '50%',
  overflow: 'hidden',

  '& img': {
    width: '100%'
  }
})

export const FormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: 24,

  variants: {
    variant: {
      form: {
        border: '1px solid $blue900',
        borderRadius: 6,
        marginBottom: 32,
      },
      ticket: {
        padding: '32px 64px'
      }
    }
  }
})

export const Input = styled('input', {
  background: 'transparent',
  border: 0,
  borderBottom: '1px solid #FFFFFF',
  padding: 8,
  color: 'white',

  '&::placeholder': {
    color: '#FFFFFF90'
  }
})

export const Value = styled('span', {
  display: 'inline-block',
  color: 'white',
  minHeight: 20,
  lineBreak: 'anywhere'
})

export const ButtonWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: 16,
  marginTop: 16,
})

export const Button = styled('button', {
  border: 0,
  padding: 16,
  fontWeight: 500,
  borderRadius: 6,
  cursor: 'pointer',

  '&:disabled': {
    opacity: 0.7,
    cursor: 'not-allowed'
  },

  '& a': {
    textDecoration: 'none',
    color: '$blue900',
  },

  variants: {
    variant: {
      blue: {
        background: '$blue900',
        color: '$text'
      },
      white: {
        background: 'white',
        color: '$blue900'
      }
    }
  }
})

export const Participate = styled('div', {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  marginBottom: 32,

  '& h2': {
    fontSize: '2rem',
    color: '$blue900',
  },

  '& p': {
    fontSize: '1.25rem',
    color: '$blue900',
  }
})

export const ContentWrapper = styled('div', {
  '@desktopUp': {
    // display: 'flex',
    gap: 16,
  }
})

export const Form = styled('form', {
  '@desktopUp': {
    maxWidth: '50%',
    minWidth: '50%'
  }
})