# Solution
# O(4^n * n) time / O(4^n * n) space

def phone_number_mnemonics(phone_number)
  current_mnemonic = Array.new(phone_number.length, 0)
  mnemonics_found = []

  phone_number_mnemonics_helper(0, phone_number, current_mnemonic, mnemonics_found)

  mnemonics_found
end

def phone_number_mnemonics_helper(idx, phone_number, current_mnemonic, mnemonics_found)
  if idx == phone_number.length
    mnemonic = current_mnemonic.join()
    mnemonics_found << mnemonic
  else
    digit = phone_number[idx]
    letters = DIGIT_LETTERS[digit]
    letters.each { |letter|
      current_mnemonic[idx] = letter
      phone_number_mnemonics_helper(idx + 1, phone_number, current_mnemonic, mnemonics_found)
    }
  end
end

DIGIT_LETTERS = {
  "0" => ["0"],
  "1" => ["1"],
  "2" => ["a", "b", "c"],
  "3" => ["d", "e", "f"],
  "4" => ["g", "h", "i"],
  "5" => ["j", "k", "l"],
  "6" => ["m", "n", "o"],
  "7" => ["p", "q", "r", "s"],
  "8" => ["t", "u", "v"],
  "9" => ["w", "x", "y", "z"],
}
