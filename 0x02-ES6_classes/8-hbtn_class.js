/**
 * implement Holberton class
 * @params {size} number
 * @params {location} string
 */

export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  /**
   * @return {string} location
   */
  get location() {
    return this._location;
  }

  /**
   * @param {number} size
   */
  get size() {
    return this._size;
  }

  set location(value) {
    this._location = value;
  }

  set size(value) {
    this._size = value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
