export default function Page({ params }: { params: { case_name: string } }) {
  const { case_name } = params
  return (
    <section className="min-h-screen w-full">
      <iframe
        src={`https://www.anacouto.com.br/cases/${case_name}/`}
        title={`${case_name} Case`}
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
      />
    </section>
  )
}
