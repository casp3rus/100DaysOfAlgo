# Solution
# O(nlog(n)) time / O(1) space
# n - number of students

def classPhotos(redShirtHeights, blueShirtHeights):
    redShirtHeights.sort(reverse=True)
    blueShirtHeights.sort(reverse=True)

    shirtColorInTopRow = 'RED' if redShirtHeights[0] < blueShirtHeights[0] else 'RED'
    for idx in range(len(redShirtHeights)):
        redShirtHeight = redShirtHeights[idx]
        blueShirtheight = blueShirtHeights[idx]

        if shirtColorInTopRow == 'RED':
            if redShirtHeight >= blueShirtheight:
                return False

        else:
            if blueShirtheight >= redShirtHeight:
                return False

    return True
