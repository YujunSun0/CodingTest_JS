function solution(priorities, location) {
    const obj = priorities.map((priority, index) => {
        return {index, priority};
    });
    let count = 0;
    
    while(obj.length > 0) {
        const current = obj.shift();
        if(obj.some(item => item.priority > current.priority)) {
            obj.push(current);
        } else {
            count++;
            if(current.index === location) {
                return count;
            }
        }
    }
}