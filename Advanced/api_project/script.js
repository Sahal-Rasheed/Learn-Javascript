const BASE_URL = `https://v6.exchangerate-api.com/v6/390a7e991575fbd03c9a6a3f/pair/`

const dropdowns = document.querySelectorAll('.dropdown select')
const formBtn = document.querySelector('form button')
const fromCurr = document.querySelector('.from select')
const toCurr = document.querySelector('.to select')
const msg = document.querySelector('.msg')

dropdowns.forEach((select) => {
    for (code in countryList) {
        const option = document.createElement('option')
        option.value = code
        option.innerText = code
        if (select.name === "from" && code === "USD") {
            option.selected = "selected"
        } else if (select.name === "to" && code === "INR") {
            option.selected = "selected"
        }
        select.appendChild(option)
    }
    select.addEventListener('change', (e) => {
        updateFlag(e.target)
    })
})

const updateFlag = (element) => {
    const currCode = element.value
    const countryCode = countryList[currCode]
    const flagUrl = `https://flagsapi.com/${countryCode}/flat/64.png`
    element.parentElement.querySelector("img").src = flagUrl
}

formBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    const amountValue = document.querySelector(".amount input").value
    if (amountValue === "" || amountValue < 1) {
        alert("Please enter an valid amount")
    }
    const URL = `${BASE_URL}${fromCurr.value}/${toCurr.value}`
    const response = await fetch(URL)
    const data = await response.json()
    const rate = data.conversion_rate
    
    const convertedAmount = amountValue * rate
    msg.innerText = `${amountValue} ${fromCurr.value} = ${convertedAmount} ${toCurr.value}`
 })