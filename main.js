
//שאלה 52
// function printDateAntTime(){
//     var datetime= new Date();
//     console.log(datetime);
// }
// printDateAntTime()


//שאלה 53
// function getDateString(date1){
    
//     var date2= new Date(date1);
//     console.log(date2);
// }
// getDateString("06 23 1991")

//שאלה 54

// function getDateString(date1){
//     var date2=new Date(date1);
//     console.log(date2);

// }
// getDateString("08 09 1951")

//שאלה 55

// function  getDateRturnMounth(date1){
//     var date2= new Date(date1);
//     var mon=date2.getMonth();
//     console.log(mon+1);

// }
// getDateRturnMounth("11 05 1985")

// function getDateRturnHours(date1){
//     var date2=new Date(date1);
//     var hou=date2.getHours();
//     console.log(hou);
// }
// getDateRturnHours("12 12 1995 07:23:23")

// function getDateRturnyear(date1){
//     var date2= new Date(date1);
//     var newyear=date2.getFullYear();
//     console.log(newyear);
// }
// getDateRturnyear("12 12 1995")

// function getDateRturnMinutes(date1){
//     var date2=new Date(date1);
//     var newmin= date2.getMinutes();
//     console.log(newmin);
// }
// getDateRturnMinutes("12 12 1965 07:23:50")

// function getDateRturnThecloser(date1,date2){
//     var date3= new Date(date1);
//     var date4= new Date(date2);
//     if(date3>date4){
//         console.log(date4);
        
//     }
//     else{
//         console.log(date3);
//     }


// }
// getDateRturnThecloser("05 05 1997","01 01 1998")

// function randomDate(){
//     var day =Math.floor(Math.random()*(31-1)+1);
//     var mun =Math.floor(Math.random()*12);
//     var year =Math.floor(Math.random(9998-999)+1);
//     var randomdate1=new Date(mun+day+year)
//     console.log(randomdate1);
// }
// randomDate()

// function returnAge(){
//     var datefromuser=prompt("");
//     var useryear=new Date(datefromuser).getFullYear();
//     var nowmyear=new Date().getFullYear();
//     console.log(nowmyear-useryear);
// }
// returnAge()

// function returnAge(){
//     var userdate=prompt("");
//     var age=new Date().getFullYear()-new Date(userdate).getFullYear();
//     console.log(age);
//     if(age>18){
//         console.log("alert");
//     }
//     else{
//         console.log("not alert");
//     }
// }
// returnAge()

function returPlice(){
    var userdata=prompt("");
    var plice=new Date(userdata);
    console.log(plice.getUTCDate());
}
returPlice()







