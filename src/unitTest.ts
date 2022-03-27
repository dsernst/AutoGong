export const unitTest = <Output>(
  functionToTest: (input: number) => Output,
  testCases: Record<number, Output>,
) => {
  testAll(Object.entries(testCases), functionToTest)
}

export const unitTestArray = <Input, Output>(
  functionToTest: (...args: Input[]) => Output,
  testCases: [Input[], Output][],
) => {
  testAll(testCases, functionToTest)
}

function testAll<Output>(
  cases: [unknown[] | string, Output][],
  // eslint-disable-next-line @typescript-eslint/ban-types
  functionToTest: Function,
): void {
  let passed = 0

  cases.find(([input, expected]) => {
    const actual = Array.isArray(input)
      ? functionToTest(...input)
      : functionToTest(+input)

    if (actual !== expected) {
      const error = `${functionToTest.name}() unit test failure \n\nInput: ${input} \nExpected: ${expected} \nActual: ${actual}`

      // Print error to console
      console.log('\n')
      console.error(error)
      console.log('\n')

      // And show alert if available
      if (typeof alert !== 'undefined') alert(error)

      // Quit .find() loop early
      return true
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      passed++

      // // Uncomment to print individual tests that pass
      // console.log(`${functionToTest.name}() unit test success ${input}`)
    }
  })

  // // Uncomment to print total # of passing tests
  // if (passed === cases.length)
  //   console.log(`${functionToTest.name}() ${passed}/${passed} tests passed`)
}
