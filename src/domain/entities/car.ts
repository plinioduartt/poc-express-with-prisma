import Currency from '../_commons/currency/currency'
import Entity from '../_commons/entity'

class Car extends Entity {
  public name: string
  public year: string
  public modelId: string
  public amount: Currency

  create (): void {}
  retrieve (): void {}
  update (): void {}
  delete (): void {}
}

export default Car
