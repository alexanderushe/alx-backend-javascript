/**
 * airport class
 * @params {string} name
 * @params {string} code
 */

export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /**
   * @return {string}
   */
  get name() {
    return this._name;
  }

  /**
   * @return {string}
   */
  get code() {
    return this._code;
  }

  /**
   * @param {string} name
   */
  set name(name) {
    this._name = name;
  }

  /**
   * @param {string} code
   */
  set code(code) {
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
