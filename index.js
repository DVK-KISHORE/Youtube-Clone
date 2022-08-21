const sidebarEl=document.querySelector('.sidebar')
const menuEl=document.querySelector('#menu')

setInterval(contverify, 0)
function contverify(){
    if(window.innerWidth>750){
        sidebarEl.setAttribute('data-visible',false)
    }
}

menuEl.addEventListener('click', () => {
    const visibility=sidebarEl.getAttribute('data-visible')

    if(visibility==="true"){
        sidebarEl.setAttribute('data-visible',false)  
    }
    else{
        sidebarEl.setAttribute('data-visible',true)
    }
})