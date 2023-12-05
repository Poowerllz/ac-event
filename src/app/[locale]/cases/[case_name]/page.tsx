import LegacySiteURL from '@/common/utils/variables'
import IframeResizer from 'iframe-resizer-react'
import { headers } from 'next/headers'

export default function Page({ params }: { params: { case_name: string } }) {
  const { case_name } = params
  const nonce = headers().get('x-nonce')

  return (
    <section className="min-h-screen w-full">
      <iframe
        src={`${LegacySiteURL}?cases=/${case_name}/`}
        title={`${case_name} Case`}
        style={{
          height: '100vh',
          width: '100%'
        }}
        frameBorder="0"
      />
    </section>
  )
}
