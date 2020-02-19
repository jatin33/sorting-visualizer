import React, { useState } from 'react';
import styles from './SortingVisualizer.module.css';
import bubbleSort from '../SortingAlgorithms/BubbleSort';

const Bar = {
    backgroundColor: 'green', margin: '0.5em', padding: '0.5em'
}
function SortingVisualizer() {
    const [dataset, setData] = useState(generateArray());

    return (
        <div className={styles.container}>
            <div className={styles.controls}>
                <button onClick={() => { setData(generateArray()) }}>Randomize Array</button>
                <button onClick={() => { setData(bubbleSort(dataset)) }}>Sort</button>
            </div>
            <div className={styles.visual}>
                {dataset.map((num, index) => <div key={index} style={{ height: `${num * 5}px`, ...Bar }}></div>)}
            </div>
        </div>
    )
}

function generateArray() {
    const data = [];
    for (let i = 0; i < 10; i += 1) {
        data.push(Math.floor(Math.random() * 50) + 1);
    }
    return data;
}

export default SortingVisualizer;