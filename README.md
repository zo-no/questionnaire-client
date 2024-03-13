# 项目

这是仿问卷星的c端项目
> 项目链接：
> - mock：GitHub - zo-no/questionnaire-mock: 访问卷星项目的mock程序
> - 主程序（B端）：GitHub - zo-no/questionnaire-system: 模仿问卷星的项目
> - c端：GitHub - zo-no/questionnaire-client: 仿问卷星的客户C端项目，使用nextjs

## 项目启动

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## 文件结构

```c
//src是工作目录
src
├── components -- 组件库
│   ├── QuestionComponents -- 问卷组件(思路和B端一样)
│   └── PageWrapper -- 问卷页面的包装器
├── pages -- 页面 （文件路由）
|   ├── api -- 编写api
|   ├── question -- 问卷页
|   ├── fail -- 失败页
|   ├── success -- 成功页 
|   └── index -- 首页
├── services -- 前端请求
└── styles -- 样式库
```