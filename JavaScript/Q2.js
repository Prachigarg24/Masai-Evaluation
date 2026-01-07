function aggregateData(transcations){
  const result = {};
  transcations.forEach(txn => {
    const cat = txn.category;
    const amt = txn.amount;
    if(!result[cat]){
      result[cat] = {
        total: 0,
        count: 0,
        highest: amt,
        lowest: amt
      };

    }
    result[cat].total += amt;
    result[cat].count  += 1;
    result[cat].highest = Math.max(result[cat].highest, amt);
    result[cat].lowest =  Math.min(result[cat].lowest, amt);
  })
  for(let cat in result){
    result[cat].average = Number(
      (result[cat].total / result[cat].count).toFixed(2)
    )
  }
  return result
}
const transcations = [
  { id: 1, category: 'Food', amount: 45.50, date: '2024-01-15' },
  { id: 2, category: 'Transport', amount: 20.00, date: '2024-01-16' },
  { id: 3, category: 'Food', amount: 30.75, date: '2024-01-17' },
  { id: 4, category: 'Entertainment', amount: 50.00, date: '2024-01-18' },
  { id: 5, category: 'Food', amount: 25.25, date: '2024-01-19' },
  { id: 6, category: 'Transport', amount: 15.50, date: '2024-01-20' }
];

console.log(aggregateData(transcations));
