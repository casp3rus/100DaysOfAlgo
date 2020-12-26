// Solution 1
// O(n) time / O(1) space

const isValidSubsequence = (array, sequence) => {
    let arrIdx = 0
    let seqIdx = 0
    while ( arrIdx < array.length && seqIdx < sequence.length ) {
        if ( array[arrIdx] === sequence[seqIdx] ) seqIdx++
        arrIdx++
    }
    return seqIdx === sequence.length
}

// Solution 2
// O(n) time / O(1) space

const isValidSubsequence = (array, sequence) => {
    let seqIdx = 0
    for ( const value of array ) {
        if ( seqIdx === sequence.length) break
        if ( sequence[seqIdx] === value ) seqIdx++
    }
    return seqIdx === sequence.length
}