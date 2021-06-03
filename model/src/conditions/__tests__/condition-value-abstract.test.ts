// @ts-nocheck

import { Registration } from "../condition-value-registration";
import { ConditionValueAbstract } from "../condition-value-abstract";

describe("condition value abstract", () => {
  let registration;

  beforeEach(() => {
    registration = new Registration("MyType", {});
  });

  describe("while creating condition value abstract", () => {
    test("should throw exception if incorrect target", () => {
      const t = () => {
        new ConditionValueAbstract(registration);
      };

      expect(t).toThrowError();
    });
  });
});
