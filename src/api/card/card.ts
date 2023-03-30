import { api } from ".."
import { getDate } from "../../utils/utils";

export interface ICard {
  id: number;
  imageUrl: string;
  publishedAt: string;
  title: string
} 

export interface GetCard {
  count: number,
  next: string | null;
  previous: string | null;
  cards: ICard[]
}

interface ICount {
  data: number
}

export const getCards = async (
  content: string,
  page: number,
  sort: string,
  dates: string
) => {
  const sortDay = getDate(dates)

  let link = `${content === 'Articles' ? 'articles' : 'blogs'}?_limit=12&`

  if (page && page > 1) link += `_start=${(page - 1) * 12}&`
  if (sort && sort === 'A-Z') link += `_sort=title&`
  if (sort && sort === 'Z-A') link += `_sort=summary&`
  if (sortDay && dates) link += `_publishedAt_gte=${sortDay}&`
  const response = await api.get(link)
  return response.data
}


export const getCardsCount = async (
  content: string,
  sort: string,
  dates: string
) => {
  const sortDay = getDate(dates)
  let link = `/${content === 'Articles' ? 'articles' : 'blogs'}/count?`
  if (sort && sort === 'A-Z') link += `_sort=title&`
  if (sort && sort === 'Z-A') link += `_sort=summary&`
  if (sortDay && dates) link += `_publishedAt_gte=${sortDay}&`
  const response: ICount = await api.get(link)
  return response
}