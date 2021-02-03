# Solution 1
# O(w * n * log(n) + n * w * log(w)) time / O(wn) space
# w - length of the words array (number of words)
# n - length of the longest word

def group_anagrams(words)
  if words.length == 0
    return []
  end

  sorted_words = words.map { |word|
    word.split("").sort().join("")
  }
  indices = (Array.new(words.length) { |i| i }).sort { |a, b| sorted_words[a] <=> sorted_words[b] }

  result = []
  current_anagram_group = []
  current_anagram = sorted_words[indices[0]]

  indices.each { |index|
    word = words[index]
    sorted_word = sorted_words[index]

    if sorted_word == current_anagram
      current_anagram_group << word
      next
    end

    result << current_anagram_group
    current_anagram_group = [word]
    current_anagram = sorted_word
  }
  result << current_anagram_group
end

# Solution 2
# O(w * n * log(n)) time / O(wn) space
# w - length of the words array (number of words)
# n - length of the longest word

def group_anagrams(words)
  anagrams = {}
  words.each { |word|
    sorted_word = word.split("").sort().join("")
    if anagrams.has_key?(sorted_word)
      anagrams[sorted_word] << word
    else
      anagrams[sorted_word] = [word]
    end
  }
  return anagrams.values()
end
