import { StatusCodes, TestHandler } from '@restlessness/core';

const postUsers = 'postUsers';

beforeAll(async done => {
  await TestHandler.beforeAll();
  done();
});

describe('postUsers API', () => {
  test('', async (done) => {
    
    const res = await TestHandler.invokeLambda(postUsers);
    // expect(res.statusCode).toBe(StatusCodes.OK);
    done();
  });
});

afterAll(async done => {
  await TestHandler.afterAll();
  done();
});
