import { configuracaoDoSite, criarLinkWhatsapp } from '../../conteudo/configuracaoDoSite'
import { IconeWhatsapp } from '../Icones/Icones'
import './Abertura.css'

export function Abertura() {
  const { abertura } = configuracaoDoSite

  return (
    <section className="abertura" id="inicio">
      <div className="abertura-foto" aria-hidden="true">
        <img src="/imagens/fachada-acm.jpeg" alt="" />
        <div className="abertura-varredura">
          <img src="/imagens/gota-branca.png" alt="" />
          <span>limpeza técnica</span>
        </div>
      </div>
      <div className="abertura-mascara" />

      <div className="container abertura-conteudo">
        <div className="abertura-texto">
          <p className="abertura-selo"><span />{abertura.selo}</p>
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
        </div>

        <aside className="painel-diagnostico" aria-label="Diagnóstico da superfície">
          <div className="painel-topo"><span /> Leitura da superfície</div>
          <div className="painel-item"><small>Material</small><strong>ACM / LED</strong></div>
          <div className="painel-item"><small>Ação</small><strong>Cuidado específico</strong></div>
          <div className="painel-status"><i /> Avaliação antes da execução</div>
        </aside>
      </div>

      <div className="abertura-servicos">
        <div className="container abertura-servicos-grade">
          {configuracaoDoSite.servicos.itens.map((servico) => (
            <a key={servico.titulo} href="#servicos">
              <span>{servico.icone === 'fachada' ? 'ACM' : servico.icone === 'painel' ? 'LED' : 'PREV'}</span>
              <div><strong>{servico.titulo}</strong><small>{servico.texto.split('.')[0]}.</small></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
