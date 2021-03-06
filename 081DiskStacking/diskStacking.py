# Solution
# O (n^2) time / O(n) space
# n - length of the disks array

def diskStacking(disks):
    disks.sort(key=lambda disk: disk[2])
    heights = [disk[2] for disk in disks]
    sequences = [None for disk in disks]
    maxHeightIdx = 0

    for i in range(1, len(disks)):
        currentDisk = disks[i]

        for j in range(0, i):
            otherDisk = disks[j]
            if areValidDimentions(currentDisk, otherDisk):
                if heights[i] <= currentDisk[2] + heights[j]:
                    heights[i] = currentDisk[2] + heights[j]
                    sequences[i] = j

        if heights[i] >= heights[maxHeightIdx]:
            maxHeightIdx = i

    return buildSequence(disks, sequences, maxHeightIdx)


def areValidDimentions(currentDisk, otherDisk):
    return otherDisk[0] < currentDisk[0] and otherDisk[1] < currentDisk[1] and otherDisk[2] < currentDisk[2]


def buildSequence(disks, sequences, currentIdx):
    sequence = []
    while currentIdx is not None:
        sequence.append(disks[currentIdx])
        currentIdx = sequences[currentIdx]
    return list(reversed(sequence))
