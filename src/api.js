//base url
const BASE_URL = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API}`

//Getting the current month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if (month < 10) {
        return `0${month}`
    }
    else {
        return month
    }
}
//Getting the current day
const getCurrentDay = () => {
    const day = new Date().getDate()
    if (day < 10) {
        return `0${day}`
    }
    else {
        return day
    }
}

const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

const popularGames = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

const popularGamesUrl = () => `${BASE_URL}${popularGames}`

console.log(popularGamesUrl())