import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import PageTemplate from "../PageTemplate/PageTemplate";
import styles from "../Cards/Cards.module.css"
import { getCardsCount, getCards, ICard } from "../../api/card/card";
import { getformatDate, getPagesCount } from "../../utils/utils";
import Pagination from "../../components/Pagination/Pagination";
import { useSearchContext } from "../../context/search";


const Search = () => {
  const [cards, setCards] = useState<ICard[]>([])
  const [content, setContent] = useState('Articles')
  const [allPages, setAllPages] = useState<number[]>([1])
  const [page, setPage] = useState<number>(1)

  const changePage = (page: number) => setPage(page)

  const {value, getValue} = useSearchContext()  


  useEffect (() =>  {
    (async () => {
      const response = await getCards(content, page, '', '',  value)
      const cardsCount = await getCardsCount(content, '', '', value)
      const allPagesCount = getPagesCount(cardsCount.data)
      setCards(response)
      setAllPages(allPagesCount)     
    })()
  }, [content, page])


  return (
    <div className={styles.wrapper}>
      <PageTemplate title={`Search result ${value}`} linkName={''}>
          <div className={styles.container}>
            {cards ? cards.filter((card) => card.title.match(value ? value : '')).map((card) => 
            <Card id={card.id} key={card.id} image={card.imageUrl} date={getformatDate(card.publishedAt)} title={card.title} />) : null}
          </div>
        <Pagination page={page} allPages={allPages} changePage={changePage} />
      </PageTemplate>
    </div>
  )
}

export default Search