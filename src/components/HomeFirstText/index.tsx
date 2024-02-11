'use client'

import { DataContext } from '@/contexts/DataContext'
import React, { useContext } from 'react'

export type Props = {
  lineOne: string
  lineTwo: string
  lineThree: string
  lineFour: string
}

const HomeFirstText: React.FC<Props> = ({
  lineFour,
  lineOne,
  lineThree,
  lineTwo
}) => {
  const { data } = useContext(DataContext)

  return data?.attributes?.proposit ? (
    <span
      dangerouslySetInnerHTML={{
        __html: data.attributes.proposit.replace('\n', '<br/>')
      }}
    />
  ) : (
    <>
      {lineOne}
      <br />
      {lineTwo}
      <br />
      {lineThree}
      <br />
      {lineFour}
    </>
  )
}

export default HomeFirstText
