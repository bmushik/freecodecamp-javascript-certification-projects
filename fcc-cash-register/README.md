# Cash Register Calculator

This is a JavaScript function that calculates the change to be given back to a customer from a cash register. It determines the denominations of currency (e.g., PENNY, NICKEL, DIME, QUARTER, etc.) to be returned based on the available funds in the cash drawer.

## Function Explanation
The checkCashRegister function takes three arguments: price, cash, and cid (cash in drawer). It calculates the optimal change to be returned and provides the breakdown of denominations. To avoid precision issues with floating-point calculations, the function internally operates in cents by multiplying values by 100. This prevents small discrepancies that might occur when working with fractional values.

