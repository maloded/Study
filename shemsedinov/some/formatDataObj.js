const projection = meta => {
    const keys = Object.keys(meta);
    return obj => keys.reduce((hash, key) => (
        hash[key] = meta[key]
            .reduce((val, fn, i) => (i ? fn(val) : obj[fn]), null),
            hash), {})
}

const person = [
    {name: 'Marcus', city: 'Rome', born: 121},
    {name: 'Victor', city: 'Rostov', born: 1923},
    {name: 'Ibn', city: 'Murcia', born: 1165},
    {name: 'Mao', city: 'Saoshan', born: 1893},
    {name: 'Rene', city: 'Touraine', born: 1596},
]

const md = {
    name: ['name'],
    place: ['city', s => '<' + s.toUpperCase() + '>'],
    age: ['born', year => (
        new Date().getFullYear() - new Date(year + '').getFullYear()
    )]
}

const p1 = projection(md);
const formatDataObj = person.map(p1);
console.dir(formatDataObj);
