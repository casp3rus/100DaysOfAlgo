# Solution
# O(nd) time / O(n) space
# n - target amount
# d - number of denominations

def min_number_of_coins_for_change(n, denoms)
    num_of_coins = Array.new(n + 1, Float::INFINITY)
    num_of_coins[0] = 0

    denoms.each do |denom|
        for amount in 1..n
            if denom <= amount
                num_of_coins[amount] = [num_of_coins[amount], num_of_coins[amount - denom] + 1].min
            end
        end
    end
    return num_of_coins[n] != Float::INFINITY ? num_of_coins[n] : -1
end