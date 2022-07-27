import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(120deg, #1f0c2f, #30123e );
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 8px rgba(0,0,0,0.2);

  img {
    width: 448px;
    /* height: 252px; */
  }
`

export const ImgContainer = styled.div`
  width: 100%;
  height: 252px;

  img {
    object-fit: cover;
    height: 100%;
  }
`

export const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.25rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.8;
    letter-spacing: 3px;
  }

  @media(min-width: 768px) {
    h1 {
      font-size: 1.75rem;
    }

    p {
      font-size: 1.125rem;
    }
  }
`