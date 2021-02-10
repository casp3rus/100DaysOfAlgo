# Solution
# O(nlog(n)) time / O(1) space

def non_constructible_change(coins)
  coins.sort!

  current_change_created = 0
  coins.each { |coin|
    if coin > current_change_created + 1
      return current_change_created + 1
    end
    current_change_created += coin
  }
  return current_change_created + 1
end
