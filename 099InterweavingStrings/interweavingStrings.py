# Solution 1
# O(n^(n + m)) time / O(n + m) space
# n - length of the first string
# m - length of the second string

def interweavingStrings(one, two, three):
    if len(three) != len(one) + len(two):
        return False
    return areInterwoven(one, two, three, 0, 0)

def areInterwoven(one, two, three, i, j):
    k = i + j
    if k == len(three):
    	return True
    
    if i < len(one) and one[i] == three[k]:
    	if areInterwoven(one, two, three, i + 1, j):
    		return True
    
    if j < len(two) and two[j] == three[k]:
    	return areInterwoven(one, two, three, i, j + 1)
    
    return False


# Solution 1
# O(n^(n + m)) time / O(n + m) space
# n - length of the first string
# m - length of the second string

def interweavingStrings(one, two, three):
    if len(three) != len(one) + len(two):
        return False
    cache = [[None for j in range(len(two) + 1)] for i in range(len(one) + 1)]
    return areInterwoven(one, two, three, 0, 0, cache)

def areInterwoven(one, two, three, i, j, cache):
    if cache[i][j] is not None:
    	return cache[i][j]

    k = i + j
    if k == len(three):
    	return True

    if i < len(one) and one[i] == three[k]:
    	cache[i][j] = areInterwoven(one, two, three, i + 1, j, cache)
    	if cache[i][j]:
    		return True

    if j < len(two) and two[j] == three[k]:
    	cache[i][j] = areInterwoven(one, two, three, i, j + 1, cache)
    	return cache[i][j]

    cache[i][j] = False
    return False
