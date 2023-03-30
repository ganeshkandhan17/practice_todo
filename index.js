function addlist(){
let form = document.getElementById('todo-form');
form.addEventListener('submit', function(offdefault) {
offdefault.preventDefault();
});
    let nlist=document.createElement("li");
    let list=document.getElementById("list");
    let content=document.getElementById("in").value;
    if(content==""){
        alert("Value unga appan vanthu pooduvaana?????");
    }
    else{
    nlist.innerHTML=content;
    list.appendChild(nlist);
    }
}

function dellsttag(){
    try{ let del=document.querySelector("ol li:last-child");
    del.remove();}
    catch(error){
        alert("anga onnume ielada koomutta!!!");
    }
}

const mediaQuery = window.matchMedia("(max-width: 600px)");

function handleScreenSizeChange(mediaQuery) {
  if (mediaQuery.matches) {
    document.body.style.backgroundSize = "stretch";
}
}

handleScreenSizeChange(mediaQuery);

mediaQuery.addListener(handleScreenSizeChange);