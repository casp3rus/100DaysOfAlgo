# Solution
# O(n) time / O(n) space

def balanced_brackets(string)
    opening_brackets = "([{"
    closing_brackets = ")]}"
    matching_brackets = {")"=> "(", "]"=> "[", "}"=> "{"}
    stack = []

    string.each_char { |char|
        if opening_brackets[char]
            stack << char
        elsif closing_brackets[char]
            if stack.length == 0
                return false
            end
            
            if stack[-1] == matching_brackets[char]
                stack.pop()
            else
                return false
            end
        end
    }
    return stack.length == 0
end