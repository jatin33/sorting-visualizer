import sort from '../SortingAlgorithms/BubbleSort';
import generateArray from '../utils/generateRandomArray';

test('should sort array correctly', () => {
    const randomArray = generateArray();
    expect(sort(randomArray)).toEqual(randomArray.sort((a, b) => a - b));
});
