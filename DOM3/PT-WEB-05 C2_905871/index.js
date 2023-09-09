let form=document.querySelector("form")
let name=document.getElementById("name")
let docID=document.getElementById("docID")
let Specialization=document.getElementById("dept")
let exp=document.getElementById("exp")
let email=document.getElementById("email")
let mbl=document.getElementById("mbl")
let tbody= document.querySelector("tbody")
let arr=[];


form.addEventListener("submit",function(e){
    e.preventDefault();
     
    tbody.innerHTML=""
    data=
    {
        name:name.value,
        docID:docID.value,
        Specialization:Specialization.value,
        exp:exp.value,
        email:email.value,
        mbl:mbl.value
    }

    arr.push(data)


    arr.map((ele)=>
    {
      const tr=document.createElement("tr")
      const td1=document.createElement("td")
      const td2=document.createElement("td")
      const td3=document.createElement("td")
      const td4=document.createElement("td")
      const td5=document.createElement("td")
      const td6=document.createElement("td")
      const td7=document.createElement("td")
      const td8=document.createElement("td")
      
      td1.innerText=ele.name;
      td2.innerText=ele.docID;
      td3.innerText=ele.Specialization;
      td4.innerText=ele.exp;
      td5.innerText=ele.email;
      td6.innerText=ele.mbl;

      if(td4.innerText>5){
        td7.innerText="Senior"
      }else if(td4.innerText<5 && td4.innerText>2){
        td7.innerText="Junior"
      }else{
        td7.innerText="Fresher"
      }

      td8.innerText="Delete"

      td8.onclick=function(){
       // ar=document.querySelector("td","td")
        td1.innerHTML=[];
        td2.innerHTML=[];
        td3.innerHTML=[];
        td4.innerHTML=[];
        td5.innerHTML=[];
        td6.innerHTML=[];
        td7.innerHTML=[];
        td8.innerHTML=[];
        console.log("My name is Pankaj")
        console.log(arr)
        arr.splice(ele,1)
      }
 
      tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
      tbody.append(tr)
    })
        
    
})

