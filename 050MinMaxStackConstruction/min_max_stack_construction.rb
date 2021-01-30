class MinMaxStack

    def initialize()
        @min_max_stack = []
        @stack = []
    end
 
    # O(1) time / O(1) space
    def peek()
        if @stack.length == 0
           return "The stack is empty, nothing to peek at!" 
        end
        return @stack[- 1]
    end

    # O(1) time / O(1) space
    def pop()
        if @stack.length == 0
           return "The stack is empty, nothing to pop!" 
        end
        @min_max_stack.pop()
        return @stack.pop()
    end

    # O(1) time / O(1) space
    def push(number)
        new_min_max = {"min"=> number, "max"=> number}
        if @min_max_stack.length == 0
            new_min_max["min"] = number
            new_min_max["max"] = number
        else
            last_min_max = @min_max_stack[-1]
            new_min_max["min"] = [last_min_max["min"], number].min
            new_min_max["max"] = [last_min_max["max"], number].max
        end
        @min_max_stack << new_min_max
        @stack << number
    end

    # O(1) time / O(1) space
    def get_min()
        return @min_max_stack[-1]["min"]
    end

    # O(1) time / O(1) space
    def get_max()
        
        return @min_max_stack[-1]["max"]
    end
end