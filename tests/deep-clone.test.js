const clone = require('../src/index')

describe('Test suite for deep clone util', () => {
  const testObj = {
    a: 1,
    b: 'abcd',
    c: [1, 2, 3, 4],
    d: {
      e: 'abc',
      f: 1
    },
    g: [{
      h: 1,
      i: 'abcd',
      z: {
        y: 1
      }
    }],
    k: {
      l: [2, 3, 4, 5, { a: 1 }]
    },
    m: Infinity,
    o: null,
    p: undefined,
    q: new Date(),
    r: new Set([1, 2, 3, 4]),
    s: new Map([[1, 2], [{ a: 1 }, { c: 2 }]]),
    t: new Promise(() => { }),
    u: new RegExp( "http://www.google.com", "igm" ),
    n: (a) => { return a }
  }

  it('Should just paas', () => {
    expect(1).toBe(1)
  })

  it('Should get all the keys in the cloned object', () => {
    const clonedObj = clone(testObj)
    expect(Object.keys(clonedObj).length).toBe(Object.keys(testObj).length)
  })

  it('Should clone elementary values in the cloned object', () => {
    const clonedObj = clone(testObj)
    expect(clonedObj.a).toBe(testObj.a)
    clonedObj.a = 2
    expect(testObj.a).toBe(1)
  })

  it('Should deep clone nested objects in the cloned object', () => {
    const clonedObj = clone(testObj)
    clonedObj.g[0].z.y = 2
    expect(testObj.g[0].z.y).toBe(1)
  })

  it('Should clone null, undefined & Infinity in the cloned object', () => {
    const clonedObj = clone(testObj)
    expect(clonedObj.m).toBe(Infinity)
    expect(clonedObj.o).toBe(null)
    expect(clonedObj.p).toBe(undefined)
  })

  it('Should clone date object in the cloned object', () => {
    const clonedObj = clone(testObj)
    expect(clonedObj.q.getTime()).toBe(testObj.q.getTime())
  })

  it('Should clone regex object in the cloned object', () => {
    const clonedObj = clone(testObj)
    expect(clonedObj.u.source).toBe(testObj.u.source)
    expect(clonedObj.u.lastIndex).toBe(testObj.u.lastIndex)
  })

  it('Should clone map & set object in the cloned object', () => {
    const clonedObj = clone(testObj)
    expect(clonedObj.r.values().next().value).toBe(testObj.r.values().next().value)
    expect(clonedObj.s.values().next().value).toBe(testObj.s.values().next().value)
  })

  it('Should clone functions in the cloned object', () => {
    const clonedObj = clone(testObj)
    expect(clonedObj.n(123)).toBe(testObj.n(123))
  })

  it('Should clone promises in the cloned object', () => {
    const clonedObj = clone(testObj)
    expect(clonedObj.t.constructor.name.toString()).toBe('Promise')
  })
})
