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
})
