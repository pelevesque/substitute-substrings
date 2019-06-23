'use strict'

const findSubstringIndexes = require('@pelevesque/find-substring-indexes')
const insertString = require('@pelevesque/insert-string')

function findSubstitutionIndexes (str, substitutions) {
  for (let i = 0, len = substitutions.length; i < len; i++) {
    const substringToSubstitute = substitutions[i][0]
    substitutions[i].push(findSubstringIndexes(str, substringToSubstitute))
  }
}

function readjustSubstitutionIndexes (substitutions, index, indexOffset) {
  for (let i = 0, len = substitutions.length; i < len; i++) {
    const indexes = substitutions[i][2]
    for (let j = 0, len = indexes.length; j < len; j++) {
      if (indexes[j] > index) {
        indexes[j] += indexOffset
      }
    }
  }
}

function makeSubstitutions (str, substitutions) {
  for (let i = 0, len = substitutions.length; i < len; i++) {
    const lengthToRemove = substitutions[i][0].length
    const indexes = substitutions[i][2]
    for (let j = 0, len = indexes.length; j < len; j++) {
      const insert = substitutions[i][1]
      const index = indexes[j]
      str = insertString(str, insert, index, lengthToRemove)
      const indexOffset = insert.length - lengthToRemove
      if (indexOffset !== 0) {
        readjustSubstitutionIndexes(substitutions, index, indexOffset)
      }
    }
  }
  return str
}

module.exports = (str, substitutions) => {
  if (!Array.isArray(substitutions[0])) substitutions = [substitutions]
  if (substitutions[0].length === 0) return str
  findSubstitutionIndexes(str, substitutions)
  return makeSubstitutions(str, substitutions)
}
