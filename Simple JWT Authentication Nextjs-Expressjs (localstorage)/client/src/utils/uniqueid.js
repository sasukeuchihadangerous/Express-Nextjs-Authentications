let lastId = 0;

export default function unique(prefix='id') {
    lastId++;
    return `${prefix}${lastId}`;
}