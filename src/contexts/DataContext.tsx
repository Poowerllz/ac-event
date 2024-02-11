'use client'

import { strapi_api } from '@/service/api_strapi'
import React, { useContext, useEffect, useState } from 'react'

export type ContactProps = {
  data: any
}

export const DataContext = React.createContext({} as ContactProps)

interface Props {
  children: React.ReactNode
}

const DataContextProvider = ({ children }: Props) => {
  const [data, setData] = useState<any>({ test: 'test' })

  console.log(process.env.STRAPI_API_TOKEN)

  useEffect(() => {
    strapi_api.get('home/?populate=*').then(({ data }) => setData(data.data))
  }, [])

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  )
}

export const useDataContext = () => {
  const context = useContext(DataContext)

  if (context) return context

  throw new Error(
    'useClientContext must be used within a ClientContextProvider.'
  )
}

export default DataContextProvider
