function* bubbleSort(array) {
    const localCopy = [...array];
    for (let i = 0; i < localCopy.length; i += 1) {
        for (let j = 0; j < localCopy.length - i - 1; j += 1) {
            if (localCopy[j] > localCopy[j + 1]) {
                const temp = localCopy[j];
                localCopy[j] = localCopy[j + 1];
                localCopy[j + 1] = temp;
                yield new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve([j, j + 1, true]);
                    }, 100);
                });
            } else {
                yield new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve([j, j + 1, false]);
                    }, 100);
                });
            }
        }
    }
}

export default bubbleSort;