let money = 10000;
const buyCar = (car) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can buy" + car);
            }
            else {
                reject("do not enough money");
            }
        }, 100);
    }));
};
money = 1000001;
const promise = buyCar("Vinfast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
});
//# sourceMappingURL=main.js.map