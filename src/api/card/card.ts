import { api } from ".."
import { getDate } from "../../utils/utils";
import { ICurrentCard } from "../../pages/CurrentCard/CurrentCard";


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

export const getCards = async (
  content: string,
  page: number,
  sort: string,
  dates: string,
  search?: string
) => {
  const sortDay = getDate(dates)

  let link = `${content === 'Articles' ? 'articles' : 'blogs'}?_limit=12&`

  if (page > 1) link += `_start=${(page - 1) * 12}&`
  if (sortDay && dates) link += `_publishedAt_gte=${sortDay}&`
  if (sort === 'A-Z') link += `_sort=title&`
  if (sort === 'Z-A') link += `_sort=summary&`
  if (search) link += `&title_contains=${search}`

  const response = await api.get(link)
  return response.data
}


export const getCardsCount = async (
  content: string,
  sort: string,
  dates: string,
  search?: string
) => {
  const sortDay = getDate(dates)

  let link = `/${content === 'Articles' ? 'articles' : 'blogs'}/count?`

  if (sortDay && dates) link += `_publishedAt_gte=${sortDay}&`
  if (sort === 'A-Z') link += `_sort=title&`
  if (sort === 'Z-A') link += `_sort=summary&`
  if (search) link += `&title_contains=${search}`

  const response = await api.get(link)
  return response.data
}


export const getCurrentCard = async (
  id: string | undefined, 
  content: string 
) => {
  const link = `/${content === 'Articles' ? 'articles' : 'blogs'}/${id}`
  const response :ICurrentCard = await api.get(link)
  return response
}