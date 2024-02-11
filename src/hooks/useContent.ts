import { strapi_api } from '@/service/api_strapi'

export async function useContent(path: string) {
  return (await strapi_api.get(path)).data.data
}
