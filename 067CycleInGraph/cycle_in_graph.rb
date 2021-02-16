# Solution 1
# O(v + e) time / O(v) space
# v - number of vertices
# e - number of edges

def cycleInGraph(edges)
  number_of_nodes = edges.length
  visited = Array.new(number_of_nodes, false)
  currently_in_stack = Array.new(number_of_nodes, false)

  (0..number_of_nodes).each { |node|
    if visited[node]
      next
    end

    contains_cycle = is_node_in_cycle(node, edges, visited, currently_in_stack)
    if contains_cycle
      return true
    end
  }
  return false
end

def is_node_in_cycle(node, edges, visited, currently_in_stack)
  visited[node] = true
  currently_in_stack[node] = true

  neighbors = edges[node]
  neighbors.each { |neighbor|
    if !visited[neighbor]
      contains_cycle = is_node_in_cycle(neighbor, edges, visited, currently_in_stack)
      if contains_cycle
        return true
      end
    elsif currently_in_stack[neighbor]
      return true
    end
  }
  currently_in_stack[node] = false
  return false
end

# Solution 2
# O(v + e) time / O(v) space
# v - number of vertices
# e - number of edges

WHITE, GREY, BLACK = 0, 1, 2

def cycleInGraph(edges)
  number_of_nodes = edges.length
  colors = Array.new(number_of_nodes, WHITE)

  (0..number_of_nodes).each { |node|
    if colors[node] != WHITE
      next
    end

    contains_cycle = traverse_and_color_nodes(node, edges, colors)
    if contains_cycle
      return true
    end
  }
  return false
end

def traverse_and_color_nodes(node, edges, colors)
  colors[node] = GREY

  neighbors = edges[node]

  neighbors.each { |neighbor|
    neighbor_color = colors[neighbor]

    if neighbor_color == GREY
      return true
    end

    if neighbor_color == BLACK
      next
    end

    contains_cycle = traverse_and_color_nodes(neighbor, edges, colors)
    if contains_cycle
      return true
    end
  }
  colors[node] = BLACK
  return false
end
