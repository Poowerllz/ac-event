'use client'

import { useEffect } from 'react'

export function ContactForm() {
  const handleInsertEmbed = () => {
    if ((window as any).RDStationForms) {
      new (window as any).RDStationForms(
        'formulario_comercial_site-fb5b3630efda6500c110',
        'UA-114424524-1'
      ).createForm()
    } else {
      handleInsertEmbed()
    }
  }

  useEffect(() => {
    setTimeout(handleInsertEmbed, 100)
  })

  return <div role="main" id="formulario_comercial_site-fb5b3630efda6500c110" />
}
