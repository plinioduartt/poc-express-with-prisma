import crypto from 'node:crypto'

class Entity {
  protected id: string
  protected constructor (id?: string) {
    this.id = id || crypto.randomUUID()
  }
}

export default Entity
