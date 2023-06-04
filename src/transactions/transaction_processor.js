

module.exports = processTransactions = transActions => Object.entries(counts = transActions.reduce((acc, curr) => {acc[curr] ? acc[curr]++ : (acc[curr] = 1);return acc;}, {}))
                                                        .map(([key, value]) => ({ key, value }))
                                                        .sort((a, b) => b.value - a.value || a.key.localeCompare(b.key) )
                                                        .map(({ key, value }) => `${key} ${value}`); 