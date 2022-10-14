# resume

npm install gh-pages --save-dev
echo "# resume" >> README.md
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/shotechs/resume.git
git push -u origin main
npm run predeploy
npm run deploy
gh-pages -d build "-m" "Deploy React app to GitHub Pages"
