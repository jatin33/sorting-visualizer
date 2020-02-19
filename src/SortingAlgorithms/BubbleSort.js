const bubbleSort = (array) => {
    const localCopy = [...array];
    for (let i = 0; i < localCopy.length; i += 1) {
        for (let j = 0; j < localCopy.length - i - 1; j += 1) {
            if (localCopy[j] > localCopy[j + 1]) {
                const temp = localCopy[j];
                localCopy[j] = localCopy[j + 1];
                localCopy[j + 1] = temp;
            }
        }
    }
    return localCopy;
}

export default bubbleSort;