function solution(today, terms, privacies) {
    const answer = [];
    const termsMap = new Map();
    terms.forEach(el => {
        const [type, month] = el.split(" ");
        termsMap.set(type, Number(month));
    })
    
    let todayDate = new Date(today);
    todayDate.setDate(todayDate.getDate() + 1);
    
    privacies.forEach((el, idx) => {
        let [date, type] = el.split(" ");
        date = new Date(date);
        date.setMonth(date.getMonth() + termsMap.get(type));
        // date가 todayDate보다 이전이면 파기 대상
        console.log(date, todayDate);
        if (date.getTime() < todayDate.getTime()) {
            answer.push(idx + 1);
        }
    });
    return answer;
}
