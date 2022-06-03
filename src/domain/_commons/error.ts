class InvalidPropertiesException extends Error {
  public status: number
  /**
   *
   * @param status
   * @param message
   */
  constructor (status: number, message: string) {
    super(message)
    this.status = status
    this.name = 'InvalidPropertiesException'
  }
}

export default InvalidPropertiesException
