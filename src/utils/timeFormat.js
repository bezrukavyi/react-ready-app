import { isInteger } from 'lodash'

const defaultOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}

const timeConver = (date, options) => {
  if (!date) { return '' }
  const validDate = isInteger(date) ? date * 1000 : new Date(Date.parse(date))
  return new Intl.DateTimeFormat('en-US', options).format(validDate)
}

export default {
  default: (date) => timeConver(date, defaultOptions),
  details: (date) => timeConver(date, { ...defaultOptions, hour: 'numeric', minute: 'numeric' }),
}
