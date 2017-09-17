export default {
  percent: (value) => `${value}%`,
  USD: (value) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value),
  EUR: (value) => new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value)
}
