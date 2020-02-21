import React, { useState } from 'react';
import './SortingVisualizer.css';
import sort from '../SortingAlgorithms/BubbleSort';
import generateArray from '../utils/generateRandomArray';

function SortingVisualizer() {
    const [dataset, setData] = useState(generateArray());

    async function handleSort() {
        for await (let frame of sort(dataset)) {
            const [barOneIndex, barTwoIndex, swappable] = frame;
            if (swappable) {
                const temp = dataset[barOneIndex];
                dataset[barOneIndex] = dataset[barTwoIndex];
                dataset[barTwoIndex] = temp;
            }
            setData([...dataset]);
        }
    }

    function randomizeArray() {
        setData(generateArray());
    }

    return (
        <div className={'container'}>
            <div className={'controls'}>
                <button onClick={randomizeArray}>Randomize Array</button>
                <button onClick={handleSort}>Sort</button>
            </div>
            <div id="bars" className={'visual'}>
                {
                    dataset.map((num, index) => <div key={index}
                        style={{ height: `${num * 5}px` }}
                        className={'bar'}></div>)
                }
            </div>
        </div>
    )
}

export default SortingVisualizer;