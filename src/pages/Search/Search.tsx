import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import Card from "../../components/Card/Card";
import PageTemplate from "../PageTemplate/PageTemplate";
import { getCardsCount, getCards, INewCard } from "../../api/card/card";
import { getformatDate, getPagesCount } from "../../utils/utils";
import { useSearchContext } from "../../context/search";
import { useContentContext } from "../../context/content";
import styles from "../Cards/Cards.module.css"


const Search = () => {
  const [cards, setCards] = useState<INewCard[]>([])
  const [allPages, setAllPages] = useState<number[]>([1])
  const [page, setPage] = useState<number>(1)

  const changePage = (page: number) => setPage(page)

  const value = useSearchContext()  
  const content = useContentContext()  

  useEffect (() =>  {
    (async () => {
      const response = await getCards(content.content, page, '', '',  value.value)
      const cardsCount = await getCardsCount(content.content, '', '', value.value)
      const allPagesCount = getPagesCount(cardsCount)
      setCards(response)
      setAllPages(allPagesCount)     
    })()
  }, [content.content, page, value.value])
  
  let valueSearch :any = value.value 

  return (
    <div className={styles.wrapper}>
      <PageTemplate title={`Search result '${value.value}'`} linkName={''} post={''}>
          <div className={styles.container}>
            {cards ? cards.filter((card) => card.title.toLowerCase().match(valueSearch.toLowerCase() ? valueSearch.toLowerCase() : '')).map((card) => 
            <Card id={card.id} key={card.id} image={card.imageUrl} date={getformatDate(card.publishedAt)} title={card.title} />) : null}
          </div>
        <Pagination page={page} allPages={allPages} changePage={changePage} />
      </PageTemplate>
    </div>
  )
}

export default Search