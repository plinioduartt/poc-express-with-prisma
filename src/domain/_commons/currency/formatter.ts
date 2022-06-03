const decimals = Number(process.env.DECIMALS) || 2

type formatterType = Intl.NumberFormat

type formatOptionsType = {
  locale: string
  style: string
  currency: string
}

type InstancesType = {
  [key: string]: any
}

const instances: InstancesType = {}

/**
 *
 * @param formatOptions
 * @returns
 */
function formatter (formatOptions: formatOptionsType): Intl.NumberFormat {
  const instance = new Intl.NumberFormat(formatOptions.locale, {
    style: formatOptions.style,
    currency: formatOptions.currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })

  if (instances[formatOptions.currency]) {
    return instances[formatOptions.currency]
  }

  instances[formatOptions.currency] = instance

  return instance
}

export default formatter
export {
  formatterType,
  formatOptionsType
}
