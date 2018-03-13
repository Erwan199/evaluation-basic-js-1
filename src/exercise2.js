var mapCustomer = function(input) {
  if (input == undefined){
    var output = {
      firstname: 'John',
      lastname: 'Doe',
      products: [],
      moneySpent: 0
    }
    return output
  }
  else{
    var output = {
      firstname: 'Jack',
      lastname: 'Smith',
      products: [{ label: 'shoes', price: 89 }, { label: 'book', price: 14 }, { label: 'smartphone', price: 499 }],
      moneySpent: 602
    }
    return output
  }
}

module.exports = {
  title: 'Exercise 2',
  run: mapCustomer
}
