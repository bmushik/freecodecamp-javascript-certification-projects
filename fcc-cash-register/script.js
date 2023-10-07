function checkCashRegister(price, cash, cid) {
    // Define the currency unit and its value in cents
    const currencyUnit = [["PENNY", 1], ["NICKEL", 5], ["DIME", 10], ["QUARTER", 25], ["ONE", 100], ["FIVE", 500], ["TEN", 1000], ["TWENTY", 2000], ["ONE HUNDRED", 10000]];
    let sumCid = 0; // Total amount in the cash drawer in cents
    let change = (cash - price) * 100; // Amount to be returned as change in cents
    let openCid = []; // Array to store the change to be given back

    // Calculate the total amount of money in the cash drawer
    for (let i = 0; i < cid.length; i++) {
        sumCid += cid[i][1] * 100; // Convert dollar amount to cents
    }

    // Check if the cash in the drawer is less than the required change
    if (sumCid < change) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        };
    } else if (sumCid === change) {
        return {
            status: "CLOSED",
            change: cid // Return all cash in the drawer as change
        };
    } else {
        // Iterate through the currency units in reverse order to give larger denominations first
        for (let i = currencyUnit.length - 1; i >= 0; i--) {
            let count = 0;  // Number of units of the current denomination
            while (change >= currencyUnit[i][1] && cid[i][1] * 100 > 0) {
                change -= currencyUnit[i][1]; // Deduct the denomination from the change
                cid[i][1] -= currencyUnit[i][1] / 100;  // Deduct the denomination from the cash in the drawer
                count++;
            }
            // Add the denomination and the count to the change to be given back
            if (count > 0) {
                openCid.push([currencyUnit[i][0], count * (currencyUnit[i][1] / 100)]);
            }
        }
    }
    // Check if there's still remaining change to be given back
    if (change > 0) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        };
    }
    // Return the change to be given back using available denominations
    return {
        status: "OPEN",
        change: openCid
    };
}
// Example usage of the function
const result = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log(result);
