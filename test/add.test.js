import { expect } from "chai";
import add from "../add.js";

describe('Функция add', () => {
  it("Должна правильно складывать два числа", () => {
    expect(add(1, 2)).to.equal(3);
    expect(add(-1, -1)).to.equal(-2);
    expect(add(0, 0)).to.equal(0);
    expect(add(1, -1)).to.equal(1);
  })
});