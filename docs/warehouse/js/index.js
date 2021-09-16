const arr = [
    ['A', 'B', 100],
    ['A', 'C', 200],
    ['A', 'D', 300],
    ['B', 'E', 400],
    ['C', 'F', 300],
    ['D', 'E', 150],
]

function min(arr) {
    // 获取结束->起始重合的组合
    let group = []
    group = arr.map(e => {
        const [ss, ee, dd] = e;
        const next = arr.find(([start, end, dis]) => ee === start);
        if(next){
            const [, end, dis] = next;
            return [ss, end, dd + dis, `${ss}->${ee}->${end}`]
        }
        return e;
    });
    console.log(group);
}

min(arr)