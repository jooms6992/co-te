# https://leetcode.com/problems/valid-parentheses/
s = '{(([]))[]}'

def isValid(s):
    stack = []
    for p in s:
        if p == '(':
            stack.append(')')
        elif p == '{':
            stack.append('}')
        elif p == '[':
            stack.append(']')
        elif not stack or stack.pop() != p:
            return False
    return not stack

print(isValid(s))