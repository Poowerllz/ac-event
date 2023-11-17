type FilterGallery<T extends any[]> = {
  loopThroughCases: (count: number, data: T, postsPerPage: number) => any[]
}

export const useFilterGallery = <T extends any[]>(): FilterGallery<T> => {
  const chunkArray = (array: any[], chunkSize: number): any[] => {
    const chunkedArray: any[] = []
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize))
    }
    return chunkedArray
  }

  const loopThroughCases = (count: number, data: T, postsPerPage: number) => {
    const start = count * postsPerPage - postsPerPage
    const end = postsPerPage * count

    const newCases = data.slice(start, end)
    const chunkedCases = chunkArray(newCases, 5)

    return chunkedCases
  }

  return {
    loopThroughCases
  }
}
