# Solution
# O(n) time / O(n) space
# n - number of nodes

class Node

    attr_accessor :name, :children

    def initialize(name)
        @name = name
        @children = []
    end

    def add_child(name)
        @children << Node.new(name)
    end

    def breadth_first_search(array)
        queue = [self]
        while !queue.empty?
            current = queue.shift()
            array << current.name
            current.children.each do |child|
                queue << child
            end
        end
        return array
    end
end