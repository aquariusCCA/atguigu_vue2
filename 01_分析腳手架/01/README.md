# 筆記

### 腳手架文件結構
├── node_modules 
├── public
│   ├── favicon.ico: 页签图标
│   └── index.html: 主页面
├── src
│   ├── assets: 存放静态资源
│   │   └── logo.png
│   │── component: 存放组件
│   │   └── HelloWorld.vue
│   │── App.vue: 汇总所有组件
│   │── main.js: 入口文件
├── .gitignore: git版本管制忽略的配置
├── babel.config.js: babel的配置文件
├── package.json: 应用包配置文件 
├── README.md: 应用描述文件
├── package-lock.json：包版本控制文件



### 哪些檔案不能隨便改名字
1. public 
2. favicon.ico
3. index.html
4. src
5. main.js


### 初始化腳手架
Step 1: 全局安裝 @vue/cli
	npm install -g @vue/cli

Step 2: 切換到你要創建項目的目錄，然後使用命令創建項目
	vue create xxxx

Step 3: 啟動項目
	npm run serve

Step 4: Please pick a preset -> 選擇你要使用 Vue2 還是 Vue3 的方式寫代碼。
    bable: 將 ES6 轉換為 ES5。
    eslint: 做語法檢查的。



### 指令介紹

1. "serve": "vue-cli-service serve":  啟動項目

2. "build": "vue-cli-service build": 當功能開發完畢之後，最後想把整個工程變成瀏覽器認識的 .html、.css、.js 的東西。

3. "lint": "vue-cli-service lint": 把你寫過的 .js 文件、.vue 文件進行語法檢查，基本上幾乎不用。
