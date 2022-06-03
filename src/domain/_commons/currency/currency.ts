import formatter, { formatOptionsType } from './formatter'

const decimals: number = Number(process.env.DECIMALS) || 2
const factorInitialDigit: string = '1'
const decimalWithFistDigitLength = decimals + 1
const factorString: string = factorInitialDigit.padEnd(decimalWithFistDigitLength, '0')
const factor: number = parseInt(factorString)

class Currency {
  private readonly _amount: number

  /**
   *
   * @param amount Need to be passed as a decimal value
   */
  constructor (amount: number) {
    this._amount = amount
  }

  /**
   *
   * @param amount
   * @returns
   */
  private convertFloatToInteger (amount: number): number {
    return amount * factor
  }

  public get toBRL (): string {
    const formatOptions: formatOptionsType = {
      locale: 'pt-br',
      style: 'currency',
      currency: 'BRL'
    }

    const formattedValue: string = formatter(formatOptions)
      .format(this._amount)
    return formattedValue
  }

  public get value (): number {
    return this.convertFloatToInteger(this._amount)
  }

  public get originalValue (): number {
    return this._amount
  }
}

export default Currency
