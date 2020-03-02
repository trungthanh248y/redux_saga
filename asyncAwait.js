//let a = await aPromise // awaitnó sẽ dừng async function lại và nó sẽ chờ aPromise trả về kết quả và gán lại cho a rồi ms thực hiện các cv tiếp theo
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
// let add = async () => {
//     let res = await addPr(4, 5);
//     console.log(res);
// };

// add();

//await liên tiếp

// let tinhDienTich = async (a, b, h, cb) => {// chú ý khi sử dụng cái này cần sd try catch để bắt lỗi, nó sẽ tránh th bị thiếu lỗi
//     try {
//         let ab = await add(a, b);
//         let abh = await multiply(ab, h);
//         let squere = await divide(abh, 2);
//         cb(undefined, squere);
//     } catch (e) {
//         cb(e);
//     }
// };
// tinhDienTich(4, 5, 6, (err, result) => {
//     if(err) return console.log(err + '');
//     console.log(result);
// });


let tinhDienTich = async (a, b, h) => {// chú ý khi sử dụng cái này cần sd try catch để bắt lỗi, nó sẽ tránh th bị thiếu lỗi
    try {
        let ab = await add(a, b);
        let abh = await multiply(ab, h);
        let squere = await divide(abh, 2);
        return Promise.resolve(squere);
    } catch (e) {
        return Promise.reject(e);
    }
};
tinhDienTich(4, 5, 6)
.then(res => console.log(res))
.catch(err => console.log(err + ''));