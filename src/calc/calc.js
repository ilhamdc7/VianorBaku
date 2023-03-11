export const calcCredit = (price ,percentage,month ) => {
    const calculatedPrice = price * percentage / month 
    return calculatedPrice
}