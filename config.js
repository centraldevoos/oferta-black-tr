// Configuração da página que revela a oferta da Super Black Friday. É o arquivo que se edita à mão antes de publicar.
window.CONFIG = {
  // Preço da Super Black Friday.
  PRECO: 297,
  // Esta versão (oferta-black-tr): 2 anos, sem acesso extra (Pedro, 1/11/2026). A âncora é a soma dos valores × ANOS × ACESSOS.
  ANOS: 2,
  ACESSOS: 1,
  // Parcela no cartão: a mesma do VIP anual de R$ 297 no Hub.la.
  PARCELA: "12x de R$ 30,52",
  // Valor de 1 ano de Comunidade VIP nesta versão (âncora de R$ 797, como na base).
  PRECO_VIP_ANO: 797,

  // Horário das vagas, todo dia, no horário de Brasília.
  // Antes de ABRE: "as vagas ainda estão fechadas, abrem hoje às 19h" com a contagem. Entre ABRE e FECHA: "vagas abertas, fecham em".
  // Depois de FECHA, volta a contagem para as 19h, sempre como se fosse a primeira abertura (sem "encerradas" nem "nova abertura").
  VAGAS: { ABRE: "19:00", FECHA: "00:10" },
  TEXTOS: {
    antes: "O link pra garantir a sua vaga chega no seu grupo do WhatsApp às 19h.",
    aberto: "Garanta a sua pelo link que chegou no seu grupo do WhatsApp.",
  },
  // A página não tem botão (pedido do Pedro, 31/10/2026). Se um dia precisar, true + CHECKOUT mostra o botão só com as vagas abertas.
  MOSTRAR_BOTAO_NO_ABERTO: false,
  CHECKOUT: "",

  // Pilha de valor: "valor" é o preço de 1 ano de cada entrega, para UM acesso.
  // Âncora do dono (02/11/2026, à noite): só a Comunidade VIP muda (= o preço da página); o resto é fixo e soma 1.132 por ano. Âncora = (VIP + 1.132) x 2.
  // A âncora da página é a soma × 2 anos × 2 acessos (pedido do Pedro, 31/10/2026).
  // Valores passados pelo Pedro em 1/11/2026 para esta versão (soma R$ 2.779).
  PRINCIPAIS: [
    { nome: "Comunidade VIP no WhatsApp", desc: "Grupos separados por região, com mais de 1.000 promoções por semana e todas as datas disponíveis, saindo de todo o Brasil para o Brasil e o mundo.", valor: 297, oficial: true },
    { tag: "Novidade", nome: "Plataforma Central de Voos", desc: "Tudo da Central no seu celular: busca personalizada entre todas as promoções ativas e monitoramento das suas passagens com IA.", valor: 397, oficial: true },
    { tag: "Ao vivo", nome: "Workshop: O Segredo das Passagens Baratas", desc: "Um encontro ao vivo pra entender de vez como chegar nas passagens mais baratas que existem.", valor: 247, oficial: true },
  ],
  BONUS: [
    { nome: "Curso Completo de Milhas", desc: "Pra quem quiser aprender a viajar pagando só a taxa de embarque. Você não precisa saber nada disso pra aproveitar o VIP.", valor: 147, oficial: true },
    { nome: "Grupo de Estratégias", desc: "Transferências bonificadas, promoções de compra de milhas e as melhores oportunidades, em primeira mão.", valor: 97, oficial: true },
    { nome: "Suporte Jurídico Gratuito", desc: "Advogada especialista no direito do passageiro aéreo pra qualquer problema nas suas viagens.", valor: 147, oficial: true },
    { nome: "Guia dos Melhores Cartões de Crédito", desc: "Pra transformar cada gasto do seu dia a dia em viagens inesquecíveis.", valor: 97, oficial: true },
  ],

  // Depoimentos em vídeo do vturb, escolhidos entre os de depoimentos.centraldevoos.com. capa = arquivo em midia/depoimentos/.
  // proporcao = a do vídeo (o player ocupa esse espaço quando a pessoa toca).
  VTURB_CONTA: "00c8b9a1-000b-422f-abff-cb49b5ef54fa",
  VIDEOS: [
    { player: "6ae4e1b0d653f6988a0ff277", capa: "v1.jpg", proporcao: "9 / 16", marca: "Austrália", titulo: "Quatro passagens para um reencontro" },
    { player: "6ae4e1db183f0675fc8d469c", capa: "v2.jpg", proporcao: "3 / 4", marca: "Executiva", titulo: "Rio–Madri, sem conexão e de executiva" },
    { player: "6ae4e1b5217265d6b619517a", capa: "v3.jpg", proporcao: "3 / 4", marca: "Novos destinos", titulo: "De Cancún aos próximos destinos" },
    { player: "6a1f764a0b98d8bade87d2dc", capa: "v4.jpg", proporcao: "9 / 16", marca: "Roma", titulo: "Ida e volta de executiva para o casal" },
    { player: "6ae4e1c73ce680b34e9eec8e", capa: "v5.jpg", proporcao: "9 / 16", marca: "Noronha", titulo: "O sonho de Noronha virou passagem emitida" },
    { player: "6a1f7665c2771546fc15f770", capa: "v6.jpg", proporcao: "9 / 16", marca: "Fortaleza", titulo: "Ida e volta por R$ 440" },
    { player: "6ae4e1fb2c77645459956248", capa: "v7.jpg", proporcao: "9 / 16", marca: "Monitoramento", titulo: "Roma começou com um monitoramento" },
    { player: "6ae4e19a217265d6b619510f", capa: "v8.jpg", proporcao: "9 / 16", marca: "Milhas", titulo: "Pontos do cartão viraram viagem em família" },
  ],
};
