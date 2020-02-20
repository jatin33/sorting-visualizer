import React, { useState } from 'react';
import styles from './SortingVisualizer.module.css';
import sort from '../SortingAlgorithms/BubbleSort';
import generateArray from '../utils/generateRandomArray';

const Bar = {
    backgroundColor: 'green', margin: '0.5em', padding: '0.5em'
}

function SortingVisualizer() {
    const [dataset, setData] = useState(generateArray());

    function handleSort() {
        const indexIterator = sort(dataset);
        const bars = [...document.getElementById('bars').childNodes];
        const promises = [];
        while (true) {
            const currentIndex = indexIterator.next();
            if (currentIndex.value === undefined) break;
            promises.push(currentIndex.value);
            if (currentIndex.done) break;
        }
        console.log(promises);
    }
    
    function randomizeArray() {
        setData(generateArray());
    }

    return (
        <div className={styles.container}>
            <div className={styles.controls}>
                <button onClick={randomizeArray}>Randomize Array</button>
                <button onClick={handleSort}>Sort</button>
            </div>
            <div id="bars" className={styles.visual}>
                {
                    dataset.map((num, index) => <div key={index}
                        style={{ height: `${num * 5}px`, ...Bar }}></div>)
                }
            </div>
        </div>
    )
}

export default SortingVisualizer;