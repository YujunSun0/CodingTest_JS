const input =require("fs").readFileSync("/dev/stdin").toString().split("\n");
const num = Number(input[0])


const main = () => {
    const q = input[1].split(" ").map(e => Number(e))
    let [store, stack] = [0, []]
    for (let i = 0; i < q.length; ++i) {
        // store를 변경할 수 있는가?
        while ((stack.length && stack[stack.length - 1] === store + 1) || q[i] === store + 1) 
        {
            if (stack[stack.length - 1] === store + 1) 
            {
                store = stack.pop()
            } 
            else 
            {
                store = q[i]
                break
            }
        }
        // 변경할 수 없다면, 스택에 현재 값을 푸시하고 다음 루프로
        if (store !== q[i]) stack.push(q[i])
    }
    while ((stack.length && stack[stack.length - 1] === store + 1)) 
    {
        if (stack[stack.length - 1] === store + 1) 
        {
            store = stack.pop()
        }
    }
    return stack.length ? 'Sad' : 'Nice'
}

console.log(main())