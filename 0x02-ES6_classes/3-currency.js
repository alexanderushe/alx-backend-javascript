/**
 * @param {string} code - string
 * @param {string name - string
 */

export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * gets the currency
   */
  get code() {
    return this._code;
  }

  /**
   * set the code
   */
  set code(value) {
    this._code = value;
  }

  /**
   * gets the name
   */
  get name() {
    return this._name;
  }

  /**
   * set the name
   */
  set name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
