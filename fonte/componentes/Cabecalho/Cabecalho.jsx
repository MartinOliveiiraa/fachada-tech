import { useEffect, useState } from 'react'
import { configuracaoDoSite } from '../../conteudo/configuracaoDoSite'
import { AlternadorTema } from '../AlternadorTema/AlternadorTema'
import { IconeFechar, IconeMenu } from '../Icones/Icones'
import './Cabecalho.css'

function Marca() {
  return (
    <a className="marca" href="#inicio" aria-label="Fachada Tech - início">
      <span className="marca-icone" aria-hidden="true">
        <img className="marca-clara" src="/imagens/gota-preta.png" alt="" />
        <img className="marca-escura" src="/imagens/gota-branca.png" alt="" />
      </span>
      <span className="marca-texto">
        <strong>{configuracaoDoSite.empresa.nome}</strong>
        <small>{configuracaoDoSite.empresa.assinatura}</small>
      </span>
    </a>
  )
}

export function Cabecalho() {
  const [menuAberto, definirMenuAberto] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-aberto', menuAberto)
    return () => document.body.classList.remove('menu-aberto')
  }, [menuAberto])

  function fecharMenu() {
    definirMenuAberto(false)
  }

  return (
    <header className="cabecalho">
      <div className="container cabecalho-conteudo">
        <Marca />

        <nav className={`navegacao ${menuAberto ? 'navegacao-aberta' : ''}`} aria-label="Navegação principal">
          {configuracaoDoSite.navegacao.map((item) => (
            <a key={item.destino} href={item.destino} onClick={fecharMenu}>{item.rotulo}</a>
          ))}
        </nav>

        <div className="acoes-cabecalho">
          <AlternadorTema />
          <button className="botao-menu" type="button" onClick={() => definirMenuAberto((aberto) => !aberto)} aria-expanded={menuAberto} aria-controls="menu-principal" aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}>
            {menuAberto ? <IconeFechar /> : <IconeMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}
