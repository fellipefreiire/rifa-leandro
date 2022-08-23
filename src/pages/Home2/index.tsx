import { Container } from '../../components/Container'
import { Ticket } from '../../components/Ticket'
import leandro from '../../public/leandro2.jpg'
import * as S from './styles'

export const Home2 = () => {
  return (
    <S.HomeContainer>
      <Container>
        <S.ImageWrapper>
          <img src={leandro} alt="" />
        </S.ImageWrapper>
        <S.InitialTitle>
          Ação entre amigos
        </S.InitialTitle>
        <S.InitialMessage>
          Rifa em prol da compra de uma geladeira
          para nosso amigo e DJ Leandro Lucas que está num
          momento de grande dificuldade financeira.
        </S.InitialMessage>
        <S.ContentWrapper>
          <S.CardWrapper>
            <S.Container>
              <h2>Prêmio da rifa:</h2>
              <p>Festa para 50 convidados</p>
              <p>Boate com dj completa</p>
              <p>Bar Completo</p>
              <p>R$ 100,00 convertidos em aplicativo de viagem</p>
            </S.Container>
            <S.WhiteCardWrapper>
              <S.Container variant='white'>
                <h2>Dj completo</h2>
                <p>Boate completa + Som</p>
                <p>Iluminação de balada</p>
                <p>Estrutura de trave 2,5x3m</p>
                <p>Microfone sem fio</p>
                <p>Máquina de fumaça</p>
                <S.SocialLinks>
                  <a href='https://www.instagram.com/echoes.insight_music'>@echoes.insight_music</a>
                  <a href='https://www.instagram.com/dekodjjj/'>@dekodjjj</a>
                  <a href='https://www.instagram.com/leandrolucasdj/'>@leandrolucasdj</a>
                </S.SocialLinks>
              </S.Container>
              <S.Container variant='white'>
                <h2>Bar completo</h2>
                <p>Serviço de bartender (6 horas)</p>
                <p>Estrutura + Balcão 360°</p>
                <p>Vidraria</p>
                <p>Taças e Copos</p>
                <p>Produção do Cocktail Menu</p>
                <S.SocialLinks>
                  <a href='https://www.instagram.com/brazbarclub/'>@brazbarclub</a>
                </S.SocialLinks>
              </S.Container>
            </S.WhiteCardWrapper>
          </S.CardWrapper>

          <Ticket />
        </S.ContentWrapper>

        <S.WarningWrapper>
          <p>O ganhador deverá escolher uma data em que os fornecedores estejam disponíveis.</p>

          <p>Os outros serviços para fazer o evento ficam por conta do ganhador (Espaço do evento, bebidas, comidas, etc...)</p>
        </S.WarningWrapper>
      </Container>
    </S.HomeContainer>
  )
}