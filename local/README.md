# Steps to run project

## Notice: the code server must maintain the same folder structure between the dev machine and offline server

### 1. Add safe repo to git

``` shell
git config --global http.sslVerify false
git config --global user.email "chinchao.huang@ctbcbank.com"
git config --global user.name "黃勁超"
git config --global credential.helper store
git config --global credential.helper cache
git config --global credential.helper 'cache --timeout=600'
git config --global --add safe.directory /app/ctbc-repo/aigo-llm
```

### 2. Run langflow in offline env

#### Note: must be in project root folder

``` shell
# Run frontend
make run_frontend
# Before running backend, make sure you open a new terminal
make backend
```
