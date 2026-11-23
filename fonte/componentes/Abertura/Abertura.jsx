import { configuracaoDoSite, criarLinkWhatsapp } from '../../conteudo/configuracaoDoSite'
import { IconeWhatsapp } from '../Icones/Icones'
import './Abertura.css'

export function Abertura() {
  const { abertura } = configuracaoDoSite

  return (
    <section className="abertura" id="inicio">
      <div className="abertura-simbolo" aria-hidden="true">
        <span />
        <span />
        <span />
        <i />
      </div>

      <div className="container abertura-conteudo">
        <p className="abertura-selo"><span />{abertura.selo}<span /></p>
        <h1>
          <span>{abertura.titulo}</span>
          <strong>{abertura.destaque}</strong>
        </h1>
        <p className="abertura-descricao">{abertura.descricao}</p>

        <div className="abertura-acoes">
          <a className="botao botao-primario" href={criarLinkWhatsapp()} target="_blank" rel="noreferrer">
            <IconeWhatsapp /> {abertura.botaoPrincipal}
          </a>
          <a className="abertura-link" href="#servicos">{abertura.botaoSecundario}</a>
        </div>

        <div className="abertura-especialidades" aria-label="Especialidades">
          {configuracaoDoSite.servicos.itens.map((servico) => (
            <span key={servico.titulo}>{servico.titulo}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
