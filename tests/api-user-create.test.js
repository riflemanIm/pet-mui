process.env.TS_NODE_COMPILER_OPTIONS = JSON.stringify({
  module: "commonjs",
  moduleResolution: "node",
});
require("ts-node/register/transpile-only");

const { test } = require("node:test");
const assert = require("node:assert/strict");
const handlerModule = require("../pages/api/user/index.ts");
const prismaModule = require("../lib/prisma.ts");
const prisma = prismaModule.default || prismaModule;

const handler = handlerModule.default || handlerModule;

function createMockRes() {
  const result = { statusCode: 200, body: undefined };
  const res = {
    setHeader() {
      return res;
    },
    status(code) {
      result.statusCode = code;
      return res;
    },
    json(payload) {
      result.body = payload;
      return res;
    },
  };
  return { res, result };
}

test("POST /api/user creates admin user with expected payload", async (t) => {
  const payload = {
    email: "oleglambin@gmail.com",
    name: "Oleg",
    role: "Admin",
    balance: 1000,
    password: "rock11city",
  };

  const originalCreate = prisma.user.create;
  let capturedArgs = null;

  prisma.user.create = async (args) => {
    capturedArgs = args;
    return { id: 101 };
  };

  const { res, result } = createMockRes();

  const req = {
    method: "POST",
    body: payload,
    headers: {},
  };

  try {
    await handler(req, res);
  } finally {
    prisma.user.create = originalCreate;
  }

  assert.ok(capturedArgs, "prisma.user.create should be called");
  assert.equal(capturedArgs.data.email, payload.email);
  assert.equal(capturedArgs.data.name, payload.name);
  assert.equal(capturedArgs.data.role, "Admin");
  assert.equal(capturedArgs.data.balance, payload.balance);
  assert.equal(result.statusCode, 201);
  assert.deepEqual(result.body, 101);
});
