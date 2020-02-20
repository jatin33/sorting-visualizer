import React, { useState } from 'react';
import './SortingVisualizer.css';
import sort from '../SortingAlgorithms/BubbleSort';
import generateArray from '../utils/generateRandomArray';

function SortingVisualizer() {
    const [dataset, setData] = useState(generateArray());

    async function handleSort() {
        const bars = [...document.getElementById('bars').childNodes];
        for await (let frame of sort(dataset)) {
            const [barOneIndex, barTwoIndex, swappable] = frame;
            if (swappable) {
                const temp = bars[barOneIndex].style.height;
                bars[barOneIndex].style.height = bars[barTwoIndex].style.height;
                bars[barTwoIndex].style.height = temp;
            }
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