export default function generateArray() {
    const data = [];
    for (let i = 0; i < 10; i += 1) {
        data.push(Math.floor(Math.random() * 50) + 1);
    }
    return data;
}