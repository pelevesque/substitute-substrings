/* global describe, it */
'use strict'

const expect = require('chai').expect
const substituteSubstrings = require('../index')

describe('#substituteSubstrings()', () => {
  it('should not substitute anything when the str is empty', () => {
    const str = ''
    const substitutions = ['a', '1']
    const result = substituteSubstrings(str, substitutions)
    const expected = ''
    expect(result).to.equal(expected)
  })

  it('should not substitute anything when substitutions are empty', () => {
    const str = 'abc'
    const substitutions = []
    const result = substituteSubstrings(str, substitutions)
    const expected = 'abc'
    expect(result).to.equal(expected)
  })

  it('should substitute one character a single time', () => {
    const str = 'abc'
    const substitutions = ['a', '1']
    const result = substituteSubstrings(str, substitutions)
    const expected = '1bc'
    expect(result).to.equal(expected)
  })

  it('should substitute one character multiple times contiguously', () => {
    const str = 'abbc'
    const substitutions = ['b', '2']
    const result = substituteSubstrings(str, substitutions)
    const expected = 'a22c'
    expect(result).to.equal(expected)
  })

  it('should substitute one character multiple times non-contiguously', () => {
    const str = 'abacada'
    const substitutions = ['a', 'e']
    const result = substituteSubstrings(str, substitutions)
    const expected = 'ebecede'
    expect(result).to.equal(expected)
  })

  it('should substitute many characters a single time each', () => {
    const str = 'abcdef'
    const substitutions = [
      ['a', '1'],
      ['b', '2'],
      ['c', '3'],
      ['d', '4'],
      ['e', '5'],
      ['f', '6']
    ]
    const result = substituteSubstrings(str, substitutions)
    const expected = '123456'
    expect(result).to.equal(expected)
  })

  it('should substitute many characters multiple times', () => {
    const str = 'abbcdaecefe'
    const substitutions = [
      ['a', '1'],
      ['b', '2'],
      ['c', '3'],
      ['d', '4'],
      ['e', '5'],
      ['f', '6']
    ]
    const result = substituteSubstrings(str, substitutions)
    const expected = '12234153565'
    expect(result).to.equal(expected)
  })

  it('should make single character substitutions with replacements that are in the string', () => {
    const str = 'abccba'
    const substitutions = [
      ['a', 'b'],
      ['b', 'c'],
      ['c', 'a']
    ]
    const result = substituteSubstrings(str, substitutions)
    const expected = 'bcaacb'
    expect(result).to.equal(expected)
  })

  it('should make multiple character substitutions with replacements that are in the string', () => {
    const str = 'catdoghendogcat'
    const substitutions = [
      ['cat', 'dog'],
      ['dog', 'cat'],
      ['hen', 'pig']
    ]
    const result = substituteSubstrings(str, substitutions)
    const expected = 'dogcatpigcatdog'
    expect(result).to.equal(expected)
  })

  it('should not swap', () => {
    const str = 'aabbccddee'
    const substitutions = [
      ['aa', 'bb'],
      ['c', 'd']
    ]
    const result = substituteSubstrings(str, substitutions)
    const expected = 'bbbbddddee'
    expect(result).to.equal(expected)
  })

  it('should substitute many substrings of many various lengths (adjusting indexes)', () => {
    const str = 'a long stormy night and a little boy named jim'
    const substitutions = [
      ['a ', 'the '],
      ['night', 'day'],
      ['jim', 'oscar'],
      ['long', 'short'],
      ['little', 'very tall']
    ]
    const result = substituteSubstrings(str, substitutions)
    const expected = 'the short stormy day and the very tall boy named oscar'
    expect(result).to.equal(expected)
  })
})
