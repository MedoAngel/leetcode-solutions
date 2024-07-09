/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let richest = 0;

    for(let customer of accounts){
        let customerWealth = 0;

        for(let bankAmount of customer){
            customerWealth += bankAmount;
        }

        if(customerWealth > richest) richest = customerWealth;
    }

    return richest;
};