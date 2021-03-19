// This is an input class.
class OrgChart {
  constructor(name) {
    this.name = name;
    this.directReports = [];
  }
}

// Solution
// O(n) time / O(d) space
// n - number of nodes(reports)
// d - depth of the organizational chart

const getLowestCommonManager = (topManager, reportOne, reportTwo) => {
  return getOrgInfo(topManager, reportOne, reportTwo).lowestCommonManager;
};

const getOrgInfo = (manager, reportOne, reportTwo) => {
  let numImportantReports = 0;
  for (directReport of manager.directReports) {
    const orgInfo = getOrgInfo(directReport, reportOne, reportTwo);
    if (orgInfo.lowestCommonManager !== null) {
      return orgInfo;
    }
    numImportantReports += orgInfo.numImportantReports;
  }
  if (manager === reportOne || manager === reportTwo) {
    numImportantReports++;
  }
  const lowestCommonManager = numImportantReports === 2 ? manager : null;
  return { lowestCommonManager, numImportantReports };
};
