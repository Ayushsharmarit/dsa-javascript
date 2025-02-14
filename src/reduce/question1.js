const orders = [
    { customer: 'Alice', amount: 250 },
    { customer: 'Bob', amount: 150 },
    { customer: 'Alice', amount: 300 },
    { customer: 'Charlie', amount: 500 },
    { customer: 'Bob', amount: 100 },
    { customer: 'Alice', amount: 200 },
  ];
  
  function calculate(orders) {
    return orders.reduce((acc, item) => {
      if (!acc[item.customer]) {
        acc[item.customer] = 0; 
      }
      acc[item.customer] += item.amount; // Add amount
      return acc;
    }, {}); // Initial accumulator as an empty object
  }
  
  console.log(calculate(orders));
  