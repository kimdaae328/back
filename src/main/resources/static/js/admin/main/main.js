const menubtn1 =document.getElementById("menubtn1")
const sublist1 =document.getElementById("sublist1")
const menubtn2 =document.getElementById("menubtn2")
const sublist2 =document.getElementById("sublist2")
const menubtn3 =document.getElementById("menubtn3")
const sublist3 =document.getElementById("sublist3")
const menubtn4 =document.getElementById("menubtn4")
const sublist4 =document.getElementById("sublist4")
const usermenubtn=document.getElementById("usermenubtn")
const usermenu=document.getElementById("usermenu")
const calendarbtn1=document.getElementById("calendarbutton1")
const calendarbtn2=document.getElementById("calendarbutton2")
const calendarbtn3=document.getElementById("calendarbutton3")
const submenus=document.querySelectorAll('.boot-link')
const datebtn=document.querySelectorAll('.datebtn')
const tabnames=document.querySelectorAll('.tab-name')
menubtn1.addEventListener("click", (e) => {
    sublist1.classList.toggle("show");
    event.preventDefault()
});
menubtn2.addEventListener("click", (e) => {
    sublist2.classList.toggle("show");
    event.preventDefault()
});

menubtn3.addEventListener("click", (e) => {
    sublist3.classList.toggle("show");
    event.preventDefault()
});
menubtn4.addEventListener("click", (e) => {
    sublist4.classList.toggle("show");
    event.preventDefault()
});
calendarbtn1.addEventListener("click",(e)=>{
    calendarbtn1.classList.add("active")
    calendarbtn2.classList.remove("active");
    calendarbtn3.classList.remove("active");
})
calendarbtn2.addEventListener("click",(e)=>{
    calendarbtn2.classList.add("active")
    calendarbtn1.classList.remove("active");
    calendarbtn3.classList.remove("active");
})
calendarbtn3.addEventListener("click",(e)=>{
    calendarbtn3.classList.add("active")
    calendarbtn2.classList.remove("active");
    calendarbtn1.classList.remove("active");
})
usermenubtn.addEventListener("click",(e)=>{
    usermenu.classList.toggle("show")

    
})
submenus.forEach(submenu=>{
    submenu.addEventListener('click',(e)=>{
        e.preventDefault();
        submenus.forEach(active=>active.classList.remove('active'));
        submenu.classList.add('active');
        menubtn1.classList.remove('current')
        menubtn2.classList.remove('current')
        menubtn3.classList.remove('current')
        menubtn4.classList.remove('current')
        sublist1.classList.remove('show')
        sublist2.classList.remove('show')
        sublist3.classList.remove('show')
        sublist4.classList.remove('show')
    
        const closestMenuBtn = submenu.closest('.submenu');
        const closeMenu = submenu.closest('.menu-sub-list');
        if (closestMenuBtn) {
                const menuBtn = closestMenuBtn.parentElement.previousElementSibling
                
                if (menuBtn) {
                    closeMenu.classList.add('show')
                    menuBtn.classList.add('current'); // 또는 toggle
                }
        }
    });
})
datebtn.forEach(btn=>{

    btn.addEventListener('click',(e)=>{

        btn.classList.toggle('invalid');
    })
})
tabnames.forEach(tabname=>{
    tabname.addEventListener('click',(e)=>{
        e.preventDefault();
        tabnames.forEach(tab=>tab.classList.remove('active'));
        tabname.classList.add('active');
    });
});