import { configuracaoDoSite } from '../../conteudo/configuracaoDoSite'
import './Rodape.css'

export function Rodape() {
  return (
    <footer className="rodape">
      <div className="container rodape-conteudo">
        <p><strong>{configuracaoDoSite.empresa.nome}</strong> · {configuracaoDoSite.empresa.assinatura}</p>
        <p>© {new Date().getFullYear()} Fachada Tech. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
