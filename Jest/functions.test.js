const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect (functions.add(2, 2)).toBe(4)
})

test('Adds 2 + 2 to not equal 4', () => {
    expect (functions.add(2, 2)).not.toBe(5)
})

test('Should be null', () => {
    expect (functions.isNull()).toBeNull()
})

test('Should be falsy', () => {
    expect (functions.checkValue(null)).toBeFalsy()
})

test('user should be Mike Benefiel object', () => {
    expect (functions.createUser()).toEqual({firstName: 'Mike', lastName: 'Benefiel'})
})