function addNewWEField()
{
    console.log("Adding new WE field");
    let newNode= document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("Placeholder", "Enter Here");


    let weOb=document.getElementById("we");
    let weAddButtonOb= document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewEduField()
{
    let newNode= document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('eduField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("Placeholder", "Enter Here")


    let eduOb=document.getElementById("edu")
    let eduAddButtonOb= document.getElementById("eduAddButton");

    eduOb.insertBefore(newNode, eduAddButtonOb)
}

function addNewSoftField()
{
    let newNode= document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('skField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("Placeholder", "Enter Here")


    let softOb=document.getElementById("soft")
    let sofAddButtonOb= document.getElementById("sofAddButton");

    softOb.insertBefore(newNode, sofAddButtonOb)
}

function addNewCertField()
{
    let newNode= document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('certField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("Placeholder", "Enter Here");


    let certOb=document.getElementById("cert");
    let certAddButtonOb= document.getElementById("certAddButton");
    certOb.insertBefore(newNode, certAddButtonOb);
}

function addNewAchiField()
{
    let newNode= document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('achiField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("Placeholder", "Enter Here")


    let achiOb=document.getElementById("achi")
    let achiAddButtonOb= document.getElementById("achiAddButton");

    achiOb.insertBefore(newNode, achiAddButtonOb);

}

function addNewLangField()
{
    let newNode= document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('langField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("Placeholder", "Enter Here")


    let langOb=document.getElementById("lang")
    let langAddButtonOb= document.getElementById("langAddButton");

    langOb.insertBefore(newNode, langAddButtonOb);

}


//Generating cv
function generateCV(){

    //name
    let nameField = document.getElementById("namefield").value;
    let nameT1 = document.getElementById("nameT");
    nameT1.innerHTML = nameField;

    //contact Field
    document.getElementById("contactT").innerHTML = document.getElementById("contactfield").value;

    //linkedin
    let ln= document.getElementById("linkedln").value;
    document.getElementById("lnT").innerHTML=ln;
    document.getElementById("lnT2").innerHTML=ln;

    //github links
    document.getElementById("gitT").innerHTML = document.getElementById("github").value;
    document.getElementById("gitT2").innerHTML = document.getElementById("github").value;


    //email
    document.getElementById("emailT").innerHTML = document.getElementById("email").value;
    

    //Address
    document.getElementById("addressT").innerHTML = document.getElementById("address").value;

    //objective Field
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    //Work Exerience
    let wes= document.getElementsByClassName("weField");
    let str='';
    for (let e of wes){
        str = str + `<li>${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    //Education
    let les= document.getElementsByClassName("eduField");
    let str1='';
    for (let e of les){
        str1 = str1 + `<li>${e.value} </li>`;
    }
    document.getElementById("eduT").innerHTML=str1;

    

    //Training & Certificates
    let cert = document.getElementsByClassName("certField");
    let str2='';
    for (let e of cert){
        str2 = str2 + `<li>${e.value} </li>`;
    }
    document.getElementById("tainT").innerHTML=str2;

     //Achievements
     let achi = document.getElementsByClassName("achiField");
     let str3='';
     for (let e of achi){
         str3 = str3 + `<li>${e.value} </li>`;
     }
     document.getElementById("achiT").innerHTML=str3;

     //Languages
     let lang = document.getElementsByClassName("langField");
     let str4='';
     for (let e of lang){
         str4 = str4 + `<li>${e.value} </li>`;
     }
     document.getElementById("langT").innerHTML=str4;

     //Soft Skills
    let sof= document.getElementsByClassName("skField");
    let str5='';
    for (let e of sof){
        str5 = str5 + `<li>${e.value} </li>`;
    }
    document.getElementById("cdT").innerHTML=str5;

    // Code for setting image
    let file = document.getElementById("photo").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    //set the image to template
    reader.onloadend= function(){
        document.getElementById("imgT").src = reader.result;
    }
   

    // generate cv and print cv  
    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display='block';




    // print cv 
    function printCV(){
        window.print();
    }
 
 









    


}