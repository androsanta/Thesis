import { StatusCodes, TestHandler } from '@restlessness/core';

const deleteUsers = 'deleteUsers';

beforeAll(async done => {
  await TestHandler.beforeAll();
  done();
});

describe('deleteUsers API', () => {
  test('', async (done) => {
    
    const res = await TestHandler.invokeLambda(deleteUsers);
    // expect(res.statusCode).toBe(StatusCodes.OK);
    done();
  });
});

afterAll(async done => {
  await TestHandler.afterAll();
  done();
});
