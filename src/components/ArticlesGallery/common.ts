import { GetPostsProps } from '@/service/posts/type'

export const filterArticlesByCategory = (
  selectedOption: string | null,
  posts: GetPostsProps[][]
) => {
  if (!selectedOption || selectedOption === 'Todas') {
    return posts
  }

  const flattenedArray: GetPostsProps[] = posts.flat()

  const filteredPosts = flattenedArray.filter(
    post =>
      post?._embedded['wp:term'][0].filter(
        categorie => categorie.name === selectedOption
      )
  )

  const chunkSize = 5
  const chunkedArray: GetPostsProps[][] = []

  for (let i = 0; i < filteredPosts.length; i += chunkSize) {
    const chunk = filteredPosts.slice(i, i + chunkSize)
    chunkedArray.push(chunk)
  }

  return chunkedArray
}
