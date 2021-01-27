const {success, fail, repair} = require('./enhancer.js');

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
const overEnhanced = {
    name: "BoomStick",
    durability: 80,
    enhancement: 18
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
    it('increases item enhancement accordingly', () => {
        expect(success(weakItem)).toBe(weakItem.enhancement + 1)
    })
    it('handles fully enhanced item', () => {
        expect(success(strongItem)).toBe(strongItem.enhancement)
    })
})

describe('item enhancement failure', () => {
    it(' decreases item durability accordingly when fully enhanced', () => {
        expect(fail(strongItem).durability).toBe(strongItem.durability)
    })
    it(' decreases item durability accordingly', () => {
        expect(fail(weakItem).durability).toBe(weakItem.durability)
    })
    it(' decreases item enhancement accordingly', () => {
        expect(fail(overEnhanced).enhancement).toBe(overEnhanced.enhancement)
    })
})


// If the item's enhancement is less than 15, the durability 
//of the item is decreased by 5.

// If the item's enhancement is 15 or more, the durability 
//of the item is decreased by 10.

// If the item's enhancement level is greater than 16, the 
//enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).