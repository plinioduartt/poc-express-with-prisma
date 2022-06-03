import { TCar } from '../car/entities/car/car'
import TCreateCar from '../car/_protocols/createCar'
import Currency from '../_commons/currency/currency'

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
