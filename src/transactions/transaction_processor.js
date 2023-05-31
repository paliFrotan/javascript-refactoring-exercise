function processTransactions(transActions) {

    if(validateTransactions(transActions)) {
        throw new Error("Undefined collection of transactions")
    }
    let txCount = {};
    let sortedResults = {};
    let txr = [];
    transActions.filter((transaction) => txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1);
    Object.keys(txCount)
        .sort((itemOne, itemTwo) => txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo))
        .map((key, index) =>  txr[index] = `${key} ${txCount[key]}`)
        .map((objectKey) => sortedResults[objectKey] = txCount[objectKey]);
    
    return txr;
}

const validateTransactions = (transactions) => (transactions === undefined);

module.exports = processTransactions;