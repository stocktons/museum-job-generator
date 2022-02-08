import { FIRST, MIDDLE, LAST, MONTH, DATE } from './data.js'

function createString(first, middle, last, month, date) {
    if (middle === "none") middle = getRandomLetter();
    return `${FIRST[first]} of ${MIDDLE[middle]} & ${LAST[last]} at the ${MONTH[month]} of ${DATE[date]}`;
}

function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

export default createString;