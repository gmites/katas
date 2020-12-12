export class Bottles {
  singVerse(numberOfVerse: number) {
    switch (numberOfVerse) {
      case 0:
        return `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
      case 1:
        return `1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.`
      case 2:
        return `2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.`
      default:
        return `${numberOfVerse} bottles of beer on the wall, ${numberOfVerse} bottles of beer.\nTake one down and pass it around, ${
          numberOfVerse - 1
        } bottles of beer on the wall.`
    }
  }

  singDownFromTo(finalVerse: number, initialVerse: number) {
    let song = []
    for (let i = finalVerse; i >= initialVerse; i--) {
      song.push(this.singVerse(i))
    }
    return song.join('\n\n')
  }
}
