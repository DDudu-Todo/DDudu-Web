# 💻Remote 설정

한번만 하면 됨!

### ✔️ fork & clone

### ✔️ 원격 저장소 remote 설정

- clone한 저장소에 원격 저장소(PR 보낼 저장소) 설정
- 추후에 fork해 온 저장소를 최신 커밋으로 유지하기 위해서 진행
- 원격 저장소 이름을 upstream으로 설정
- `git remote add 원격저장소명 원격저장소주소`
```
$ git remote add upstream https://github.com/DDudu-Todo/DDudu-Web.git
```

### ✔️ 설정 확인

- `git remote -v` 명령어로 확인
```
$ git remote -v
> origin    https://github.com/kkkwp/DDudu-Web.git (fetch)
> origin    https://github.com/kkkwp/DDudu-Web.git (push)
> upstream  https://github.com/DDudu-Todo/DDudu-Web.git (fetch)
> upstream  https://github.com/DDudu-Todo/DDudu-Web.git (push)
```
