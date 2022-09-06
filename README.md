## 环境说明

```
nodejs版本  v14.19.3
依赖：dayjs, axios
```

## 运行项目

```shell
npm i
npm start
```
## 项目接口

config: 配置公众号key，推送的userID，以及与模板相关的msgConfig。类似于提醒一类的提示暂且在这一文件中配置，后续会进行抽离
getToken: 获取当前用户的token
getWeather: 获取天气，使用高德天气相关的内容
sendMsg: 发起推送接口
app.js: 入口文件

公众号消息推送相关内容详见微信公众号官方开发文档


