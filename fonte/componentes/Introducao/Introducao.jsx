import { configuracaoDoSite } from '../../conteudo/configuracaoDoSite'
import './Introducao.css'

export function Introducao() {
  const { introducao } = configuracaoDoSite

  return (
    <section className="introducao secao" id="por-que-cuidar">
      <div className="container">
        <div className="introducao-topo">
          <p className="etiqueta">{introducao.etiqueta}</p>
          <h2>{introducao.titulo}</h2>
          <p>{introducao.descricao}</p>
        </div>

        <div className="introducao-pontos">
          {introducao.itens.map((item) => (
            <article key={item.titulo}>
              <span />
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </article>
          ))}
        </div>

        <p className="introducao-conclusao">{introducao.conclusao}</p>
      </div>
    </section>
  )
}
