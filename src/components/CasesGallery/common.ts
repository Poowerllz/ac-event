export type Categories = string[]

export interface Case {
  href: string
  title: string
  categories: string[]
  thumbnail: string
}

export const mockCases: Case[] = [
  {
    href: 'cases/zarns/',
    title: 'Zarns',
    categories: [
      'Comunicação',
      'Estratégia',
      'Naming',
      'Universo Visual e Verbal'
    ],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2023/11/Sem-Titulo-1.png'
  },
  {
    href: 'cases/grupo-sabin/',
    title: 'Grupo Sabin',
    categories: ['criação', 'Estratégia'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2023/10/image-1.png'
  },
  {
    href: 'cases/natura-tododia-2/',
    title: 'Natura Tododia',
    categories: ['Estratégia'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2023/10/destaque.jpg'
  },
  {
    href: 'cases/cosan/',
    title: 'Cosan',
    categories: [
      'Comunicação',
      'Estratégia',
      'Marca',
      'Universo Visual e Verbal'
    ],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2023/09/destaque-2.jpg'
  },
  {
    href: 'cases/brastemp/',
    title: 'Brastemp',
    categories: ['Comunicação', 'Estratégia', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2023/09/destaque-1.jpg'
  },
  {
    href: 'cases/clickbus/',
    title: 'Clickbus',
    categories: ['Comunicação', 'Estratégia', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2023/09/destaque-click.jpg'
  },
  {
    href: 'cases/zuk/',
    title: 'ZUK',
    categories: ['Estratégia', 'Marca', 'Naming', 'Universo Visual e Verbal'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2023/04/ZUK_Case_Site_Thumb.jpg'
  },
  {
    href: 'cases/stam/',
    title: 'STAM',
    categories: [
      'Comunicação',
      'Estratégia',
      'Experiência',
      'Marca',
      'Universo Visual e Verbal'
    ],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2023/04/CAPA-1.png'
  },
  {
    href: 'cases/icarros/',
    title: 'ICARROS',
    categories: ['Comunicação', 'Identidade Visual', 'Posicionamento'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2023/03/Post-2.jpg'
  },
  {
    href: 'cases/havaianas-2/',
    title: 'Havaianas',
    categories: ['Shooting'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2023/02/HAV_Thumb_site-1.png'
  },
  {
    href: 'cases/ativa/',
    title: 'ATIVA',
    categories: ['Estratégia', 'Marca', 'Universo Visual e Verbal'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2022/11/Ativa_IG1_1.png'
  },
  {
    href: 'cases/hapvida-2/',
    title: 'HAPVIDA',
    categories: ['Comunicação'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2022/11/HAP_CAPA.png'
  },
  {
    href: 'cases/cerbras/',
    title: 'CERBRAS',
    categories: ['Estratégia', 'Marca', 'Universo Visual e Verbal'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2022/10/THUMB-SITE.jpg'
  },
  {
    href: 'cases/spaten/',
    title: 'SPATEN',
    categories: [
      'Estratégia',
      'ilustração 3d',
      'tipografia',
      'Universo Visual e Verbal'
    ],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2022/10/bda_spaten_case-capa.png'
  },
  {
    href: 'cases/zamp/',
    title: 'ZAMP',
    categories: ['Marca', 'Posicionamento', 'Universo Visual e Verbal'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2022/09/case_zamp_final-16-2-scaled.jpg'
  },
  {
    href: 'cases/b9/',
    title: 'B9',
    categories: ['Estratégia Global', 'Universo Visual e Verbal'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2022/09/case_B9_insta-JB_Post-2-0-1.png'
  },
  {
    href: 'cases/neon/',
    title: 'Neon',
    categories: ['Universo Visual e Verbal'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2022/07/NEON_case_thumb_dest.jpg'
  },
  {
    href: 'cases/tododia-natura/',
    title: 'Natura Tododia',
    categories: ['Identidade Visual'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2022/06/Still_3-1.jpg'
  },
  {
    href: 'cases/gnt/',
    title: 'GNT',
    categories: ['Comunicação'],
    thumbnail: 'https://www.anacouto.com.br/wp-content/uploads/2022/06/gnt.png'
  },
  {
    href: 'cases/happy-eggs/',
    title: 'HAPPY EGGS',
    categories: ['Embalagem', 'Identidade Visual', 'Posicionamento'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2022/06/CAPA-HAPPY-EGGS.png'
  },
  {
    href: 'cases/citroen/',
    title: 'CITROËN',
    categories: ['Identidade Visual', 'Posicionamento'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2022/05/HOME-SITE_CITROEN.png'
  },
  {
    href: 'cases/havaianas/',
    title: 'HAVAIANAS',
    categories: ['Estratégia Global', 'Universo Visual e Verbal'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2022/04/THUMB.png'
  },
  {
    href: 'cases/peugeot/',
    title: 'PEUGEOT',
    categories: ['Identidade Visual', 'Posicionamento'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2022/03/case_ig_peugeot6.png'
  },
  {
    href: 'cases/mantiqueira-brasil/',
    title: 'MANTIQUEIRA BRASIL',
    categories: ['Experiência', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2022/03/mantiqueira.jpg'
  },
  {
    href: 'cases/hapvida-comunicacao/',
    title: 'HAPVIDA',
    categories: ['Comunicação'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2022/03/capahapvida.jpg'
  },
  {
    href: 'cases/ifood-beneficios/',
    title: 'IFOOD BENEFÍCIOS',
    categories: ['Comunicação', 'Experiência', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2022/03/insta_post_carrossel_1-2.png'
  },
  {
    href: 'cases/manual-do-mundo/',
    title: 'MANUAL DO MUNDO',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2022/02/case-MDM-09-scaled.jpg'
  },
  {
    href: 'cases/novo-mundo/',
    title: 'NOVO MUNDO',
    categories: ['Comunicação', 'Experiência', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2022/01/NM_case_insta-01.png'
  },
  {
    href: 'cases/natura-tododia-inverno-21/',
    title: 'NATURA TODODIA',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2021/11/TD_CASE-INVERNO21_thumb2.jpg'
  },
  {
    href: 'cases/americanas/',
    title: 'AMERICANAS',
    categories: ['Identidade Verbal', 'Identidade Visual'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2021/07/GALERIA-SITE-AMERICANAS.png'
  },
  {
    href: 'cases/americanas-marketplace/',
    title: 'AMERICANAS MARKETPLACE',
    categories: ['Comunicação', 'Experiência', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2021/09/Artboard-4.jpg'
  },
  {
    href: 'cases/natura-tododia-verao-2021/',
    title: 'NATURA TODODIA',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2021/06/TD_CASE-VERAO21_thumb2.jpg'
  },
  {
    href: 'cases/ultragaz/',
    title: 'ULTRAGAZ',
    categories: ['Comunicação', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2021/05/10_Case_Ultra.png'
  },
  {
    href: 'cases/telecine/',
    title: 'TELECINE',
    categories: ['Comunicação', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2021/05/carrossel2.jpg'
  },
  {
    href: 'cases/guide/',
    title: 'GUIDE',
    categories: ['Comunicação', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2021/05/Capa-Guide_Site-2.png'
  },
  {
    href: 'cases/uol/',
    title: 'UOL',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2021/04/uol_case-01_thumb.png'
  },
  {
    href: 'cases/eletromidia/',
    title: 'ELETROMIDIA',
    categories: ['Comunicação', 'Marca'],
    thumbnail: 'https://www.anacouto.com.br/wp-content/uploads/2021/05/em00.png'
  },
  {
    href: 'cases/daus/',
    title: 'DAUS',
    categories: ['Comunicação', 'Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2021/01/DAUS-site-cover.png'
  },
  {
    href: 'cases/pravaler/',
    title: 'PRAVALER',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2020/11/pravaler-case-site_card.jpg'
  },
  {
    href: 'cases/hapvida/',
    title: 'HAPVIDA',
    categories: [
      'Arquitetura',
      'Identidade Verbal',
      'Identidade Visual',
      'Portfólio'
    ],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2020/10/Hapvida_1000x1000_Prancheta-1.png'
  },
  {
    href: 'cases/irani/',
    title: 'IRANI',
    categories: ['Comunicação', 'Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2020/09/IRANI_THUMB.jpg'
  },
  {
    href: 'cases/rio-gastronomia/',
    title: 'RIO GASTRONOMIA',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2020/09/RG_Capa.jpg'
  },
  {
    href: 'cases/fiat/',
    title: 'FIAT',
    categories: ['Estratégia', 'Identidade Visual'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2020/07/Capa_Case.jpg'
  },
  {
    href: 'cases/leveros/',
    title: 'LEVEROS',
    categories: ['Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/01/thumb_leveros.jpg'
  },
  {
    href: 'cases/elemidia-eletromidia-aplausos-na-tela/',
    title: 'ELEMIDIA E ELETROMIDIA',
    categories: ['Comunicação', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2020/05/elemidia.png'
  },
  {
    href: 'cases/guide-ideias-que-guiam/',
    title: 'GUIDE: IDEIAS QUE GUIAM',
    categories: ['Comunicação', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2020/05/ig_carrossel-4.png'
  },
  {
    href: 'cases/guide-queroumguia/',
    title: 'GUIDE #QUEROUMGUIA',
    categories: ['Comunicação', 'Marca'],
    thumbnail: 'https://www.anacouto.com.br/wp-content/uploads/2020/05/07.jpg'
  },
  {
    href: 'cases/profiz/',
    title: 'PROFIZ',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail: 'https://www.anacouto.com.br/wp-content/uploads/2020/03/01.jpg'
  },
  {
    href: 'cases/guarana-natu/',
    title: 'GUARANÁ NATU',
    categories: ['Embalagem', 'Identidade Visual'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2020/03/natu-thumb.jpg'
  },
  {
    href: 'cases/levorin/',
    title: 'LEVORIN',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2020/01/00_capa.jpg'
  },
  {
    href: 'cases/cia-hering/',
    title: 'CIA. HERING',
    categories: ['Digital', 'UX'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2020/01/cia-hering_case_capa-2.jpg'
  },
  {
    href: 'cases/natura-tododia-verao-2020/',
    title: 'NATURA: TODODIA',
    categories: ['Comunicação', 'Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2020/01/TD_CASE-NEGRONI_1A.jpg'
  },
  {
    href: 'cases/elemidia/',
    title: 'ELEMIDIA',
    categories: ['Comunicação', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2019/11/elemidia_case_1x1_B.jpg'
  },
  {
    href: 'cases/natura-tododia/',
    title: 'NATURA: TODODIA',
    categories: ['Comunicação', 'Identidade Visual'],
    thumbnail: 'https://www.anacouto.com.br/wp-content/uploads/2019/10/capa.jpg'
  },
  {
    href: 'cases/capricornio-textil/',
    title: 'CAPRICÓRNIO TÊXTIL',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2019/10/case_capricornio_Artboard-51.jpg'
  },
  {
    href: 'cases/xp-inc/',
    title: 'XP INC.',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2019/09/case_xpinc-14.jpg'
  },
  {
    href: 'cases/sbt/',
    title: 'SBT',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2019/10/case_sbt_Artboard-68.jpg'
  },
  {
    href: 'cases/senai/',
    title: 'SENAI',
    categories: ['Data Analytics', 'Design de Serviços', 'UX'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2019/03/thumbs_cases_senai.jpg'
  },
  {
    href: 'cases/indaia/',
    title: 'INDAIÁ',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2019/07/indaia_thumb.jpg'
  },
  {
    href: 'cases/minalba/',
    title: 'MINALBA',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2019/07/minalba_ig_03.jpg'
  },
  {
    href: 'cases/minalba-brasil/',
    title: 'MINALBA BRASIL',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2019/07/case_minalba-11.jpg'
  },
  {
    href: 'cases/superbac/',
    title: 'SUPERBAC',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2019/06/THUMB_2.png'
  },
  {
    href: 'cases/cbf/',
    title: 'CBF',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2019/04/0-CASE_CBF-THUMBNAIL-1.jpg'
  },
  {
    href: 'cases/pro-frotas/',
    title: 'PRÓ-FROTAS',
    categories: ['Design de Serviços', 'UX'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2019/03/thumbs_cases_profrotas.jpg'
  },
  {
    href: 'cases/megamatte/',
    title: 'MEGAMATTE',
    categories: ['Design de Serviços', 'UX'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2019/04/thumbs_cases_megamatte.jpg'
  },
  {
    href: 'cases/enauta/',
    title: 'ENAUTA',
    categories: ['Comunicação', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2019/03/enauta_case_thumb.png'
  },
  {
    href: 'cases/par-perfeito/',
    title: 'PAR PERFEITO',
    categories: ['Comunicação', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2019/02/PP_case_thumb_site.jpg'
  },
  {
    href: 'cases/chamex/',
    title: 'CHAMEX',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/12/thumbs_case_Chamex.jpg'
  },
  {
    href: 'cases/festival-path/',
    title: 'FESTIVAL PATH',
    categories: ['Comunicação', 'Identidade Visual'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/11/Path_capa.jpg'
  },
  {
    href: 'cases/transdata/',
    title: 'TRANSDATA',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/10/Prancheta-16-co?pia-4-100.png'
  },
  {
    href: 'cases/totvs/',
    title: 'TOTVS',
    categories: ['Marca', 'Sinalização'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/11/destaque-resize.jpg'
  },
  {
    href: 'cases/nextel/',
    title: 'NEXTEL',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/09/thumbs_nextel.jpg'
  },
  {
    href: 'cases/teleperformance/',
    title: 'TELEPERFORMANCE',
    categories: ['Digital', 'Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/09/thumbs_cases_teleperformance.png'
  },
  {
    href: 'cases/jequiti/',
    title: 'JEQUITI',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/07/thumbs_jequiti.jpg'
  },
  {
    href: 'cases/betania/',
    title: 'BETÂNIA',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/07/thumbs_betania.jpg'
  },
  {
    href: 'cases/caixa-seguradora-design-de-servico/',
    title: 'CAIXA SEGURADORA: DESIGN DE SERVIÇO',
    categories: ['CX', 'Design de Serviços', 'Digital', 'UX'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/07/thumbs_CSDS.jpg'
  },
  {
    href: 'cases/rio-galeao/',
    title: 'RIO GALEÃO',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/06/thumbs_galeao.jpg'
  },
  {
    href: 'cases/embelleze/',
    title: 'EMBELLEZE',
    categories: ['Embalagem', 'Identidade Visual'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/04/thumbs_embelleze2-1.jpg'
  },
  {
    href: 'cases/monange/',
    title: 'MONANGE',
    categories: ['Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/04/thumbs_monange.jpg'
  },
  {
    href: 'cases/youse-campanhas/',
    title: 'YOUSE : CAMPANHAS',
    categories: ['Comunicação', 'Data Analytics'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/01/thumbs_Youse3.jpg'
  },
  {
    href: 'cases/youse/',
    title: 'YOUSE',
    categories: ['Digital', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/04/thumb-youse.gif'
  },
  {
    href: 'cases/sao-carlos/',
    title: 'SÃO CARLOS',
    categories: ['Digital', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/01/thumbs_saocarlos.jpg'
  },
  {
    href: 'cases/wiz/',
    title: 'WIZ',
    categories: ['Digital', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/01/thumb-wiz.gif'
  },
  {
    href: 'cases/drogaria-sao-paulo/',
    title: 'DROGARIA SÃO PAULO',
    categories: ['Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/01/thumbs_cases_drogariaSP.jpg'
  },
  {
    href: 'cases/youse-comunicacao/',
    title: 'YOUSE : COMUNICAÇÃO',
    categories: ['Comunicação'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/01/thumb_youse.jpg'
  },
  {
    href: 'cases/caixa-seguradora/',
    title: 'CAIXA SEGURADORA',
    categories: ['Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/01/thumb_caixaseguradora-4.png'
  },
  {
    href: 'cases/mobly/',
    title: 'MOBLY',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/07/thumbs_Mobly-1.jpg'
  },
  {
    href: 'cases/rosa-cha/',
    title: 'ROSA CHÁ',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/07/thumbs_rosacha.jpg'
  },
  {
    href: 'cases/rede/',
    title: 'REDE',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/07/thumbs_rede.jpg'
  },
  {
    href: 'cases/zinco/',
    title: 'ZINCO',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2017/12/thumbs_zinco2.jpg'
  },
  {
    href: 'cases/arezzoco/',
    title: 'AREZZO&CO',
    categories: ['Identidade Visual', 'Marca'],
    thumbnail:
      'https://www.anacouto.com.br/wp-content/uploads/2018/07/thumbs_arezzoco.jpg'
  }
]

export const mockCategories: Categories = [
  'Todas',
  'Comunicação',
  'Estratégia',
  'Naming',
  'Universo Visual e Verbal',
  'Criação',
  'Marca',
  'Identidade Visual',
  'Posicionamento',
  'Experiência',
  'ilustração 3d',
  'tipografia',
  'Shooting',
  'Embalagem',
  'Identidade Verbal',
  'Portfólio',
  'Arquitetura',
  'CX',
  'Data Analytics',
  'Design de Serviços',
  'Digital',
  'UX'
]

export const filterCasesByCategory = (
  selectedOption: string | null,
  cases: Case[]
) => {
  if (!selectedOption || selectedOption === 'Todas') {
    return cases
  }

  const filteredCases = cases.filter(caseItem =>
    caseItem.categories.includes(selectedOption)
  )

  return filteredCases
}
