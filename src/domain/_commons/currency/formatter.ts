const decimals = Number(process.env.DECIMALS) || 2

interface formatOptionsType {
  locale: string
  style: string
  currency: string
}

const formatter = (formatOptions: formatOptionsType): Intl.NumberFormat => new Intl.NumberFormat(formatOptions.locale, {
  style: formatOptions.style,
  currency: formatOptions.currency,
  minimumFractionDigits: decimals,
  maximumFractionDigits: decimals
})

export default formatter
