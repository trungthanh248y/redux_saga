console.log('learning generator function');

function* helloGeneratorFunction() {
    yield 2019;
    return 'Redux saga';// Nếu sd return thì coi như hàm đã kết thúc ở đây, done: true và k thể thực hiện các gtri sau. 
    //Hoặc có thể từ khóa throw error => Kết thúc(Thoát khỏi generator)
    yield 2020;
}

const result = helloGeneratorFunction();//interatiors
console.log('result 1', result.next());
console.log('result 2', result.next());
console.log('result 3', result.next());

//Nếu k gán 1 interatiors vào 1 biến thì Mỗi lần gọi nó sẽ tạo ra một interatiors mới lên nó sẽ làm việc riêng biệt

// console.log('result 1', helloGeneratorFunction().next());
// console.log('result 2', helloGeneratorFunction().next()); 



console.log('Vòng lặp vô tận');// Dùng để lắng nghe các actions

function* infiniteLoop() {
    while(true) {
        yield "Tôi đang lắng nghe ....";
    }
}

const iterator = infiniteLoop();
console.log('infiniteLoop 1', iterator.next());
console.log('infiniteLoop 2', iterator.next());//Vì là vòng lặp vô tận lên có gtri done: false, đồng nghĩa vs việc quay trở lại comeback lại infiniteLoop()

console.log('generator function: generator trong generator');//Lồng generator trong generator

function* printName() {
    yield 'redux-saga';
}

function* hello() {
    yield 'Hello';
    yield* printName();//Chạy hàm printName() ở trên
    yield '.Return.';
}

const iterators = hello();
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());