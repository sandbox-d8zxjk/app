import { test} from "node:test";
import assert from "node:assert/strict";

import { foo } from "../src/index.js";

test("foo() should return 'foo'", () => {
  assert.equal(foo(), "foo");
});
