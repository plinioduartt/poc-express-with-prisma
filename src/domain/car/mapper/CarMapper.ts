import Currency from '../../_commons/currency/currency'
import { TCar } from '../entity/car'
import TCreateCar from '../_protocols/createCar'

class CarMapper {
  public createDtoToDomain (data: TCreateCar): TCar {
    return {
      name: data.name,
      color: data.color,
      year: data.year,
      model: data.model,
      amount: new Currency(data.amount)
    }
  }
}

export default new CarMapper()
