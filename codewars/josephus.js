// https://www.codewars.com/kata/5550d638a99ddb113e0000a2 5kyu

const josephus = (items, k) => {
    const arr = [];

    let arrItems = [];

    let count = 1;

    const filterIndex = (item, index) => {
        return arrItems.indexOf(index) === -1
    }

    while(items.length !== 0) {

        for (let i = 0; i < items.length; i++) {
            if (count === k) {
                arr.push(items[i]);
                arrItems.push(i)
                count = 1
            } else {
                count++
            }
        }
        items = items.filter(filterIndex);
        arrItems = [];
    }

    return arr;
}

console.log(ff(["C","o","d","e","W","a","r","s"],4))

