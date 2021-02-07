# Solution
# O(nlog(n)) time / O(1) space

def minimum_waiting_time(queries)
  queries.sort!
  total_waiting_time = 0

  (0..queries.length).each do |idx|
    duration = queries[idx]
    queries_left = queries.length - (idx + 1)
    total_waiting_time += duration.to_i * queries_left
  end
  total_waiting_time
end
