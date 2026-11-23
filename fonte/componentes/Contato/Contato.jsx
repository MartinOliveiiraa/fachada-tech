import { configuracaoDoSite, criarLinkWhatsapp } from '../../conteudo/configuracaoDoSite'
import { IconeInstagram, IconeWhatsapp } from '../Icones/Icones'
import './Contato.css'

export function Contato() {
  const { contato, empresa } = configuracaoDoSite

  return (
    <section className="contato" id="contato">
      <div className="container contato-caixa">
        <div className="contato-texto">
          <p className="etiqueta">{contato.etiqueta}</p>
          <h2>{contato.titulo}</h2>
          <p>{contato.descricao}</p>
        </div>
        <div className="contato-acoes">
          <a className="botao contato-whatsapp" href={criarLinkWhatsapp()} target="_blank" rel="noreferrer"><IconeWhatsapp />{contato.botao}</a>
          <a className="contato-instagram" href={empresa.linkInstagram} target="_blank" rel="noreferrer"><IconeInstagram />{empresa.instagram}</a>
        </div>
      </div>
    </section>
  )
}
