# 发布流程
# 注意：本流程将直接发布至github-pages

# 提前填写commit信息
read -p "请输入commit文本：" msg

# 打包流程
yarn build
cd docs/.vuepress/dist

# 提交流程
git init
git add -A
git commit -m $msg

# 推送流程

git push -f git@github.com:webbj97/fe-questions.git master:gh-pages

cd -