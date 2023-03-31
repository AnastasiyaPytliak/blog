import React, { useEffect, useState } from "react";
import SelectedCard, { ISelectedCard } from "../../components/SelectedCard/SelectedCard";
import PageTemplate from "../PageTemplate/PageTemplate";
import { useNavigate, useParams } from 'react-router-dom';
import { useThemeContext } from "../../context/theme";
import styles from "./CurrentCard.module.css"
import { getCards, getCurrentCard } from "../../api/card/card";
import { ICard } from "../../components/Card/Card";

export interface ICurrentCard {
  data: Post
}

export interface Post extends ICard {
  summary: string;
  imageUrl: string;
}

export const CurrentCard = ( ) => {
  const { id } = useParams()
  const [cards, setCards] = useState<ICard[]>()
  const [card, setCard] = useState<Post>()
  const [content, setContent] = useState('Articles')

  const theme = useThemeContext()
  const navigate = useNavigate()
  console.log(useParams());


  useEffect (() =>  {
    (async () => {
      const response = await getCurrentCard(id, content)
      setCard(response.data) 
      console.log(response);

    })()
  }, [id, content])


  return (
    <PageTemplate title={''} linkName={`Home / Post ${id}`}>
          <div className={theme ? styles.container : styles.containerDark}>
            {card ? <SelectedCard title={card.title} summary={card.summary} image={card.imageUrl} id={card.id} />: null}
            {/* <div className={styles.posts}>
                {posts ? posts.map((el) => <SmallPost image={el.imageUrl} date={el.publishedAt} title={el.title} id={el.id} key={nanoid()} />): null}
            </div> */}
        </div>
    </PageTemplate>
  );
};
