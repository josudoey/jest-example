jest.disableAutomock();
jest.mock('../sum')
const sum= require('../sum')
const action = require('..')

describe('action', function () {

  beforeEach(function(){
    sum.mockClear()
  })
  it('test', async function () {
    const ans = action(1, 2)

    expect(ans).toBe(1)
    expect(sum).toBeCalledTimes(1)
  })


  it('sum', async function () {
    const ans = sum(1, 2)

    expect(ans).toBe(1)
    expect(sum).toBeCalledTimes(1)
  })

})