import * as S from './styles'
import leandro from '../../public/leandro2.jpg'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { toPng } from 'html-to-image'
import { useCallback, useRef } from 'react'

const formValidationSchema = zod.object({
  nome: zod.string(),
  telefone: zod.string(),
  rua: zod.string(),
  numero: zod.string(),
  bairro: zod.string(),
  cidade: zod.string(),
  estado: zod.string().max(2),
})

type FormData = zod.infer<typeof formValidationSchema>

export const Ticket = () => {
  const ref = useRef<HTMLDivElement>(null)

  const form = useForm<FormData>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      nome: '',
      telefone: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
    },
  })

  const { handleSubmit, register, watch } = form

  const nome = watch('nome')
  const telefone = watch('telefone')
  const rua = watch('rua')
  const numero = watch('numero')
  const bairro = watch('bairro')
  const cidade = watch('cidade')
  const estado = watch('estado')

  const getFileName = (fileType: string) => `ticket.${fileType}`

  const downloadPng = useCallback(() => {
    if (ref.current === null) return

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = `${getFileName('png')}`
        link.href = dataUrl
        link.click()
      }).catch((err) => {
        console.log(err)
      })
  }, [ref])

  function handleSubmitForm(data: FormData) {
    console.log(data)
  }

  const formattedAddress = `${rua}, ${numero}, ${bairro}, ${cidade}-${estado}`
  const formattedPhone = `${telefone}`

  const formatAddress = () => {
    if ((rua && numero && bairro && cidade && estado) === '') return ''

    return formattedAddress
  }

  const isDownloadDisabled = !nome || !telefone || !rua || !numero || !bairro || !cidade || !estado

  return (
    <S.Form onSubmit={handleSubmit(handleSubmitForm)}>
      <S.Participate>
        <h2>Para participar:</h2>
        <p>Preencha o formulário</p>
        <p>Faça o download do seu ticket e entre em contato</p>
        <p>Escolha um número de 1 a 300 (R$20,00 por número)</p>
      </S.Participate>
      <S.ContentWrapper>
        <S.FormContainer variant='form'>
          <S.Input type="text" placeholder='Nome' {...register('nome')} />
          <S.Input type="tel" placeholder='Telefone' {...register('telefone')} />
          <S.Input type="tel" placeholder='Rua' {...register('rua')} />
          <S.Input type="tel" placeholder='Número' {...register('numero')} />
          <S.Input type="tel" placeholder='Bairro' {...register('bairro')} />
          <S.Input type="tel" placeholder='Cidade' {...register('cidade')} />
          <S.Input type="tel" placeholder='Estado' {...register('estado')} />
        </S.FormContainer>

        <S.TicketContainer ref={ref}>
          <S.Header>
            <S.ImageWrapper>
              <img src={leandro} alt='' />
            </S.ImageWrapper>
          </S.Header>
          <S.FormContainer variant='ticket'>
            <S.Value>{nome}</S.Value>
            <S.Value>{formattedPhone}</S.Value>
            <S.Value>{formatAddress()}</S.Value>
          </S.FormContainer>
        </S.TicketContainer>

      </S.ContentWrapper>
      <S.ButtonWrapper>
        <S.Button type='button' variant='blue' onClick={downloadPng} disabled={isDownloadDisabled}>Download do Ticket</S.Button>
        <S.Button type='button' variant='white'>
          <a href="https://api.whatsapp.com/send?phone=5574988563472">
            Entrar em contato
          </a>
        </S.Button>
      </S.ButtonWrapper>
    </S.Form>
  )
}