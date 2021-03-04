# Solution 1
# O(m * (n + m)) time / O(1) space
# n - length of characters string
# m - length of document string

def generateDocument(characters, document):
    for character in document:
        documentFrequency = countCharacterFrequency(character, document)
        characterFrequency = countCharacterFrequency(character, characters)

        if documentFrequency > characterFrequency:
            return False

    return True


def countCharacterFrequency(character, target):
    frequency = 0
    for char in target:
        if char == character:
            frequency += 1

    return frequency


# Solution 2
# O(c * (n + m)) time / O(c) space
# n - length of characters string
# m - length of document string
# c - number of unique characters in document

def generateDocument(characters, document):
    alreadyCounted = set()

    for character in document:
        if character in alreadyCounted:
            continue

        documentFrequency = countCharacterFrequency(character, document)
        characterFrequency = countCharacterFrequency(character, characters)

        if documentFrequency > characterFrequency:
            return False

        alreadyCounted.add(character)

    return True


def countCharacterFrequency(character, target):
    frequency = 0
    for char in target:
        if char == character:
            frequency += 1

    return frequency


# Solution 3
# O(n + m) time / O(c) space
# n - length of characters string
# m - length of document string
# c - number of unique characters in the characters string

def generateDocument(characters, document):
    characterCounts = {}

    for character in characters:
        if character not in characterCounts:
            characterCounts[character] = 0

        characterCounts[character] += 1

    for character in document:
        if character not in characterCounts or characterCounts[character] == 0:
            return False

        characterCounts[character] -= 1

    return True
