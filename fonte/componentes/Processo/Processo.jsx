import { configuracaoDoSite } from '../../conteudo/configuracaoDoSite'
import { IconeAvaliacao, IconeConversa, IconeCuidado } from '../Icones/Icones'
import './Processo.css'

const icones = { conversa: IconeConversa, avaliacao: IconeAvaliacao, cuidado: IconeCuidado }

export function Processo() {
  const { processo } = configuracaoDoSite

  return (
    <section className="secao processo" id="como-funciona">
      <div className="container processo-grade">
        <div className="processo-introducao">
          <p className="etiqueta">{processo.etiqueta}</p>
          <h2 className="titulo-secao">{processo.titulo}</h2>
          <p>Um caminho simples, com informação clara desde o primeiro contato.</p>
        </div>

        <div className="processo-etapas">
          {processo.itens.map((item) => {
            const Icone = icones[item.icone]
            return (
              <article className="etapa" key={item.titulo}>
                <span><Icone /></span>
                <div><h3>{item.titulo}</h3><p>{item.texto}</p></div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
