export function createPath(language: string, common: Record<string, any>) {
  if (!language || language === 'pt-br') {
    return { ...common }
  }

  return {
    ...common,
    [`/${language}`]: common['/'],
    [`/${language}/o-que-fazemos`]: common['/o-que-fazemos'],
    [`/${language}/quem-somos`]: common['/quem-somos'],
    [`/${language}/contato`]: common['/contato']
  }
}
