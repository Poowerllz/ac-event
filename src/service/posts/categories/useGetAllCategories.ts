import api from '@/service/api'
import { CustomError } from '@/service/type'
import { useEffect, useState } from 'react'

export const useGetAllCategories = () => {
  const [data, setData] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const handleGetAllCategories = async () => {
    try {
      setLoading(true)

      const res = await api.get(`/categories?per_page=100`)

      if (!Array.isArray(res.data) || res.data.length === 0) {
        return 'Array inválido ou vazio'
      }

      const categories: any = res.data.map(objeto => ({
        name: objeto.name,
        id: objeto.id
      }))

      categories.unshift({ name: 'Todas', id: 0 })

      setData(categories)
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
    handleGetAllCategories()
  }, [])

  return {
    loading,
    data
  }
}
