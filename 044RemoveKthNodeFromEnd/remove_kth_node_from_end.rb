class LinkedList
  attr_accessor :value, :head

  def initialize(value)
    @value = value
    @next = nil
  end
end

# O(n) time / O(1) space

def remove_kth_node_from_end(head, k)
  counter = 1
  first = head
  second = head

  while counter <= k
    second = second.next
    counter += 1
  end

  if second is nil
    head.value = head.next.value
    head.next = head.next.next
    return
  end

  while second.next != nil
    second = second.next
    first = first.next
  end

  first.next = first.next.next
end
