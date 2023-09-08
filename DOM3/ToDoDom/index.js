const myform=document.querySelector("form");
const inpTak=document.getElementById("task")
const priortiyselect= document.getElementById("priority");
let tbody= document.querySelector("tbody")
let alltask=[];

myform.addEventListener("submit",function(e)
{
    e.preventDefault();
    let Data=
    {
        input: inpTak.value,
        priortiy: priortiyselect.value,
    }
    alltask.push(Data)
tbody.innerHTML=""
alltask.map((ele)=>
{
const tr=document.createElement("tr");
const td1=document.createElement("td");
const td2=document.createElement("td");
td1.innerText=ele.input;
td2.innerText=ele.priortiy;
if(ele.priortiy=="High"){
    td2.style.backgroundColor="red"
}else{
    td2.style.backgroundColor="green"
}

tr.append(td1,td2);
tbody.append(tr);
})
})

