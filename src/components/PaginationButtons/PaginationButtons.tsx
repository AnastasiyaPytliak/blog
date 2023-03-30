import React from 'react'
import { useThemeContext } from '../../context/theme'
import styles from './PaginationButtons.module.css'

interface IPaginationButton {
    page: number,
    propPage: number,
    changePage: (page: number) => void
}

const PaginationButton = ({ page, propPage, changePage }: IPaginationButton) => {

    const theme = useThemeContext()

    return (
        <div className={theme.theme == 'light' ? styles.container : styles.containerDark} onClick={() => changePage(page)}>
            <div className={propPage === page ? styles.btnActive : styles.btn}>{page}</div>
        </div>
    )
}

export default PaginationButton