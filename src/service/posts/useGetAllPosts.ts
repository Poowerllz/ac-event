import { useEffect, useState } from 'react'
import api from '../api'
import { CustomError } from '../type'
import { GetPostsProps } from './type'

export const useGetAllPosts = () => {
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const [galleries, setGalleries] = useState<Array<Array<GetPostsProps>>>([[]])

  const addGallery = (cases: Array<GetPostsProps>) => {
    const newGallery = cases.slice(0, 5)
    setGalleries(prevGalleries => [...prevGalleries, newGallery])
  }

  const handleGetAllPosts = async () => {
    try {
      setLoading(true)

      const res = await api.get(`/posts?_embed&per_page=5&page=${page || 1}`)

      setPage(prevPage => prevPage + 1)
      addGallery(res.data)
    } catch (error) {
      if (!error) return
      const customError = new Error('Get All Posts Error') as CustomError
      customError.details = { ...error }
      throw customError
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleGetAllPosts()
  }, [])

  return { galleries, loading, handleGetAllPosts }
}
