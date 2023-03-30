import moment from "moment";

export const getformatDate = (date: string) => {
  let newDate: Date = new Date(date)
  let getDay = () => newDate.getUTCDate() < 10 ? `0${newDate.getUTCDate()}` : newDate.getUTCDate()
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let getMonth = month[newDate.getUTCMonth()];
  let justDate = `${getDay()} ${getMonth} ${newDate.getUTCFullYear()}`

  return justDate
}


export const getPagesCount = (totalCount: number) => {
  let array = []
  const allPages = Math.ceil(totalCount / 12)
  for (let i = 0; i < allPages; i++) {
    array.push(i + 1)
  }
  return array
}


export const filterPagesCount = (totalCount: number[], currentPage: number) => {
  let array = totalCount.filter((page) => {
      if ( page > 1 && page <= currentPage + 1 && page >= currentPage - 1) {
          return true
      }
  })
  return array
}


export const getDate = (type: string) => {
  let formate = 'YYYY-MM-DD'
  if (type === 'Day') {
    return moment().format(formate)
  } else if (type === 'Week') {   
    return moment().day(-7).format(formate)
  } else if (type === 'Month') {
    return moment().day(-30).format(formate)
  } else if (type === 'Year') {
    return moment().day(-365).format(formate)
  }
}
