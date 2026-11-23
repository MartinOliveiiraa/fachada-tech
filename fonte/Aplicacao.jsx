import { Cabecalho } from './componentes/Cabecalho/Cabecalho'
import { Abertura } from './componentes/Abertura/Abertura'
import { Introducao } from './componentes/Introducao/Introducao'
import { Servicos } from './componentes/Servicos/Servicos'
import { Processo } from './componentes/Processo/Processo'
import { Contato } from './componentes/Contato/Contato'
import { Rodape } from './componentes/Rodape/Rodape'
import { AvisoCookies } from './componentes/AvisoCookies/AvisoCookies'
import { WhatsAppFlutuante } from './componentes/WhatsAppFlutuante/WhatsAppFlutuante'

export function Aplicacao() {
  return (
    <>
      <a className="pular-conteudo" href="#conteudo">Pular para o conteúdo</a>
      <Cabecalho />
      <main id="conteudo">
        <Abertura />
        <Introducao />
        <Servicos />
        <Processo />
        <Contato />
      </main>
      <Rodape />
      <WhatsAppFlutuante />
      <AvisoCookies />
    </>
  )
}
