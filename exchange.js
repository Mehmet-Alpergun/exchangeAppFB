class Currency {
  constructor() {
    //     this.url =
    //       "https://api.freecurrencyapi.com/v1/latest?apikey=DwubsVWBQzrAI1rY529XjbZy1rny84BA3XaIujP0&base_currency=";
    this.url =
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_dsSRj3vpRpHupI0NmZ9M5FU2D9FcG92RQNfcyWe8&base_currency=";
  }

  async exchange(amount, firstCurrency, secondCurrency) {
    const result = await fetch(`${this.url}${firstCurrency}`);
    const response = await result.json();
    const exchanged = amount * response.data[secondCurrency];
    return exchanged;
  }
}
