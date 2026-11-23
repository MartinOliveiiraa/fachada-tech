import { useState } from 'react'
import './AvisoCookies.css'

const chave = 'fachada-tech-cookies'

export function AvisoCookies() {
  const [visivel, definirVisivel] = useState(() => !localStorage.getItem(chave))

  function registrar(escolha) {
    localStorage.setItem(chave, escolha)
    definirVisivel(false)
  }

  if (!visivel) return null

  return (
    <aside className="aviso-cookies" aria-label="Preferências de cookies">
      <div className="cookies-texto">
        <strong>Seu controle, sempre.</strong>
        <p>Usamos apenas armazenamento local para lembrar o tema e sua escolha de cookies. Nenhum rastreador está ativo.</p>
      </div>
      <div className="cookies-acoes">
        <button type="button" onClick={() => registrar('recusados')}>Recusar opcionais</button>
        <button className="aceitar-cookies" type="button" onClick={() => registrar('aceitos')}>Entendi</button>
      </div>
    </aside>
  )
}
