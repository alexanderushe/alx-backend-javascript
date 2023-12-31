/**
 * implement car class
 * @params {brand} string
 * @params {motor} string
 * @params {color} string
 */

export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.color = color;
    this.motor = motor;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
