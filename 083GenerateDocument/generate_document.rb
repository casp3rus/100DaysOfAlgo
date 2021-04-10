# Solution 1
# O(m * (n + m)) time / O(1) space
# n - length of characters string
# m - length of the document string

def generate_document(characters, document)
  document.each_char do |character|
    document_frequency = count_character_frequency(character, document)
    characters_frequency = count_character_frequency(character, characters)

    false if document_frequency > characters_frequency
  end
  true
end

def count_character_frequency(character, target)
  frequency = 0

  target.each_char do |char|
    frequency += 1 if char == character
  end
  frequency
end

# Solution 2
# O(c * (n + m)) time / O(c) space
# n - length of characters string
# m - length of the document string
# c - number of unique characters in the document

def generate_document(characters, document)
  already_counted = [].to_set

  document.each_char do |character|
    next if already_counted.include?(character)

    document_frequency = count_character_frequency(character, document)
    characters_frequency = count_character_frequency(character, characters)

    false if document_frequency > characters_frequency

    already_counted.add(character)
  end
  true
end

def count_character_frequency(character, target)
  frequency = 0

  target.each_char do |char|
    frequency += 1 if char == character
  end
  frequency
end

# Solution 3
# O(n + m) time / O(c) space
# n - length of characters string
# m - length of the document string
# c - number of unique characters in the characters string

def generate_document(characters, document)
  character_counts = {}

  characters.each_char do |character|
    character_counts[character] = 0 unless character_counts[character]
    character_counts[character] += 1
  end

  document.each_char do |character|
    false if !character_counts[character] || character_counts[character] == 0
    character_counts[character] -= 1
  end
  true
end
