# Solution
# O(n*l) time / O(c) space
# n - number of words
# l - length of the longest word
# c - number of unique characters across all words

def minimumCharactersForWords(words):
    maximumCharacterFrequencies = {}

    for word in words:
      characterFrequencies = countCharacterFrequencies(word)
      updateMaximumFrequencies(characterFrequencies, maximumCharacterFrequencies)

    return makeArrayFromCharacterFrequencies(maximumCharacterFrequencies)

def countCharacterFrequencies(string):
  characterFrequencies = {}

  for character in string:
    if character not in characterFrequencies:
      characterFrequencies[character] = 0

    characterFrequencies[character] += 1
  
  return characterFrequencies

def updateMaximumFrequencies(frequencies, maximumFrequencies):
  for character in frequencies:
    frequency = frequencies[character]

    if character in maximumFrequencies:
      maximumFrequencies[character] = max(frequency, maximumFrequencies[character])
    else:
      maximumFrequencies[character] = frequency

def makeArrayFromCharacterFrequencies(characterFrequencies):
  characters = []

  for character in characterFrequencies:
    frequency = characterFrequencies[character]

    for _ in range(frequency):
      characters.append(character)

  return characters
  