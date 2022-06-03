import Currency from '../../_commons/currency/currency'
import Entity from '../../_commons/entity'
import InvalidPropertiesException from '../../_errors/InvalidPropertiesException'
import TIsValidInstance from '../../_protocols/isValidInstance'
import CarMapper from '../mapper/CarMapper'
import TCreateCar from '../_protocols/createCar'

export type TCar = {
  id?: string
  name: string
  color: string
  year: string
  model: string
  amount: Currency
}

class Car extends Entity {
  public name: string
  public color: string
  public year: string
  public model: string
  public amount: Currency

  private constructor (args: TCar) {
    super(args)
    this.name = args.name
    this.color = args.color
    this.year = args.year
    this.model = args.model
    this.amount = args.amount
  }

  /**
   *
   * @param data
   * @returns
   */
  static create (data: TCreateCar): Car {
    const domainData: TCar = CarMapper.createDtoToDomain(data)
    const newCar = new Car(domainData)

    const { isValid, errors }: TIsValidInstance = newCar.isValidInstance()

    if (!isValid && errors.length > 0) {
      const ERROR_MSG = errors.join(' ')
      throw new InvalidPropertiesException(400, ERROR_MSG)
    }

    return newCar
  }

  retrieve (): void { }
  update (): void { }
  delete (): void { }
}

export default Car
