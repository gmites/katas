export function stitchArrays(...args: unknown[][]) {
  //test 1
  //return [5];

  // test 2 - test 3 **NO ES VÁLIDA PORQUE DEJA DE FUNCIONAR EL 1ER TEST
  // return [...args[0], ...args[1]];

  //test 3
  const arrayStitched = []
  for (const array of args) {
    arrayStitched.push(...array)
  }
  return arrayStitched
}
