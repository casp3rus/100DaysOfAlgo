// Solution
// O(nlog(n)) time / O(n) space
// n - number of tasks

const taskAssignment = (k, tasks) => {
  const pairedTasks = [];
  const taskDurationsToIndices = getTasksDurationsToIndices(tasks);

  const sortedTasks = tasks.sort((a, b) => a - b);

  for (idx = 0; idx < k; idx++) {
    const task1Duration = sortedTasks[idx];
    const indicesWithTask1Duration = taskDurationsToIndices[task1Duration];
    const task1Index = indicesWithTask1Duration.pop();

    const task2SortedIndex = tasks.length - 1 - idx;
    const task2Duration = sortedTasks[task2SortedIndex];
    const indicesWithTask2Duration = taskDurationsToIndices[task2Duration];
    const task2Index = indicesWithTask2Duration.pop();

    pairedTasks.push([task1Index, task2Index]);
  }
  return pairedTasks;
};

const getTasksDurationsToIndices = (tasks) => {
  const taskDurationToIndices = {};

  for (let idx = 0; idx < tasks.length; idx++) {
    const taskDuration = tasks[idx];

    if (taskDurationToIndices[taskDuration]) {
      taskDurationToIndices[taskDuration].push(idx);
    } else {
      taskDurationToIndices[taskDuration] = [idx];
    }
  }
  return taskDurationToIndices;
};
