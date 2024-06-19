// 测试 1: 测试 Promise 的基本功能
const promise1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("成功！");
    }, 1000);
});

promise1.then((value) => {
    console.log(value); // 应该在 1 秒后打印 "成功！"
});

// 测试 2: 测试 Promise 的 reject 功能
const promise2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject("失败！");
    }, 1000);
});

promise2.then(
    (value) => {
        console.log(value);
    },
    (error) => {
        console.error(error); // 应该在 1 秒后打印 "失败！"
    }
);

// 测试 3: 测试链式调用
const promise3 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

promise3
    .then((value) => {
        console.log(value); // 应该在 1 秒后打印 1
        return value + 1;
    })
    .then((value) => {
        console.log(value); // 应该打印 2
        return value + 1;
    })
    .then((value) => {
        console.log(value); // 应该打印 3
    });

// 测试 4: 测试 catch 功能
const promise4 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject("错误！");
    }, 1000);
});

promise4.then((value) => {
    console.log(value);
}).then((value) => {
    console.log(value);
}).then((value) => {
    console.log(value);
}).then(null, (error) => {
    console.error("捕获到错误：", error); // 应该在 1 秒后打印 "捕获到错误： 错误！"
});

// 测试 5: 测试立即 resolve 的 Promise
const promise5 = new MyPromise((resolve, reject) => {
    resolve("立即成功！");
});

promise5.then((value) => {
    console.log(value); // 应该立即打印 "立即成功！"
});

// 测试 6: 测试立即 reject 的 Promise
const promise6 = new MyPromise((resolve, reject) => {
    reject("立即失败！");
});

promise6.then(
    (value) => {
        console.log(value);
    },
    (error) => {
        console.error(error); // 应该立即打印 "立即失败！"
    }
);
