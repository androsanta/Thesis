import { StatusCodes, TestHandler } from '@restlessness/core';

const getUsersById = 'getUsersById';

beforeAll(async done => {
  await TestHandler.beforeAll();
  done();
});

describe('getUsersById API', () => {
  test('', async (done) => {
    
    const res = await TestHandler.invokeLambda(getUsersById);
    // expect(res.statusCode).toBe(StatusCodes.OK);
    done();
  });
});

afterAll(async done => {
  await TestHandler.afterAll();
  done();
});
