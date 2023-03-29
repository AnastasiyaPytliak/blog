import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import PageTemplate from "../PageTemplate/PageTemplate";
import styles from "./Cards.module.css"
import { getCardsCount, getCards, ICard } from "../../api/card/card";
import Tabs from "../../components/Tabs/Tabs";
import { getformatDate, getPagesCount } from "../../utils/utils";
import Pagination from "../../components/Pagination/Pagination";
import Sort from "../../components/Sort/Sort";


const Cards = () => {
  const [cards, setCards] = useState<ICard[]>()
  const [content, setContent] = useState('Articles')
  const [allPages, setAllPages] = useState<number[]>([1])
  const [page, setPage] = useState<number>(1)
  const [sortValue, setSortValue] = useState('')
  const [dates, setDate] = useState<string>('')

  const changeTabContent = (content: string) => setContent(content)
  const changePage = (page: number) => setPage(page)

  useEffect (() =>  {
    (async () => {
      const response = await getCards(content, page, sortValue, dates )
      const cardsCount = await getCardsCount(content, sortValue, dates)
      const allPagesCount = getPagesCount(cardsCount.data)
      setCards(response)
      setAllPages(allPagesCount)     
    })()
  }, [content, page, sortValue, dates])


  return (
    <div className={styles.wrapper}>
      <PageTemplate title={"Blog"} linkName={''}>
        <Tabs content={content} changeContent={changeTabContent}/>
        <Sort  date={dates} changeDate={setDate} value={sortValue} changeValue={setSortValue} />
          <div className={styles.container}>
            {cards ? cards.map((card) => <Card id={card.id} key={card.id} image={card.imageUrl} date={getformatDate(card.publishedAt)} title={card.title} />) : null}
          </div>
        <Pagination page={page} allPages={allPages} changePage={changePage} />
      </PageTemplate>
    </div>
  )
}

export default Cards