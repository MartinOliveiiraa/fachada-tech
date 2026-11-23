import { criarLinkWhatsapp } from '../../conteudo/configuracaoDoSite'
import { IconeWhatsapp } from '../Icones/Icones'
import './WhatsAppFlutuante.css'

export function WhatsAppFlutuante() {
  return (
    <a className="whatsapp-flutuante" href={criarLinkWhatsapp()} target="_blank" rel="noreferrer" aria-label="Falar com a Fachada Tech pelo WhatsApp" title="Falar pelo WhatsApp">
      <IconeWhatsapp tamanho={28} />
    </a>
  )
}
