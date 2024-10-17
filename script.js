// №1
const title = 'Top 10 benefits of React framework'
const splitTitle = title.split(' ')
splitTitle[0] = splitTitle[0].toLowerCase()
splitTitle[4] = splitTitle[4].toLowerCase()
console.log(splitTitle.join('-'));



// №2
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
const array = array1.concat(array2)
console.log(array);


let = 0
for (let i = 0; i < array.length; i++) {
    let += array[i]
}
console.log(let);



// №3
const message = 'Welcome to Ukraine!'
const splitMessage = message.split('')
console.log(splitMessage.indexOf('l'));
console.log(splitMessage.join(''));



// №4
const group = ['Mukus','Lasor','Iropur','Kisovol','Arondie']
for (let i = 0; i < group.length; i++) {
    console.log(group[i] + '-' + (i + 1))
}