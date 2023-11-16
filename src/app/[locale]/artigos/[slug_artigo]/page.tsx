export default function Page({ params }: { params: { slug_artigo: string } }) {
  const { slug_artigo } = params

  console.log('articles', slug_artigo)

  return (
    <section className="min-h-screen w-full">
      <iframe
        src={`https://www.anacouto.com.br/${slug_artigo}`}
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
