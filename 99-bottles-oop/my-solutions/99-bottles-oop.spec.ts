import { Bottles } from './99-bottles-oop'

describe('bottles', () => {
  it('Given a verse return that verse', () => {
    const given = `99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.`

    const bottles = new Bottles()
    const actual = bottles.singVerse(99)

    expect(actual).toBe(
      `99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.`
    )
  })

  it('Given a verse return that verse', () => {
    const given = `96 bottles of beer on the wall, 96 bottles of beer.
Take one down and pass it around, 95 bottles of beer on the wall.

95 bottles of beer on the wall, 95 bottles of beer.
Take one down and pass it around, 94 bottles of beer on the wall.

94 bottles of beer on the wall, 94 bottles of beer.
Take one down and pass it around, 93 bottles of beer on the wall.`

    const bottles = new Bottles()
    const actual = bottles.singDownFromTo(96, 94)

    expect(actual).toBe(`96 bottles of beer on the wall, 96 bottles of beer.
Take one down and pass it around, 95 bottles of beer on the wall.

95 bottles of beer on the wall, 95 bottles of beer.
Take one down and pass it around, 94 bottles of beer on the wall.

94 bottles of beer on the wall, 94 bottles of beer.
Take one down and pass it around, 93 bottles of beer on the wall.`)
  })
})
