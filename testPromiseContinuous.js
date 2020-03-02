// Định nghĩa hàm
let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a != "number"||typeof b != "number") {
                return reject(new Error('Tham so phai la kiem number phep cong'));
            }
            resolve(a + b);
        }, 1000);
    });
};
let multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a != "number"||typeof b != "number") {
                return reject(new Error('Tham so phai la kiem number phep nhan'));
            }
            resolve(a * b);
        }, 1000);
    });
};
let divide = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a != "number"||typeof b != "number") {
                return reject(new Error('Tham so phai la kiem number phep chia'));
            }
            if(b === 0) return (new Error('Chia cho so 0'));
            resolve(a / b);
        }, 1000);
    });
};

//Định ngĩa hàm tính diện tích
let tinhDienTich = (a, b, h) => {
    return add(a, b)
    .then(res =>multiply(res, h))
    .then(result => divide(result, 2));
};

// Gọi Hàm
// tinhDienTich(6, 4, 5)
// .then(square => console.log('Dien Tich Hinh Thanh = ' + square))
// .catch(err => console.log('Loi '+ err));



// (4 + 5) + 6

// add('4', 5).then(res => add(res, 6), //luôn trả về promise
// err => console.log(err + ''))//Nếu lỗi nó sẽ k dừng lại ở đây mà sẽ tiếp tục thực hiện, vì .then() luôn trả về một promise nên chuỗi promise sẽ k thể dừng lại
// //vì nó là promise lên nó sẽ tiếp thục chạy câu lện .then() tiếp theo
// .then(result => console.log('Ket Qua: ' + result),// Xử lý promise ở câu lệnh res => add(res, 6)
// err => console.log(err + ''));

// add('4', 5).then(res => add(res, 6))
// .then(result => console.log('Ket Qua: ' + result))
// .catch(err => console.log('Loi: '+ err));

// Promise.all([multiply(4, 5), add(4, 5)])//Nếu một trong 2 bĩ lỗi hàm này sẽ chạy vào .catch()
// .then(res => console.log(res))
// .catch(err => console.log(err + ''));

Promise.race([multiply(4, 5), add(4, 5)])//Nếu một trong 2 bĩ lỗi hàm này sẽ vẫn chạy bt
.then(res => console.log(res))
.catch(err => console.log(err + ''));