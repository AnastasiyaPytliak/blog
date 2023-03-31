import React from 'react'
import { useThemeContext } from '../../context/theme'
import { BtnNext, BtnPrev } from '../../image/svg-icons/svg-icons';
import { filterPagesCount } from '../../utils/utils';
import PaginationButton from '../PaginationButtons/PaginationButtons';
import styles from './Pagination.module.css'

interface IPagination {
  page: number;
  allPages: number[];
  changePage: (page: number) => void
}

const Pagination = ({ page, allPages, changePage }: IPagination) => {

  const theme = useThemeContext()

  const handlePrevBtnClick = () => {
      if (page > 1) {
          changePage(page - 1)
      }
  }

  const handleNextBtnClick = () => {
      if (page < allPages[allPages.length - 1]) {
          changePage(page + 1)
      }
  }
  
  const newPages = filterPagesCount(allPages, page)
  
  return (
      <div className={theme.theme == 'light' ? styles.container : styles.containerDark}>
          <button onClick={handlePrevBtnClick} >
            <BtnPrev />
          </button>

          <div className={styles.paginationContainer}>
            <PaginationButton changePage={changePage} page={allPages[0]} propPage={page} />
            {page > 3 ? <div>...</div> : null}
            {newPages.map((el) => 
              <PaginationButton changePage={changePage} page={el} propPage={page} key={Math.random()} />
            )}
            {page < (allPages[allPages.length - 1] - 2) ? <div>...</div> : null}
            {page < (allPages[allPages.length - 1] - 1) ? 
              <PaginationButton propPage={page} changePage={changePage} page={allPages[allPages.length - 1]} /> : null}
          </div>

          <button onClick={handleNextBtnClick}>
            <BtnNext />
          </button>
      </div>
  )
}


export default Pagination