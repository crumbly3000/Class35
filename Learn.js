/*
FIREBASE: Database which you can store your information
Benefit: Reading, writing, Updating and Overwriting

Read: ref()
      on("value",function(elijah))--read from the database 
      val();

Write: ref();
        update();
        update the database, old data will not deleted

Write: ref();
        set();
        delete the old data, and then write the new data

ref() 
on("value", function(data))
val()
set()
update();

*/

var database;
function setup(){
    createCanvas(400,400);
    //step 1
    database = firebase.database();
    readDB();
    writeDB()


}

function draw(){

}

function readDB(){
var dbRef = database.ref();
dbRef.on("value", function(data){
    var detail = data.val();
    console.log(detail)
});
}

function writeDB(){
    var dbRef = database.ref();

    dbRef.update({
        'DOB':'08.02.2006',
        'Hobby':'Coding'
    });

    /*dbRef.set({
        'Teacher':'Chandni'
    });*/


}