# Solution
# O(d) time / O(1) space
# d - depth of the lower descendant

class AncestralTree
  def initialize(name)
    @name = name
    @ancestor = null
  end
end

def get_youngest_common_ancestor(top_ancestor, descendant_one, descendant_two)
  depth_one = get_descendant_depth(descendant_one, top_ancestor)
  depth_two = get_descendant_depth(descendant_two, top_ancestor)
  if depth_one > depth_two
    return backtrack_ancestral_tree(descendant_one, descendant_two, depth_one - depth_two)
  else
    return backtrack_ancestral_tree(descendant_two, descendant_one, depth_two - depth_one)
  end
end

def get_descendant_depth(descendant, top_ancestor)
  depth = 0
  while descendant != top_ancestor
    depth += 1
    descendant = descendant.ancestor
  end
  return depth
end

def backtrack_ancestral_tree(lower_descendant, higher_descendant, diff)
  while diff > 0
    lower_descendant = lower_descendant.ancestor
    dif -= 1
  end
  while lower_descendant != higher_descendant
    lower_descendant = lower_descendant.ancestor
    higher_descendant = higher_descendant.ancestor
  end
  return lower_descendant
end
