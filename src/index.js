require('dotenv').config()
require("./db/db");

const { fakedata } = require("./datagroups/fakedata")
const app = require('./app')
const Groups  = require("./models/groups");



const preLoader = async () => {

  try{
    
    for (let a of fakedata) {

      let { dni , name, rank, category, verification, plataform, namePlataform, ahorro, mensual, anual, avalible, tag } = a;

      let [groupsRes, created] = await Groups.findOrCreate({
        where: {
          id:dni
        },
        defaults: {
          name, rank, category, verification, plataform, namePlataform, ahorro, mensual, anual, avalible, tag
        }
  
      });
      console.log("groups res",groupsRes)
      console.log("groups res",created)
  
    }

  }catch(errs){
    console.log(errs)
  }

}

const main = async () => {
  preLoader();
  app.listen(app.get('port'))
  console.log('server running on port:', app.get('port'))
}
main()