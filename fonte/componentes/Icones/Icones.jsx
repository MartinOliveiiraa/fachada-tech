function Svg({ children, tamanho = 22, ...props }) {
  return (
    <svg width={tamanho} height={tamanho} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {children}
    </svg>
  )
}

export const IconeMenu = (props) => <Svg {...props}><path d="M4 7h16M4 12h16M4 17h16" /></Svg>
export const IconeFechar = (props) => <Svg {...props}><path d="m6 6 12 12M18 6 6 18" /></Svg>
export const IconeSol = (props) => <Svg {...props}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" /></Svg>
export const IconeLua = (props) => <Svg {...props}><path d="M20.5 14.4A8.5 8.5 0 0 1 9.6 3.5 8.5 8.5 0 1 0 20.5 14.4Z" /></Svg>
export const IconeWhatsapp = ({ tamanho = 22, ...props }) => (
  <svg width={tamanho} height={tamanho} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.647-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.825 9.825 0 0 1 2.894 6.99c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0 0 12.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654A11.88 11.88 0 0 0 12.05 23.8h.005c6.558 0 11.892-5.335 11.895-11.893a11.82 11.82 0 0 0-3.488-8.413Z" />
  </svg>
)
export const IconeInstagram = (props) => <Svg {...props}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></Svg>
export const IconeFachada = (props) => <Svg {...props}><path d="M4 20V9l5-3v14M9 20V5l5-3v18M14 20V8l6-3v15M2 20h20" /></Svg>
export const IconePainel = (props) => <Svg {...props}><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M7 8h.01M11 8h.01M15 8h.01M7 12h.01M11 12h.01M15 12h.01M9 22h6M12 18v4" /></Svg>
export const IconeAvaliacao = (props) => <Svg {...props}><circle cx="11" cy="11" r="7" /><path d="m16 16 5 5M8.5 11l1.6 1.6 3.4-3.5" /></Svg>
export const IconeConversa = (props) => <Svg {...props}><path d="M21 12a8 8 0 0 1-8 8H6l-4 2 1.5-4A9 9 0 1 1 21 12Z" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></Svg>
export const IconeCuidado = (props) => <Svg {...props}><path d="M12 21s8-4.5 8-11V5l-8-3-8 3v5c0 6.5 8 11 8 11Z" /><path d="m9 11 2 2 4-4" /></Svg>
