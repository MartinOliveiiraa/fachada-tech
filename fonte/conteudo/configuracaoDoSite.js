// EDITE ESTE ARQUIVO para trocar textos, links, telefone e informações do site.

export const configuracaoDoSite = {
  empresa: {
    nome: 'Fachada Tech',
    assinatura: 'Soluções em Fachadas',
    instagram: '@fachadatech',
    linkInstagram: 'https://www.instagram.com/fachadatech/',
    telefoneWhatsapp: '5548998662635',
    mensagemWhatsapp: 'Olá! Gostaria de solicitar uma avaliação para minha fachada.',
  },

  navegacao: [
    { rotulo: 'Início', destino: '#inicio' },
    { rotulo: 'Por que cuidar', destino: '#por-que-cuidar' },
    { rotulo: 'Serviços', destino: '#servicos' },
    { rotulo: 'Contato', destino: '#contato' },
  ],

  abertura: {
    selo: 'Conservação de fachadas · ACM + LED',
    titulo: 'Precisão na limpeza.',
    destaque: 'Presença na fachada.',
    descricao:
      'Cuidado técnico para remover marcas, preservar materiais e devolver à fachada a presença que ela merece.',
    botaoPrincipal: 'Solicitar avaliação',
    botaoSecundario: 'Conhecer serviços',
  },

  introducao: {
    etiqueta: 'A primeira leitura',
    titulo: 'Antes de entrar, seu cliente já leu a fachada.',
    descricao:
      'Chuva, poeira e poluição se acumulam aos poucos. O resultado aparece na imagem do negócio antes mesmo do primeiro atendimento.',
    itens: [
      {
        titulo: 'Marcas visíveis',
        texto: 'O clima e a poluição deixam sinais que tiram a uniformidade da superfície.',
      },
      {
        titulo: 'Presença enfraquecida',
        texto: 'Uma fachada sem manutenção deixa de acompanhar o cuidado entregue lá dentro.',
      },
      {
        titulo: 'Materiais específicos',
        texto: 'ACM e painéis de LED pedem procedimentos próprios, sem improviso.',
      },
    ],
    conclusao: 'Cuidar da fachada é cuidar da presença do negócio.',
  },

  servicos: {
    etiqueta: 'O que cuidamos',
    titulo: 'Soluções diretas para a sua fachada.',
    descricao:
      'Cada superfície pede um procedimento próprio. Avaliamos o material antes de definir o cuidado adequado.',
    itens: [
      {
        titulo: 'Revestimento em ACM',
        texto: 'Limpeza, conservação e revitalização para remover marcas e recuperar a apresentação da fachada.',
        imagem: '/imagens/fachada-chuva.jpeg',
        posicao: '86% 9%',
        ampliacao: 2.15,
        origem: '86% 9%',
        icone: 'fachada',
      },
      {
        titulo: 'Painéis de LED',
        texto: 'Lavagem especializada com procedimentos adequados à superfície e aos componentes do painel.',
        imagem: '/imagens/painel-led.jpeg',
        posicao: '62% 18%',
        ampliacao: 1.65,
        origem: '62% 18%',
        icone: 'painel',
      },
      {
        titulo: 'Avaliação preventiva',
        texto: 'Leitura do estado da superfície para planejar a manutenção antes que o desgaste avance.',
        imagem: '/imagens/fachada-chuva.jpeg',
        posicao: '82% 12%',
        ampliacao: 1.9,
        origem: '82% 12%',
        icone: 'avaliacao',
      },
    ],
  },

  processo: {
    etiqueta: 'Como funciona',
    titulo: 'Do primeiro contato ao cuidado final.',
    itens: [
      {
        icone: 'conversa',
        titulo: 'Você mostra a necessidade',
        texto: 'Envie uma mensagem e conte o que está acontecendo com a fachada.',
      },
      {
        icone: 'avaliacao',
        titulo: 'A superfície é avaliada',
        texto: 'O material e o nível de cuidado são analisados antes do serviço.',
      },
      {
        icone: 'cuidado',
        titulo: 'O atendimento é planejado',
        texto: 'Você recebe a orientação adequada para o seu tipo de fachada.',
      },
    ],
  },

  contato: {
    etiqueta: 'Vamos conversar',
    titulo: 'Sua fachada pode voltar a transmitir cuidado.',
    descricao: 'Fale com a Fachada Tech e solicite uma avaliação pelo WhatsApp.',
    botao: 'Chamar no WhatsApp',
  },
}

export function criarLinkWhatsapp() {
  const { telefoneWhatsapp, mensagemWhatsapp } = configuracaoDoSite.empresa
  return `https://wa.me/${telefoneWhatsapp}?text=${encodeURIComponent(mensagemWhatsapp)}`
}
