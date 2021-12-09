function printHello() {
    console.log('hello world,nodejs1111111')
}


printHello1 = function (req) {
    console.log('hello world,nodejs222222 '+req)
}

module.exports={
    printHello,
    printHello1,
}

const time="abc";
const time1="def";
console.log(`this is '${time}' and ${time1}`);