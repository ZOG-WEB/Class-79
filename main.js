nameofthestudent_array=[];
function submit(){
    var name1=document.getElementById("name of the student_1").value;
    var name2=document.getElementById("name of the student_2").value;
    var name3=document.getElementById("name of the student_3").value;
    var name4=document.getElementById("name of the student_4").value;

    nameofthestudent_array.push(name1);
    nameofthestudent_array.push(name2);
    nameofthestudent_array.push(name3);
    nameofthestudent_array.push(name4);
    console.log(nameofthestudent_array);
document.getElementById("displayname").innerHTML=nameofthestudent_array;
}
function sorting(){
nameofthestudent_array.sort();
document.getElementById("displayname").innerHTML=nameofthestudent_array;
}


