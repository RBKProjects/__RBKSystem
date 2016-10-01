var Sequelize = require('sequelize');


//============================================================
/*					database connection 					*/
//============================================================
var sequelize = new Sequelize('neeeeeeeeeeeeeeeeee', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port :3020,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }

});
//=============================================================
/*					 agreementqustions table					 */
//=============================================================
var agreementqustions = sequelize.define('agreementqustions',{
	id :  {
	    type: Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true 
  	},
  	arabicQ : Sequelize.STRING, 
  	englishQ : Sequelize.STRING
});


//=============================================================
/*					 agreementanswer table					 */
//=============================================================
var agreementanswer = sequelize.define('agreementanswer',{
	id :  {
	    type: Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true 
  	},     
	
	answer : Sequelize.STRING
});


//=============================================================
/*					 candidateinfo table					 */
//=============================================================
var candidateinfo = sequelize.define('candidateinfo',{
	id : {
	    type: Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  	},     
	name : Sequelize.STRING,
	email : Sequelize.STRING, 
	password : Sequelize.STRING, 
	phone : Sequelize.STRING, 
	gender : Sequelize.STRING, 
	dateOfBirth : Sequelize.DATE,      
	nattionalaty : Sequelize.STRING, 
	residence : Sequelize.STRING, 
	destance : Sequelize.STRING, 
	camp_Location : Sequelize.STRING, 
	videoLink : Sequelize.STRING, 
	states : Sequelize.STRING
});

//=============================================================
/*					 candidatetest table					 */
//=============================================================
var candidatetest = sequelize.define('candidatetest',{
	id :  {
	    type: Sequelize.INTEGER,
	    primaryKey: true,
	    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  	},     
	
	personality : Sequelize.STRING,
	mindSet	: Sequelize.STRING,
	analitical : Sequelize.STRING,
});

// 
candidateinfo.hasMany (candidatetest, {foreignKeyContraint : true });
candidatetest.belongsTo (candidateinfo, {foreignKeyContraint : true });

//
candidateinfo.hasMany (agreementanswer, {foreignKeyContraint : true });
agreementanswer.belongsTo (candidateinfo, {foreignKeyContraint : true });

//
agreementqustions.hasMany (agreementanswer, {foreignKeyContraint : true });
agreementanswer.belongsTo (agreementqustions, {foreignKeyContraint : true });


sequelize
    .sync ( { force: true } )
    // .complete ( function (err) {
    //     if (!!err) {
    //         console.log ("An error occurred while creating the tbale", err);
    //     } else {
    //         console.log ("table created");
    //     }
    // });

var tables = {
	candidateinfo : candidateinfo,
	candidatetest : candidatetest,
	agreementqustions : agreementqustions,
	agreementanswer : agreementanswer 
}

module.exports = tables 

