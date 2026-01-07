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
      (result[cat].total/ result[cat].count).toFixed(2)
    )
  }
  return result
}