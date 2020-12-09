<div align="center">
 <img align="center" src="https://user-images.githubusercontent.com/66049678/101590328-8983fd00-3a2d-11eb-9e0b-acd31bd5d9b5.png" width="100" height="100">
</div>
<div align="center">
 <img align="center" src="https://user-images.githubusercontent.com/66049678/101590300-7b35e100-3a2d-11eb-866f-162dc355c53a.png" width="200" >
</div>
<div align="center">
 <img src ="https://user-images.githubusercontent.com/66049678/101590972-be448400-3a2e-11eb-9f5f-9a6854d76625.png" height="20" width="1000">
 </div>


movieMemo is full stack application to save data (memo and YouTube URL) on server.
movieMemo calls data and shows up on the brower.

```
1. Dependencies
2. System formation
3. How to use
4. Install
5. Solution
	5-1. Input/Submit
	5-2. Remove collection
	5-3. List collections
6. License
```
# 1. Dependencies#
Javascript, Knex, express, node, PostgreSQL, axios

# 2. System formation#

<img src="https://user-images.githubusercontent.com/66049678/101591932-c271a100-3a30-11eb-908f-52091f832e1d.png">

# 3.How to use

<div>
<img src="https://user-images.githubusercontent.com/66049678/101593792-e682b180-3a33-11eb-90c9-701ac2dc7fc3.gif">
</div>
Input new collection: Input memo and YouTube URL, then push.
Remove collection: Press remove button of target collection.

# 4. Install #
Runs the app in the development mode.\

 ## 4-1.Setup Database

 use following commands on the shell to setup database.

  ### 4-1-1.migration
  yarn knex migrate:latest

  ### 4-1-2.Seeding
  yarn run knex seed:run

 ## 4-2.Run application

 use following commds to connect database and run application
 ('yarn standy', then 'yarn start')

  ### 4-2-1.`yarn standby`

  Runs nodemon to connect to database.\

  ### 4-2-2.`yarn start`

  Runs React application. 

Runs the app in the development mode.
When 'yarn start' executed, automatically [http://localhost:3000](http://localhost:3000) will be appeared in the browser.
Proxy will point Front-end connection to [http://localhost:9000].

# 5 Solutions

## 5-1. Input/Submit
Input.jsx controlls Input form and memorize button. When memorize button is pressed, POST method runs to insert new memo and URL data into database.

## 5-2. Remove
Remove button has id data which is same as id saved in database as primary key. When Remove key is pressed, DELETE method runs to delete data from database.

## 5-3. List Collections
body.jsx controls the entire view of movie collections. body.jsx passes props to input.jsx and delete.jsx to control reload timing of view.

# 6 License #
License for the code**<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />この 作品 は <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">クリエイティブ・コモンズ 表示 4.0 国際 ライセンス</a>の下に提供されています。
**License for the banner image\*\*<Attribution> banner image<a href='https://www.freepik.com/vectors/banner'>Banner vector created by vectorpouch - www.freepik.com</a>
