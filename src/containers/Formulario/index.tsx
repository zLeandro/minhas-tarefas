import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes } from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const [titulo, setTitulo] = useState('')
  const [descricao, seDescricao] = useState('')

  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <Form>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo as="textarea" placeholder="Descrição da tarefa" />
        <Opcoes>
          <p>Prioridade</p>
          <input name="prioridade" type="radio" id="urgente" />{' '}
          <label htmlFor="urgente">Urgente</label>
          <input name="prioridade" type="radio" id="importante" />{' '}
          <label htmlFor="importante">Importante</label>
          <input name="prioridade" type="radio" id="normal" />{' '}
          <label htmlFor="normal">Normal</label>
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
