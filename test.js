//BT
let square = (a, b, h) => (a + b) * h /2;
// console.log('Dien Tich: ' + square(2, 3, 2));

//Định nghĩa ra mot callback, thuong thi cac thu vien da dinh nghia cho chung ta chung ta chi can doc va quan tam den cac tham so chuyen vao
let add = (a, b, CallBack) => {
    setTimeout(() => {
        if(typeof a != 'number' || typeof b != 'number') {
            return CallBack(new Error('Tham so phai co kieu number'), undefined);
        }
        CallBack(undefined, a + b);
    }, 1000);
};
let multiply = (a, b, CallBack) => {
    setTimeout(() => {
        if(typeof a != 'number' || typeof b != 'number') {
            return CallBack(new Error('Tham so phai co kieu number'), undefined);
        }
        CallBack(undefined, a * b);
    }, 1000);
};
let divide = (a, b, CallBack) => {
    setTimeout(() => {
        if(typeof a != 'number' || typeof b != 'number') {
            return CallBack(new Error('Tham so phai co kieu number'), undefined);
        }
        if(b == 0) return CallBack(new Error('Chia cho 0'));
        CallBack(undefined, a / b);
    }, 1000);
};

//Định nghĩa Hàm Tính diện tích hình thang

let dienTichHinhThang = (a, b, h , CallBack) => {
    add(a, b, (err, result) => {
        if(err) return CallBack(err);
        multiply(result, h, (err, result) => {
            if(err) return CallBack(err);
            divide(result, 2, (err, square) => {
                if(err) return CallBack(err);
                CallBack(undefined, square);
            });
        });
    });
};

//Gọi hàm
dienTichHinhThang(2, 3, 2, (err, result) => {
    if(err) return console.log(err + '');
    console.log('Dien tich hinh thang la: ', result);
});
