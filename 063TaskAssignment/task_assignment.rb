# Solution
# O(nlog(n)) time / O(n) space
# n - number of tasks

def task_assignment(k, tasks)
  paired_tasks = []
  task_durations_to_indices = get_task_durations_to_indices(tasks)

  sorted_tasks = tasks.sort

  (0..k - 1).each { |idx|
    task1_duration = sorted_tasks[idx]
    indices_with_task1_duration = task_durations_to_indices[task1_duration]
    task1_index = indices_with_task1_duration.pop

    task2_sorted_index = tasks.length - 1 - idx
    task2_duration = sorted_tasks[task2_sorted_index]
    indices_with_task2_duration = task_durations_to_indices[task2_duration]
    task2_index = indices_with_task2_duration.pop

    paired_tasks << [task1_index, task2_index]
  }
  return paired_tasks
end

def get_task_durations_to_indices(tasks)
  task_duration_to_indices = {}

  (0..tasks.length).each { |idx|
    task_duration = tasks[idx]

    if task_duration_to_indices[task_duration]
      task_duration_to_indices[task_duration] << idx
    else
      task_duration_to_indices[task_duration] = [idx]
    end
  }
  return task_duration_to_indices
end
