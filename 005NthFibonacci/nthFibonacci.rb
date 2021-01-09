# Solution 1 - recursion
# O(2^n) time / O(n) space

def get_nth_fib(n)
    if n == 2
        return 1
    elsif n == 1
        return 0
    else
        return get_nth_fib(n - 1) + get_nth_fib(n - 2)
    end
end