import styled from "styled-components";
import imgUrl from '../../public/leandro.jpg'

export const HomeContainer = styled.div`
`

export const Content = styled.main`
  padding: 1rem;
  margin-bottom: 2rem;
  
  @media(min-width: 768px) {
    padding: 1rem 2rem;
    margin-bottom: 5rem;
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
  background-image: url(${imgUrl});
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(17, 10, 23, 1)), url(${imgUrl});

  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 40% 43%;
  min-height: 375px;
  padding: 1rem;  

  @media(min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    min-height: 512px;
    padding: 1rem 3rem;
  }

  @media(min-width: 1280px) {
    padding: 1rem 5rem;
  }

  @media(min-width: 1440px) {
    padding: 1rem 10rem;
  }
`

export const FriendsAction = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2.625rem;
  }

  span {
    font-size: 1.5rem;
  }

  img {
    width: 48px;
  }

  @media(min-width: 768px) {
    h2 {
      font-size: 4.375rem;
    }

    span {
      font-size: 2.375rem;
    }

    img {
      width: 90px;
    }
  }
`

export const PartyRaffle = styled.div`
  font-weight: bold;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 4.5rem;
    line-height: 0.9;
    text-transform: uppercase;
  }

  @media(min-width: 768px) {
    width: 38%;
    h1 {
      font-size: 9rem;
    }
  }  
`

export const Raffle = styled.span`
  font-size: 1.5rem;
  align-self: flex-start;
  line-height: 0.8;

  @media(min-width: 768px) {
    font-size: 3rem;
  }
`

export const Guest = styled.span`
  font-size: 1rem;
  text-transform: uppercase;
  align-self: flex-end; // opa

  @media(min-width: 768px) {
    font-size: 1.75rem;
  }
`

export const Section = styled.div``

export const TitleWrapper = styled.div`
  max-width: 34rem;
  margin: auto;
  text-align: center;
  margin-bottom: 32px;

  h1 {
    font-size: 1.55rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  @media(min-width: 768px) {
    h1 {
      font-size: 2.625rem;
    }
  }  
`

export const CardWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;

  @media(min-width: 768px) {
    width: 58rem;
    flex-direction: row;
    justify-content: center;
  }
`

export const Ticket = styled.div`
  margin: auto;
  background: linear-gradient(240deg, #1f0c2f, #30123e );
  box-shadow: 2px 2px 10px 8px rgba(0,0,0,0.2);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: space-between;

  padding: 2rem;
  margin-bottom: 1rem;

  @media(min-width: 768px) {
    flex-direction: row;
    width: 58rem;
  }
`

export const Price = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    font-size: 70px;
    font-weight: bold;
  }

  span:nth-child(2) {
    font-size: 20px;
    text-align: center;
  }
`

export const Warning = styled.p`
  text-align: center;
  font-size: 0.875rem;
  margin-bottom: 8px;

  @media(min-width: 768px) {
    font-size: 1rem;
  }
`

export const Participate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
`

export const ParticipateText = styled.span`
font-size: 1.5rem;

  @media(min-width: 768px) {
    font-size: 2rem;

  }
`

export const ParticipatePhone = styled.div`
  

  a {
    background-color: #54b267;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    text-decoration: none;
    cursor: pointer;
  }

  span {
    font-size: 1.625rem;
  }

  svg {
    font-size: 2rem;
  }

  @media(min-width: 768px) {
    span {
      font-size: 2.5rem;
    }

    svg {
      font-size: 3rem;
    }
  }
`