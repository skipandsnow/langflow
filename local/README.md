# Steps to run project

## Notice: the code server must maintain the same folder structure between the dev machine and offline server

### 1. Add safe repo to git

``` shell
git config --global http.sslVerify false
git config --global credential.helper store
git config --global credential.helper cache
git config --global user.email "chinchao.huang@ctbcbank.com"
git config --global user.name "z00040866"
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

``` shell
# set npm
npm config set registry=https://ossrepo.ctbcbank.com:8443/repository/npm-public/
npm config set strict-ssl=false
npm config get registry

# set pypi
mkdir ~/.pip
vim ~/.pip/pip.conf
貼上以下指令儲存

[global]
index = https://ossrepo.ctbcbank.com:8443/repository/pypi-public/
index-url = https://ossrepo.ctbcbank.com:8443/repository/pypi-public/simple
trusted-host = ossrepo.ctbcbank.com:8443

# 或者在pip指令中直接指定index (-i)與trusted-host (--trusted-host)

# Maven
# 在settings.xml設定使用Nexus來載入套件，只要在<mirrors>區段中加以下設定
<mirror>
    <id>ctbc-maven</id>
    <name>ctbc-maven</name>
    <url>https://ossrepo.ctbcbank.com:8443/repository/maven-public/</url>
    <mirrorOf>*</mirrorOf>
</mirror>

# Poetry local
poetry source add --priority=primary internal-pypi https://ossrepo.ctbcbank.com:8443/repository/pypi-public/
poetry config certificates.internal-pypi.cert false

# taints
kubectl taint nodes saigota04 namespace=aigo-llm:NoSchedule-
```
