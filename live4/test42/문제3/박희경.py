import sys

input = sys.stdin.readline

N = int(input())

alphabet = "abcdefghijklmnopqrstuvwxyz"
n = len(alphabet)
premise = []
graph = [[sys.maxsize] * n for _ in range(n)]

for _ in range(N):
    a, b = map(alphabet.index, input().rstrip().split(" is "))
    graph[a][b] = 1

for k in range(n):
    for i in range(n):
        for j in range(n):
            graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

M = int(input())
for _ in range(M):
    a, b = map(alphabet.index, input().rstrip().split(" is "))
    if graph[a][b] == sys.maxsize:
        print("F")
    else:
        print("T")
