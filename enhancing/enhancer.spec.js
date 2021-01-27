const {success, fail, repair, get} = require('./enhancer.js');

const strongItem = {
    name: "BoomStick",
    durability: 100,
    enhancement: 20
}
const weakItem = {
    name: "BoomStick",
    durability: 50,
    enhancement: 10
}

test('sanity', () => {
    expect(1).toBe(1)
    expect(1).not.toBe(2)
})

describe('item repair test', () => {
    it('repairs damaged item to max durability', () => {
        expect(repair(weakItem)).toBe(100)
    })
    it('handles full strength item', () => {
        expect(repair(strongItem)).toBe(strongItem.durability)
    })
})

describe('item enhancement success', () => {
    it('enhances weaker item accordingly', () => {
        expect(success(weakItem)).toBe(weakItem.enhancement + 1)
    })
    it('handles fully enhanced item', () => {
        expect(success(strongItem)).toBe(strongItem.enhancement)
    })
})
