
const a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('a');
        }, 3000);
    })
}

const b = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('b');
        }, 2000);
    })
}

const c = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('c');
        }, 1000);
    })
}


const [aa, bb, cc] = Promise.all([a, b, c])