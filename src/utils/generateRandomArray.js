export default function generateArray() {
    const data = [];
    for (let i = 0; i < 20; i += 1) {
        data.push(Math.floor(Math.random() * 100) + 1);
    }
    return data;
}