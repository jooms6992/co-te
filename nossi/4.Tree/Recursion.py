# 자신을 정의할 때 자기 자신을 재참조하는 함수를 뜻합니다.
def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n-1)

def fibo(n):
    if n == 1 or 2:
        return 1
    return fibo(n-1) + fibo(n-2)

