function solution(id_list, report, k) {
    const answer = new Array(id_list.length).fill(0);
    let reportRecord = new Map();
    let count = new Array(id_list.length).fill(0);
    for(let i=0; i<id_list.length; i++){
        reportRecord.set(id_list[i], new Set());
    }
    report.forEach(el => {
        let [reportUser, reportedUser] = el.split(" ")
    	if(!reportRecord.get(reportUser).has(reportedUser)){
        count[id_list.findIndex(el => el === reportedUser)]++;
        }
        reportRecord.get(reportUser).add(reportedUser);
    })
    let reportedArr = id_list.filter((id,idx) => count[idx] >= k);
    
    for (const [key, value] of reportRecord) {
 	 reportedArr.forEach(id => {
     let idx = id_list.indexOf(key)
     if(value.has(id)){
      answer[idx] === undefined ? answer[idx] = 1 : answer[idx]++;   
       }
 	 })
	}
    return answer;
}