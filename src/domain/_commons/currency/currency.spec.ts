import Currency from './currency'

describe('Currency formatter', () => {
  test('It should return an integer valid value', () => {
    // arrange
    const inputValue: number = 99.99

    // act
    const cost: Currency = new Currency(inputValue)

    // assertion
    expect(cost.value).toEqual(9999)
  })

  test('It should return the original valid value', () => {
    // arrange
    const inputValue: number = 99.99

    // act
    const cost: Currency = new Currency(inputValue)

    // assertion
    expect(cost.originalValue).toEqual(99.99)
  })

  test('It should return the formated BRL valid value', () => {
    // arrange
    const inputValue: number = 99.99

    // act
    const cost: Currency = new Currency(inputValue)

    console.log('cost.toBRL.charCodeAt(9)', cost.toBRL.charCodeAt(2))

    // assertion
    expect(cost.toBRL.charCodeAt(2)).toBe(160)
    expect(cost.toBRL).toEqual('R$\xa099,99')
  })
})
