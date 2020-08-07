function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {  
  if(takeOutOrders.length + dineInOrders.length !== servedOrders.length) {
    return false;
  }

  let takeOutIndex = 0;
  let dineInIndex = 0;
  let result = true
  
  for(let i = 0; i < servedOrders.length; i++) {
    const next = servedOrders.shift();
    
    if(takeOutOrders[takeOutIndex] === next) {
      takeOutIndex++;
    } else if(dineInOrders[dineInIndex] === next) {
      dineInIndex++;
    } else {
      result = false;
    }
  }

  return result;
}

module.exports = isFirstComeFirstServed;