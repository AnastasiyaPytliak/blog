import React, { useReducer, useState } from 'react'
import { useThemeContext } from '../../context/theme'
import { Drop } from '../../image/svg-icons/svg-icons'
import styles from './Sort.module.css'

interface ISort {
  value: string,
  date: string,
  changeValue: (arg: string) => void,
  changeDate: (arg: string) => void
}

const Sort = ({ value, date, changeValue, changeDate } :ISort ) => {
  const [isSort, setIsSort] = useState(false)
  const [isFiltr, setIsFiltr] = useState(false)

  const [state, dispatch] = useReducer(reducer, {date: ''});
  const [stateSort, dispatchSort] = useReducer(reducerSort, {value: ''});

  const theme = useThemeContext()

  function reducer (state :any, action :any) {
    switch (action.type) {
      case 'Day': 
        return date = 'Day';
      case 'Week':
        return date = 'Week';
      case 'Month':
        return date = 'Month';
      case 'Year':
        return date = 'Year';
      default:
        return state
    }
  }

  function reducerSort (stateSort :any, actionSort :any) {
    switch (actionSort.type) {
      case 'A-Z': 
        return value = 'A-Z';
      case 'Z-A':
        return value = 'Z-A';
      default:
        return stateSort
    }
  }

  const handleBtnClick = () => {
    setIsSort(!isSort)
  }

  const handleBtnFiltrClick = () => {
    setIsFiltr(!isFiltr)
  }

  const handleBtnDateClick = (type: string) => {
    dispatch({type: type})
    changeDate(type)
  }

  const handleBtnSortClick = (type: string) => {
    dispatchSort({type: type})
    changeValue(type)
  }

  if (theme.theme === 'light') {
    return (
          <div className={styles.container} >
            <div className={`${styles.date}`} onClick={handleBtnFiltrClick}>
              <div className={`${styles.select}`}>
                  <p><span>Date:</span> Day</p>
                  <Drop />
                </div>
            </div>
  
            <div className={`${styles.typeOfFiltr} ${isFiltr ? styles.date : ''}`}>
                <div className={`${styles.filtr} ${date === 'Day' ? styles.active : ''}`} onClick={() => handleBtnDateClick('Day')}>Day</div>
                <div className={`${styles.filtr} ${date === 'Week' ? styles.active : ''}`}  onClick={() => handleBtnDateClick('Week')}>Week</div>
                <div className={`${styles.filtr} ${date === 'Month' ? styles.active : ''}`}  onClick={() => handleBtnDateClick('Month')}>Month</div>
                <div className={`${styles.filtr} ${date === 'Year' ? styles.active : ''}`}  onClick={() => handleBtnDateClick('Year')}>Year</div>
            </div>

            <div>
              <div onClick={handleBtnClick}>
                <div className={styles.select}>
                  <p><span>Sort:</span> Title(A-Z)</p>
                  <Drop />
                </div>
              </div>
              <div className={isSort ? styles.sort : styles.sortNone}>
                  <div className={`${styles.option} ${value === 'A-Z' ? styles.active : ''}`} onClick={() => handleBtnSortClick('A-Z')}>Title (A-Z)</div>
                  <div className={`${styles.option} ${value === 'Z-A' ? styles.active : ''}`} onClick={() => handleBtnSortClick('Z-A')}>Title (Z-A)</div>
              </div>
            </div>
          </div>
          )
  } else {
        return (
            <div className={styles.container} >
              <div className={`${styles.date}`} onClick={handleBtnFiltrClick}>
                <div className={`${styles.selectDark}`}>
                  <p><span>Date:</span> Day</p>
                  <Drop />
                </div>
              </div>

              <div className={`${styles.typeOfFiltr}`}>
                  <div className={`${styles.filtrDark} ${date === 'Day' ? styles.active : ''}`} onClick={() => handleBtnDateClick('Day')}>Day</div>
                  <div className={`${styles.filtrDark} ${date === 'Week' ? styles.active : ''}`}  onClick={() => handleBtnDateClick('Week')}>Week</div>
                  <div className={`${styles.filtrDark} ${date === 'Month' ? styles.active : ''}`}  onClick={() => handleBtnDateClick('Month')}>Month</div>
                  <div className={`${styles.filtrDark} ${date === 'Year' ? styles.active : ''}`}  onClick={() => handleBtnDateClick('Year')}>Year</div>
              </div>

              <div>
                <div onClick={handleBtnClick}>
                  <div className={styles.selectDark}>
                    <p><span>Sort:</span> Title(A-Z)</p>
                    <Drop />
                  </div>
                </div>
                <div className={isSort ? styles.sort : styles.sortNone}>
                    <div className={`${styles.optionDark} ${value === 'A-Z' ? styles.active : ''}`} onClick={() => handleBtnSortClick('A-Z')}>Title (A-Z)</div>
                    <div className={`${styles.optionDark} ${value === 'Z-A' ? styles.active : ''}`} onClick={() => handleBtnSortClick('Z-A')}>Title (Z-A)</div>
                </div>
              </div>
            </div>
          )
  }
}

export default Sort
