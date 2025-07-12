var maxProfit = function (prices) {
    let maxP = 0, l = 0, r =1;

   while(r < prices.length) {
    if(prices[l] < prices[r]) {
        const profit = prices[r] - prices[l];
        maxP = Math.max(maxP, profit);
    } else {l = r}
    r++
   }

    return maxP; 

};

const maxP2 = prices => {
    let maxP = 0;
    let minBuy = prices[0];

    for (let sell of prices) {
        maxP = Math.max(maxP, sell - minBuy);
        minBuy = Math.min(minBuy, sell);
    }

    return maxP;    
}

const p1 = maxProfit([7, 1, 5, 3, 6, 4]);
const p2 = maxProfit([7, 6, 4, 3, 1]);

console.log({p1, p2});
