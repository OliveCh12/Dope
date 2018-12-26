const app = new Vue({
  el: '#app',
  data: {
    date: new Date().toLocaleString(),
    weight: 0,
    weedPrice: 10,
    customers: [],
    newCustomer: {
      name: '',
      weight: 0,
      price: 0
    }
  },
  methods: {
    addCustomer: function () {
      // Setting the price of weed 1g = 10 €
      this.newCustomer.weight = _.floor(this.newCustomer.price / this.weedPrice, 2)
      // Add item to the customers array.
      this.customers.push(this.newCustomer)
      // Reset Forms
      this.newCustomer = {
        name: '',
        weight: 0,
        price: 0
      }
    },
    onChange: function () {
      for (const key in this.customers) {
        if (this.customers.hasOwnProperty(key)) {
          const customer = this.customers[key];
          customer.weight = _.floor(customer.price / this.weedPrice, 2)
        }
      }
    }
  },
  computed: {
    // Looping values for getting a percentage.
    mixingValue: function () {
      for (const key in this.customers) {
        if (this.customers.hasOwnProperty(key)) {
          const customer = this.customers[key];
          console.log(customer.weight)
        }
      }
    },
    // Display the numbers of items in array
    remaining: function () {
      return this.customers.length
    }
  }
})