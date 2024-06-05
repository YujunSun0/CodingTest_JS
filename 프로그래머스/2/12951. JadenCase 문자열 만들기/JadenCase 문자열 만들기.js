function solution(s) {
    const arr = s.split(" ").map((el) => 
        el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
    );
    return arr.join(" ");
}