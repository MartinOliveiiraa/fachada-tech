import { useState } from 'react'
import { configuracaoDoSite, criarLinkWhatsapp } from '../../conteudo/configuracaoDoSite'
import { IconeAvaliacao, IconeFachada, IconePainel, IconeWhatsapp } from '../Icones/Icones'
import './Servicos.css'

const icones = {
  fachada: IconeFachada,
  painel: IconePainel,
  avaliacao: IconeAvaliacao,
}

export function Servicos() {
  const { servicos } = configuracaoDoSite
  const [ativo, definirAtivo] = useState(0)
  const servicoAtivo = servicos.itens[ativo]
  const IconeAtivo = icones[servicoAtivo.icone]

  return (
    <section className="secao servicos" id="servicos">
      <div className="container">
        <div className="servicos-cabecalho">
          <p className="etiqueta">{servicos.etiqueta}</p>
          <h2 className="titulo-secao">{servicos.titulo}</h2>
          <p className="descricao-secao">{servicos.descricao}</p>
        </div>

        <div className="servicos-painel">
          <div className="servico-palco">
            <img key={servicoAtivo.imagem} src={servicoAtivo.imagem} alt="" style={{ objectPosition: servicoAtivo.posicao, '--ampliacao': servicoAtivo.ampliacao, '--origem': servicoAtivo.origem }} />
            <div className="servico-palco-filtro" />
            <div className="servico-palco-legenda"><IconeAtivo /><span>Procedimento orientado pela superfície</span></div>
          </div>

          <div className="lista-servicos" role="tablist" aria-label="Serviços da Fachada Tech">
            {servicos.itens.map((servico, indice) => {
              const Icone = icones[servico.icone]
              const selecionado = ativo === indice
              return (
                <button key={servico.titulo} type="button" className={`linha-servico ${selecionado ? 'linha-servico-ativa' : ''}`} onClick={() => definirAtivo(indice)} onMouseEnter={() => definirAtivo(indice)} role="tab" aria-selected={selecionado}>
                  <Icone />
                  <span><strong>{servico.titulo}</strong><small>{servico.texto}</small></span>
                  <i>{selecionado ? '−' : '+'}</i>
                </button>
              )
            })}
            <a className="servicos-contato" href={criarLinkWhatsapp()} target="_blank" rel="noreferrer"><IconeWhatsapp /> Solicitar uma avaliação</a>
          </div>
        </div>
      </div>
    </section>
  )
}
