import React, { useEffect, useState } from "react";
import PageTemplate from "../PageTemplate/PageTemplate";
import SelectedCard from "../../components/SelectedCard/SelectedCard";
import Card from "../../components/Card/Card";
import { api } from "../../api";
import { INewCard } from "../../api/card/card";
import { useParams } from 'react-router-dom';
import { getformatDate } from "../../utils/utils";
import { useThemeContext } from "../../context/theme";
import { useContentContext } from "../../context/content";
import styles from "./CurrentCard.module.css"

interface ICard {
  id: number,
  title: string
  summary: string,
  imageUrl: string
}

export interface ICurrentCard {
  data: ICard
}

export const CurrentCard = ( ) => {
  const [cards, setCards] = useState<INewCard[]>()
  const [card, setCard] = useState<ICard>()

  const theme = useThemeContext()
  const content = useContentContext() 
  const { id } = useParams()

  useEffect (() =>  {
    (async () => {
      const response = await api.get(`/${content.content === 'Articles' ? 'articles' : 'blogs'}/${id}`)
      const responseCard = await api.get(`/${content.content === 'Articles' ? 'articles' : 'blogs'}?_limit=3`)
      setCard(response.data) 
      setCards(responseCard.data) 
    })()
  }, [])


  return (
    <PageTemplate title={''} linkName={'Home'} post={`/ Post ${id}`}>
          <div className={theme ? styles.container : styles.containerDark}>
            {card ? <SelectedCard title={card.title} summary={card.summary} image={card.imageUrl} id={card.id} />: null}
            <div className={styles.cardsMob}>
              <div className={styles.cards}>
                {cards ? cards.map((card) => 
                  <Card id={card.id} key={card.id} image={card.imageUrl} date={getformatDate(card.publishedAt)} title={card.title} />) 
                : null}
              </div>
            </div>
        </div>
    </PageTemplate>
  )
}
