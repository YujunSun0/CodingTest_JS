function solution(survey, choices) {
    const typeObj = {};
    const pTypes = ["RT","CF","JM","AN"];

    pTypes.forEach((type) =>
        type.split('').forEach((el) => typeObj[el] = 0)
    )

    choices.forEach((choice, idx) => {
        const [disagree, agree] = survey[idx];
        typeObj[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
    });
    
    return pTypes.map(([a, b]) => typeObj[b] > typeObj[a] ? b : a).join("");
}