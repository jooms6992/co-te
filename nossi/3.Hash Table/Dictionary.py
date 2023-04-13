# 문제풀때 언제 써야하는지
# 어떤 연산이 중요한지

# in 은 O(1) 으로 바로 찾을 수 있다!! 와우! like a random access

score = {
    'math': 97,
    'eng' : 100,
    'kor' : 100
}
print(score['math'])

score['math'] = 88
print(score)
score['sci'] = 200
print(score)

print('music' in score)
print('eng' in score)

if 'music' in score:
    print(score['music'])
else:
    score['music'] = 111

print(score)