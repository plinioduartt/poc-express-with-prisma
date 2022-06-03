import { omit } from 'lodash'
import formatter, { formatOptionsType } from '../../../_commons/currency/formatter'
import TCreateCar from '../../_protocols/createCar'
import Car from './car'

describe('Car Entity', () => {
  test('It should create new car', () => {
    // arrange
    const createSpy = jest.spyOn(Car, 'create')
    const data: TCreateCar = {
      name: 'Corsinha',
      color: 'Amarelo',
      year: '2022',
      model: 'Bolinha',
      amount: 48896.25
    }

    // act
    const newCar: Car = Car.create(data)
    const formatOptions: formatOptionsType = {
      locale: 'pt-br',
      style: 'currency',
      currency: 'BRL'
    }
    const expectFormattedAmount: string = formatter(formatOptions).format(data.amount)

    // assertion
    expect(createSpy).toHaveBeenCalledWith(data)
    expect(newCar).toBeTruthy()
    expect(newCar).toHaveProperty('id')
    expect(newCar).toHaveProperty('name')
    expect(newCar).toHaveProperty('color')
    expect(newCar).toHaveProperty('year')
    expect(newCar).toHaveProperty('model')
    expect(newCar).toHaveProperty('amount')
    expect(newCar.amount.toBRL).toEqual(expectFormattedAmount)
    expect(newCar.amount.toBRL).toEqual('R$\xa048.896,25')
    expect(newCar.amount.value).toEqual(4889625)
    expect(newCar.amount.originalValue).toEqual(48896.25)
  })

  test('It should return an InvalidPropertiesException', () => {
    // arrange
    const invalidData: TCreateCar = {
      name: 'Corsinha',
      color: 'Amarelo',
      year: '2022',
      model: 'Bolinha',
      amount: 48896.25
    }

    // act
    const invalidRequest = async (): Promise<Car> => Car
      .create(omit(invalidData, ['year', 'model']) as TCreateCar)

    // assertion
    expect(invalidRequest)
      .rejects
      .toThrowError('property year is missing. property model is missing.')
  })
})
