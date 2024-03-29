'use client'

import axios from 'axios'
import { usePathname } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

export type ContactProps = {
  data: any
}

export const DataContext = React.createContext({} as ContactProps)

interface Props {
  children: React.ReactNode
  locale: string
}

const DataContextProvider = ({ children, locale }: Props) => {
  const path = usePathname()
  const [data, setData] = useState<any>()

  useEffect(() => {
    const newPath = path.replaceAll('/', '').replaceAll('en', '')

    axios
      .post('api/strapi', {
        query: `${
          path.replaceAll('en', '') === '/'
            ? 'home'
            : newPath.substring(0, newPath.length - 1)
        }/?locale=all&populate=*`
      })
      .then(({ data }) => {
        setData(
          data.find(
            (data: any) => data.attributes.locale === locale.replace('-br', '')
          )
        )
      })
  }, [locale, path])

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
