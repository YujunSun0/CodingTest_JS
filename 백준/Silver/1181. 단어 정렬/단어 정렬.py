try:
    n = int(input())
    words = []
    for i in range(n):
        new = input()
        if new not in words:
            words.append(new)
    
    words.sort()  # 알파벳 순으로 정렬
    
    # 길이가 1부터 50까지인 단어들을 출력
    for i in range(1, 51):
        for word in words:
            if len(word) == i:
                print(word)
except EOFError:
    pass  # EOF 에러 발생시 프로그램 종료