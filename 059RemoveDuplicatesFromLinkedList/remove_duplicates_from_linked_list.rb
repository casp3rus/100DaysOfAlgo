# Solution
# O() time / O() space

class LinkedList
  def initialize(value)
    @value = value
    @next = nil
  end
end

def remove_duplicates_from_linked_list(linked_list)
  curent_node = linked_list

  while curent_node != nil
    next_distinctive_node = curent_node.next
    while next_distinctive_node != nil && next_distinctive_node.value == curent_node.value
      next_distinctive_node = next_distinctive_node.next
    end
    curent_node.next = next_distinctive_node
    curent_node = next_distinctive_node
  end
  return linked_list
end
