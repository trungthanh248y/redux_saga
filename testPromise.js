let aPromise = new Promise((resolve, reject) => {
    console.log('Hello');//function này dc khởi động và thực thi, thâm chí nó còn chạy trước cả câu lên new được thực hiện và trả ra một đối tượng promise
});
//Promise hay có thể dịch ra đơn giản là lời hứa, và một lời hứa sẽ có 2 trạng thái resolve hoàn thành và reject không thế hoàn thành vì ký do nào đó.
//Quay lại với ví dụ tính S hình thang. 
//Với hàm add mình hứa sẽ cộng 2 số lại và trả về kết quả, tuy nhiên trong lúc thực hiện mình nhận ra số a và b bạn nhập vào không đúng, mình k thể hoàn thành
//cho bạn và trả về reject(), con nếu tất cả đều đúng thì mình sẽ trả về kết quả resolve() cho bạn. 
//Với trường hợp bạn gọi đồng thời cả resolve() và reject() thì chỉ câu lệnh đầu tiên dc thực hiện

//Định nghĩa một hàm promise
let bPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Success');
        reject(new Error('Not Defail'));
    }, 2000);
});

// Gọi hàm promise ở trên, dùng hàm .then() và nó cũng có 2 đối số là 2 function: tham số đầu tiên là thực thi khi thành công, tham số thứ 2 là trả về khi thất bại
bPromise.then((msg) => console.log('Da thuc thi: ' + msg),//Và chú ý các bạn k thể chuyền vào 2 gtri, nếu muốn truyền 2, n gtri thì cần lén vào một onject
(errMsg) => console.log(errMsg + ''));


//Tái sd 1 promise
let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a != "number"||typeof b != "number") {
                return reject(new Error('Tham so phai la kiem number'));
            }
            resolve(a + b);
        }, 2000);
    });
};

add(4, 5).then(res => console.log(res), rej => console.log(rej + ''));

