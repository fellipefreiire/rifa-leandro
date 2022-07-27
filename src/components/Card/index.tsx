import * as S from './styles'

interface Props {
  data: {
    title: string
    texts: string[]
    imgUrl: string
  }
}

export const Card = ({ data }: Props) => {
  return (
    <S.Container>
      <S.ImgContainer>
        <img src={data.imgUrl} alt="" />
      </S.ImgContainer>
      <S.Content>
        <h1>{data.title}</h1>
        {data.texts.map(text => (
          <p key={text}>{text}</p>
        ))}
      </S.Content>
    </S.Container>
  )
}