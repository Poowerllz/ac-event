'use client'

import React from 'react'
import { Props } from './types'
import { Typography } from '../ui/Typography'
import { useDataContext } from '@/contexts/DataContext'

const StrapiTypography: React.FC<Props> = ({ dataKey, children, ...props }) => {
  const { data } = useDataContext()
  const ComponentData = data && data.attributes[dataKey]

  console.log(ComponentData)

  return (
    <Typography
      {...props}
      {...(ComponentData && {
        dangerouslySetInnerHTML: {
          __html: ComponentData.replace(/\n/g, '<br/>')
        }
      })}
    >
      {ComponentData ? null : children}
    </Typography>
  )
}

export default StrapiTypography
