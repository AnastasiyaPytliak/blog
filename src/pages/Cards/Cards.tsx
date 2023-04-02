import React, { useEffect, useState } from "react";
import PageTemplate from "../PageTemplate/PageTemplate";
import Card from "../../components/Card/Card";
import Tabs from "../../components/Tabs/Tabs";
import Sort from "../../components/Sort/Sort";
import Pagination from "../../components/Pagination/Pagination";
import { getCardsCount, getCards, INewCard } from "../../api/card/card";
import { getformatDate, getPagesCount } from "../../utils/utils";
import { useContentContext } from "../../context/content";
import styles from "./Cards.module.css"


const Cards = () => {
  const [cards, setCards] = useState<INewCard[]>()
  const [page, setPage] = useState<number>(1)
  const [allPages, setAllPages] = useState<number[]>([1])
  const [sort, setSort] = useState('')
  const [dates, setDate] = useState<string>('')

  const changePage = (page: number) => setPage(page)

  const content = useContentContext() 

  useEffect (() =>  {
    (async () => {
      const response = await getCards(content.content, page, sort, dates )
      const cardsCount = await getCardsCount(content.content, sort, dates)
      const allPagesCount = getPagesCount(cardsCount)
      setCards(response)
      setAllPages(allPagesCount)
    })()
  }, [content.content, page, sort, dates])

  return (
    <div className={styles.wrapper}>
      <PageTemplate title={"Blog"} linkName={''} post={''}>
        <Tabs />
        <Sort date={dates} changeDate={setDate} value={sort} changeValue={setSort} />
          <div className={styles.container}> 
            {cards ? cards.map((card) => 
              <Card id={card.id} key={card.id} image={card.imageUrl} date={getformatDate(card.publishedAt)} title={card.title} />) 
            : null}
          </div>
        <Pagination page={page} allPages={allPages} changePage={changePage} />
      </PageTemplate>
    </div>
  )
}

export default Cards
