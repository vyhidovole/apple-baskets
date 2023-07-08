
let d=document.getElementsByClassName('d')
for(i of d){
    i.setAttribute('draggable','true')
    i.ondragstart = start
}

let fordrop=document.getElementsByClassName('fordrop')
for(i of fordrop){
i.ondragenter=f1
i.ondragleave =f2
i.ondragover =f3
i.ondrop =f4
}
let kyadrat
function start(){
    let id=this.id
    console.log(id)
    kyadrat=document.getElementById(id)
}


function f1(){
    console.log('enter')
}

function f2(){
    console.log('leave')
}

function f3(event){
    console.log('over')
    event.preventDefault()

}

function f4(){
    console.log('DROP')
    this.appendChild(kyadrat)//прописать внутрь
    if(kyadrat.classList.contains('apple')){
        console.log('a')
    }
    if(kyadrat.classList.contains('pear')){
        console.log('p')
    }

    const a=fordrop[0].getElementsByClassName('apple')
    const p = fordrop[1].getElementsByClassName('pear')
    console.log(a.length,p.length)
    if(a.length==3&&p.length==1){
        alert('Молодец')
    }


   


    
   
}