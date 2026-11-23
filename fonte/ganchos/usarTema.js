import { useEffect, useState } from 'react'

function temaInicial() {
  const salvo = localStorage.getItem('fachada-tech-tema-v2')
  if (salvo) return salvo
  return 'claro'
}

export function usarTema() {
  const [tema, definirTema] = useState(temaInicial)

  useEffect(() => {
    document.documentElement.dataset.tema = tema
    localStorage.setItem('fachada-tech-tema-v2', tema)
  }, [tema])

  return {
    tema,
    alternarTema: () => definirTema((atual) => (atual === 'claro' ? 'escuro' : 'claro')),
  }
}
