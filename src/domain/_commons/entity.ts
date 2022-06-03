import crypto from 'node:crypto'
import TIsValidInstance from '../_protocols/isValidInstance'

class Entity {
  protected id: string
  protected constructor (args: any) {
    this.id = args.id || crypto.randomUUID()
  }

  protected isValidInstance (): TIsValidInstance {
    const propertyNames: string[] = Object.getOwnPropertyNames(this)
    const errors: Array<string | null> = propertyNames
      .map(property => this[property] != null ? null : `property ${property} is missing.`)
      .filter(item => !!item)

    return {
      isValid: errors.length === 0,
      errors
    }
  }
}

export default Entity
