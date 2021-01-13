# Solution
# O(nd) time / O(n) space
# n - target amount
# d - number of denominations

def number_of_ways_to_make_change(n, denoms)
    ways = Array.new(n + 1, 0)
    ways[0] = 1

    denoms.each do |denom|
        for amount in 1..n
            if denom <= amount
                ways[amount] += ways[amount - denom]
            end
        end
    end
    return ways[n]
end