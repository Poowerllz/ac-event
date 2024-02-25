export function createPath(language: string, common: Record<string, any>) {
  if (!language || language === 'pt-br') {
    return { ...common }
  }

  return {
    ...common,
    [`/${language}`]: common['/'],
    [`/${language}/o-que-fazemos`]: common['/o-que-fazemos'],
    [`/${language}/quem-somos`]: common['/quem-somos'],
    [`/${language}/cases`]: common['/cases'],
    [`/${language}/cases/`]: common['/cases/'],
    [`/${language}/contatos`]: common['/contatos'],
    [`/${language}/artigos`]: common['/artigos'],
    [`/${language}/slug-artigo`]: common['/slug-artigo']
  }
}
