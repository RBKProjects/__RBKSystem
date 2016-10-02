// var Sequelize = require('sequelize');
// var mysql = require('mysql');


// //============================================================
// /*					database connection 					*/
// //============================================================
// var sequelize = new Sequelize('neeeeeeeeeeeeeeeeee', 'root', 'root', {
//   host: 'localhost',
//   dialect: 'mysql',
//   port :3306,
//   pool: {
//     max: 50,
//     min: 0,
//     idle: 30
//   }

// });

// // var connection;

// // function handleDisconnect() {
// //   connection = mysql.createConnection(sequelize); // Recreate the connection, since
// //                                                   // the old one cannot be reused.

// //   connection.connect(function(err) {              // The server is either down
// //     if(err) {                                     // or restarting (takes a while sometimes).
// //       console.log('error when connecting to db:', err);
// //       setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
// //     }                                     // to avoid a hot loop, and to allow our node script to
// //   });                                     // process asynchronous requests in the meantime.
// //                                           // If you're also serving http, display a 503 error.
// //   connection.on('error', function(err) {
// //     console.log('db error', err);
// //     if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
// //       handleDisconnect();                         // lost due to either server restart, or a
// //     } else {                                      // connnection idle timeout (the wait_timeout
// //       throw err;                                  // server variable configures this)
// //     }
// //   });
// // }

// // handleDisconnect();
// //===================================================================================================






// //=============================================================
// /*					 agreementqustions table					 */
// //=============================================================
// var agreementqustions = sequelize.define('agreementqustions',{
// 	id :  {
// 	    type: Sequelize.INTEGER,
// 	    primaryKey: true,
// 	    autoIncrement: true 
//   	},
//   	arabicQ : Sequelize.STRING, 
//   	englishQ : Sequelize.STRING
// });


// //=============================================================
// /*					 agreementanswer table					 */
// //=============================================================
// var agreementanswer = sequelize.define('agreementanswer',{
// 	id :  {
// 	    type: Sequelize.INTEGER,
// 	    primaryKey: true,
// 	    autoIncrement: true 
//   	},     
	
// 	answer : Sequelize.STRING
// });


// //=============================================================
// /*					 candidateinfo table					 */
// //=============================================================
// var candidateinfo = sequelize.define('candidateinfo',{
// 	id : {
// 	    type: Sequelize.INTEGER,
// 	    primaryKey: true,
// 	    autoIncrement: true // Automatically gets converted to SERIAL for postgres
//   	},     
// 	name : Sequelize.STRING,
// 	email : Sequelize.STRING, 
// 	password : Sequelize.STRING, 
// 	phone : Sequelize.STRING, 
// 	gender : Sequelize.STRING, 
// 	dateOfBirth : Sequelize.DATE,      
// 	nattionalaty : Sequelize.STRING, 
// 	residence : Sequelize.STRING, 
// 	destance : Sequelize.STRING, 
// 	camp_Location : Sequelize.STRING, 
// 	videoLink : Sequelize.STRING, 
// 	states : Sequelize.STRING
// });

// //=============================================================
// /*					 candidatetest table					 */
// //=============================================================
// var candidatetest = sequelize.define('candidatetest',{
// 	id :  {
// 	    type: Sequelize.INTEGER,
// 	    primaryKey: true,
// 	    autoIncrement: true // Automatically gets converted to SERIAL for postgres
//   	},     
	
// 	personality : Sequelize.STRING,
// 	mindSet	: Sequelize.STRING,
// 	analitical : Sequelize.STRING,
// });

// // 
// candidateinfo.hasMany (candidatetest, {foreignKeyContraint : true });
// candidatetest.belongsTo (candidateinfo, {foreignKeyContraint : true });

// //
// candidateinfo.hasMany (agreementanswer, {foreignKeyContraint : true });
// agreementanswer.belongsTo (candidateinfo, {foreignKeyContraint : true });

// //
// agreementqustions.hasMany (agreementanswer, {foreignKeyContraint : true });
// agreementanswer.belongsTo (agreementqustions, {foreignKeyContraint : true });

// //to create the table
// //sequelize.sync({force: true})
// sequelize.sync()
// .success(function() {
//   candidateinfo.create({
//     username: 'sdepold',
//     email: "new Date(1986, 06, 28)"
//   }).success(function(sdepold) {
//     console.log(sdepold.values)
//   })
// })
// .error(function(err) {console.log('Error:', err)});



// var tables = {
// 	candidateinfo : candidateinfo,
// 	candidatetest : candidatetest,
// 	agreementqustions : agreementqustions,
// 	agreementanswer : agreementanswer 
// }

// module.exports = tables 