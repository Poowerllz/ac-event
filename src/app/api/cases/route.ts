import { Prisma, PrismaClient } from '@prisma/client'
import { useSearchParams } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'
import { useParams } from 'next/navigation'

const prisma = new PrismaClient()
// To handle a GET request to /api
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const take = searchParams.get('limit')
  const offset = searchParams.get('page')

  const cases = (
    await prisma.acb_posts.findMany({
      select: {
        post_title: true,
        post_date: true,
        post_status: true,
        post_modified: true,
        post_name: true,
        ID: true
      },
      where: { post_type: 'cases', post_status: 'publish' },
      orderBy: { post_modified: 'desc' },
      ...(take && { take: parseInt(take) }),
      ...(offset && { skip: parseInt(offset) })
    })
  ).map(post => ({ ...post, ID: post.ID.toString() }))

  const postWithImages = await Promise.all(
    cases.map(async cas => {
      const image_url = await prisma.acb_posts.findFirst({
        select: { guid: true, post_type: true, post_parent: true },
        where: {
          post_type: 'attachment',
          post_parent: parseInt(cas.ID),
          OR: [
            {
              post_mime_type: 'image/jpeg'
            },
            {
              post_mime_type: 'image/png'
            }
          ]
        }
      })

      return {
        ...cas,
        href: cas.post_name,
        thumbnail: image_url?.guid.replace(
          'www.anacouto.com.br',
          'web.anacouto.com.br'
        )
      }
    })
  )

  // Do whatever you want
  return NextResponse.json(postWithImages, { status: 200 })
}
