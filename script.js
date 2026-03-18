// string data tpe
let name="Fatima Ijaz";
// bool data type
let isfollow = false;
// number data type
let age= 20;
//array data type
let technologies=["html","css","java"];

// object data type
let mypetinfo={
    petname: "leo",
    color: "brown",
    petage: "fouryears"
}




let coursetitle="web";
let courseyear="spring 2026";
let technologiesuse= ["html","css","javascriptt"];
let iscourseCompleted= true;
let studentInfo={
    name: "fatima",
    section: "d",
    course: "web"
};


document.getElementById("coursetitle").innerHTML ="course title  :"+ coursetitle;
document.getElementById("studentInfo").innerHTML ="student Info : "+ studentInfo.name;
document.getElementById("tech").innerHTML ="technologies used in the course :"+ technologiesuse.join(" ,")
document.getElementById("iscourseCompleted").innerHTML ="project syatus:"+ iscourseCompleted;

const showProjectSummary = () => {

let summary =
"My Course is : " + coursetitle + "<br>" +
"My course status is: " + iscourseCompleted + "<br>" +
"Technologies use in my course are: " +technologiesuse.join(", ") + "<br>" +
"My info : " + studentInfo.name;

document.getElementById("summary").innerHTML = summary;

}
document.getElementById("showSummaryBtn").addEventListener("click", showProjectSummary);