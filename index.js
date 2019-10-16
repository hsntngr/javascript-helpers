export default function range(start, stop){
    let range = [];
    while (start <= stop){
        range.push(start)
        start++
    }
    return range;
}