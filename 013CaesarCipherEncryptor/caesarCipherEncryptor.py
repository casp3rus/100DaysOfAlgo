# Solution 1
# O(n) time / O(n) space

def caesarCipherEncryptor(string, key):
    newLetters = []
    newKey = key % 26
    for letter in string:
        newLetters.append(getNewLetter(letter, newKey))
    return ''.join(newLetters)


def getNewLetter(letter, key):
    getNewLetterCode = ord(letter) + key
    return chr(getNewLetterCode) if getNewLetterCode <= 122 else chr(96 + getNewLetterCode % 122)

# Solution 2
# O(n) time / O(n) space


def caesarCipherEncryptor(string, key):
    newLetters = []
    newKey = key % 26
    alphabet = list('abcdefghijklmnopqrstuvwxyz')
    for letter in string:
        newLetters.append(getNewLetter(letter, newKey, alphabet))
    return ''.join(newLetters)


def getNewLetter(letter, key, alphabet):
    newLetterCode = alphabet.index(letter) + key
    return alphabet[newLetterCode % 26]
