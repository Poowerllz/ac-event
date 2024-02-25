import { NextRequest, NextResponse } from 'next/server'
import { strapi_api } from '@/service/api_strapi'

// To handle a GET request to /api
export async function POST(request: NextRequest) {
  try {
    const { query }: { query: string } = await request.json()

    const res = (await strapi_api.get(query)).data.data

    return NextResponse.json(res, { status: 200 })
  } catch (err: any) {
    console.log(err.response.data)
  }
}
