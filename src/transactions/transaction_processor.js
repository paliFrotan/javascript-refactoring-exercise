function processTransactions(transActions) {

    if(validateTransactions(transActions)) {
        throw new Error("Undefined collection of transactions")
    }
    let txCount = {};
    transActions.filter((transaction) => txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1);
    let txCountNew = sortByAmountThenName(txCount);
    let txr = [];
    Object.keys(txCountNew).map((key, index) =>  txr[index] = `${key} ${txCountNew[key]}`);
    return txr;
}

function sortByAmountThenName(txCount) {
    let sortedResults = {};
    Object.keys(txCount).sort((itemOne, itemTwo) => txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo))
                        .map((objectKey) => sortedResults[objectKey] = txCount[objectKey]);
    return sortedResults;
}

const validateTransactions = (transactions) => (transactions === undefined);

module.exports = processTransactions;