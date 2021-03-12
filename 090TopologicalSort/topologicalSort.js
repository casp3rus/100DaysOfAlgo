// Solution 1
// O (j + d) time / O(j + d) space
// j - number of jobs
// d - number of dependencies

const topologicalSort = (jobs, deps) => {
  const jobGraph = createJobGraph(jobs, deps);
  return getOrderedJobs(jobGraph);
};

const createJobGraph = (jobs, deps) => {
  const graph = new JobGraph(jobs);
  for (const [prereq, job] of deps) {
    graph.addPrereq(job, prereq);
  }
  return graph;
};

const getOrderedJobs = (graph) => {
  const orderedJobs = [];
  const { nodes } = graph;
  while (nodes.length) {
    const node = nodes.pop();
    const containsCycle = depthFirstTraverse(node, orderedJobs);
    if (containsCycle) return [];
  }
  return orderedJobs;
};

const depthFirstTraverse = (node, orderedJobs) => {
  if (node.visited) return false;
  if (node.visiting) return true;
  node.visiting = true;
  for (const prereqNode of node.prereqs) {
    const containsCycle = depthFirstTraverse(prereqNode, orderedJobs);
    if (containsCycle) return true;
  }
  node.visited = true;
  node.visiting = false;
  orderedJobs.push(node.job);
};

class JobGraph {
  constructor(jobs) {
    this.nodes = [];
    this.graph = {};
    for (const job of jobs) {
      this.addNode(job);
    }
  }

  addPrereq(job, prereq) {
    const jobNode = this.getNode(job);
    const prereqNode = this.getNode(prereq);
    jobNode.prereqs.push(prereqNode);
  }

  addNode(job) {
    this.graph[job] = new JobNode(job);
    this.nodes.push(this.graph[job]);
  }

  getNode(job) {
    if (!this.graph.job) this.addNode(job);
    return this.graph[job];
  }
}

class JobNode {
  constructor(job) {
    this.job = job;
    this.prereqs = [];
    this.visited = false;
    this.visiting = false;
  }
}

// Solution 2
// O (j + d) time / O(j + d) space
// j - number of jobs
// d - number of dependencies

const topologicalSort = (jobs, deps) => {
  const jobGraph = createJobGraph(jobs, deps);
  return getOrderedJobs(jobGraph);
};

const createJobGraph = (jobs, deps) => {
  const graph = new JobGraph(jobs);
  for (const [job, dep] of deps) {
    graph.addDep(job, dep);
  }
  return graph;
};

const getOrderedJobs = (graph) => {
  const orderedJobs = [];
  const nodesWithNoPrereqs = graph.nodes.filter((node) => !node.numOfPrereqs);
  while (nodesWithNoPrereqs.length) {
    const node = nodesWithNoPrereqs.pop();
    orderedJobs.push(node.job);
    removeDeps(node, nodesWithNoPrereqs);
  }
  const graphHasEdges = graph.nodes.some((node) => node.numOfPrereqs);
  return graphHasEdges ? [] : orderedJobs;
};

const removeDeps = (node, nodesWithNoPrereqs) => {
  while (node.deps.length) {
    const dep = node.deps.pop();
    dep.numOfPrereqs--;
    if (!dep.numOfPrereqs) nodesWithNoPrereqs.push(dep);
  }
};

class JobGraph {
  constructor(jobs) {
    this.nodes = [];
    this.graph = {};
    for (const job of jobs) {
      this.addNode(job);
    }
  }

  addDep(job, dep) {
    const jobNode = this.getNode(job);
    const depNode = this.getNode(dep);
    jobNode.deps.push(depNode);
    depNode.numOfPrereqs++;
  }

  addNode(job) {
    this.graph[job] = new JobNode(job);
    this.nodes.push(this.graph[job]);
  }

  getNode(job) {
    if (!(job in this.graph)) this.addNode(job);
    return this.graph[job];
  }
}

class JobNode {
  constructor(job) {
    this.job = job;
    this.deps = [];
    this.numOfPrereqs = 0;
  }
}
