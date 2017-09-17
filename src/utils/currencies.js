export const cryptoCurrencies = [
  "Btc",
  "Eth",
  "Ltc",
  "Rep",
  "Zec",
  "Xmr",
  "Etc",
  "Xrp",
  "Dash",
  "Str",
  "Maid",
  "Fct",
  "Xem",
  "Steem",
  "Doge",
  "Bts",
  "Game",
  "Ardr",
  "Dcr",
  "Sjcx",
  "Gnt",
]

export const currenciesFormat = {
  USD: (value) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value),
  EUR: (value) => new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value)
}
