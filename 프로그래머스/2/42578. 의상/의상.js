function solution(clothes) {
    const map = new Map();

    for(let i=0; i<clothes.length; i++){
        const [cloth, clothType] = clothes[i]
        const list = map.get(clothType) ?? new Array();

        list.push(cloth);
        map.set(clothType, list);
    }

    let answer = 1;
    
    for(let key of map.keys()){
        answer *= map.get(key).length + 1;
    }
    
    return answer - 1;
}