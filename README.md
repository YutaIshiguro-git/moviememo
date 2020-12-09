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



# Install #
Runs the app in the development mode.\

 ## 1.Setup Database

 use following commands on the shell to setup database.

  ### 1-1.migration
  yarn knex migrate:latest

  ### 1-2.Seeding
  yarn run knex seed:run

 ## 2.Run application

 use following commds to connect database and run application
 ('yarn standy', then 'yarn start')

  ### 2-1.`yarn standby`

  Runs nodemon to connect to database.\

  ### 2-2.`yarn start`

  Runs React application. 

Runs the app in the development mode.
When 'yarn start' executed, automatically [http://localhost:3000](http://localhost:3000) will be appeared in the browser.
Proxy will point Front-end connection to [http://localhost:9000].


## License ##
License for the code**<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />この 作品 は <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">クリエイティブ・コモンズ 表示 4.0 国際 ライセンス</a>の下に提供されています。
**License for the banner image\*\*<Attribution> banner image<a href='https://www.freepik.com/vectors/banner'>Banner vector created by vectorpouch - www.freepik.com</a>

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

