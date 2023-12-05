import LegacySiteURL from '@/common/utils/variables'

export default function Page({ params }: { params: { slug_artigo: string } }) {
  const { slug_artigo } = params

  return (
    <section className="min-h-screen w-full">
      <iframe
        src={`${LegacySiteURL}/${slug_artigo}`}
        title={`${slug_artigo} Article`}
        style={{
          height: '100vh',
          width: '100%'
        }}
        frameBorder="0"
      />
    </section>
  )
}
