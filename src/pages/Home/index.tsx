import { WhatsappLogo } from "phosphor-react"
import { Card } from "../../components/Card"
import barImgUrl from '../../public/bar.png'
import djImgUrl from '../../public/dj.jpg'
import diskoImgUrl from '../../public/disko.png'

import * as S from './styles'

export const Home = () => {
  const card1Data = {
    title: 'dj completo',
    texts: [
      'Boate completa + Som',
      'Iluminação de balada',
      'Estrutura de trave 2,5x3m',
      'Microfone sem fio',
      'Máquina de fumaça',
      'DJ DEKO',
      'DJ LEANDRO LUCAS',
      'DJ ECHOES INSIGHT',
    ],
    imgUrl: djImgUrl
  }

  const card2Data = {
    title: 'bar completo',
    texts: [
      'Serviço de bartender (6 horas)',
      'Estrutura + Balcão 360°',
      'Vidraria',
      'Taças e Copos',
      'Produção do Cocktail Menu'
    ],
    imgUrl: barImgUrl
  }

  return (
    <S.HomeContainer>
      <S.Header>
        <S.FriendsAction>
          <img src={diskoImgUrl} alt="" />
          <h2>ação</h2>
          <span>entre</span>
          <span>amigos</span>
        </S.FriendsAction>

        <S.PartyRaffle>
          <S.Raffle>Rifa de uma</S.Raffle>
          <h1>festa</h1>
          <S.Guest>para até 50 convidados</S.Guest>
        </S.PartyRaffle>
      </S.Header>

      <S.Content>
        <S.Section>
          <S.TitleWrapper>
            <h1>boate com dj completa + bar completo</h1>
          </S.TitleWrapper>
          <S.CardWrapper>
            <Card data={card1Data} />
            <Card data={card2Data} />
          </S.CardWrapper>
          <S.TitleWrapper>
            <h1>Sorteio: 31/08/2022</h1>
          </S.TitleWrapper>
          <S.Ticket>
            <S.Price>
              <span>R$20,00</span>
              <span>por número</span>
            </S.Price>
            <S.Participate>
              <S.ParticipateText>participe pelo:</S.ParticipateText>
              <S.ParticipatePhone>
                <a href="https://api.whatsapp.com/send?phone=5574988563472">
                  <WhatsappLogo />
                  <span>(74)9.8856-3472</span>
                </a>
              </S.ParticipatePhone>
            </S.Participate>
          </S.Ticket>
          <S.Warning>
            O ganhador deverá escolher uma data em que os fornecedores estejam disponíveis.
          </S.Warning>
          <S.Warning>
            Os outros serviços para fazer o evento ficam por conta do ganhador (Espaço do evento, bebidas, comidas, etc...)
          </S.Warning>
        </S.Section>
      </S.Content>
    </S.HomeContainer>
  )
}