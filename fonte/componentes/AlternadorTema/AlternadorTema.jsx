import { usarTema } from '../../ganchos/usarTema'
import { IconeLua, IconeSol } from '../Icones/Icones'
import './AlternadorTema.css'

export function AlternadorTema() {
  const { tema, alternarTema } = usarTema()
  const proximo = tema === 'claro' ? 'escuro' : 'claro'

  return (
    <button className="alternador-tema" type="button" onClick={alternarTema} aria-label={`Ativar modo ${proximo}`} title={`Ativar modo ${proximo}`}>
      {tema === 'claro' ? <IconeLua /> : <IconeSol />}
    </button>
  )
}
