function generateHashtag (str) {
    const arr2 = str.split(' ').filter(e => e !== '');
    const arr3 = arr2.map(e => {
        let strA = e.split('');
        let s = strA.shift().toUpperCase();
        strA.unshift(s);
        return strA.join('');
    })
    arr3.unshift('#');
    return arr3.length === 1 || arr3.join('').split('').length > 140 ? false : arr3.join('');
}



console.log(generateHashtag(""), false)
console.log(generateHashtag(" ".repeat(200)), false)
console.log(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag")
console.log(generateHashtag("Codewars"), "#Codewars")
console.log(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice")
console.log(generateHashtag("Codewars is nice"), "#CodewarsIsNice", )
console.log(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false)
console.log(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138))
console.log(generateHashtag("a".repeat(140)), false)
