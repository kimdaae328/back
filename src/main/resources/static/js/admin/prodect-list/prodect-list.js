const menubtn1 =document.getElementById("menubtn1")
const sublist1 =document.getElementById("sublist1")
const menubtn2 =document.getElementById("menubtn2")
const sublist2 =document.getElementById("sublist2")
const menubtn3 =document.getElementById("menubtn3")
const sublist3 =document.getElementById("sublist3")
const menubtn4 =document.getElementById("menubtn4")
const sublist4 =document.getElementById("sublist4")
const submenus=document.querySelectorAll('.boot-link')
const btnfilterstatus=document.getElementById("btn-filter-status")
const allchecked1=document.getElementById("allchecked1")
const allflasechecked1=document.getElementById("allflasechecked1")
const allchecked2=document.getElementById("allchecked2")
const allflasechecked2=document.getElementById("allflasechecked2")
const checkboxactive1=document.getElementById("checkboxactive1")
const checkboxactive2=document.getElementById("checkboxactive2")
const bootpopbtn1=document.getElementById("btn-filter-pm")
const popmenubt1= document.getElementById("pop-menu-bt1")
const popmenubt2= document.getElementById("pop-menu-bt2")
const modalclose=document.getElementById("close")
const body=document.getElementById("body")
const modal=document.getElementById("modal")
const modalopen=document.getElementById("modal-open")

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

usermenubtn.addEventListener("click",(e)=>{
    usermenu.classList.toggle("show");

    
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

modalclose.addEventListener("click",(e)=>{
    body.classList.remove("modal-open");
    modal.classList.remove("show");
    modal.style.display = "none";
});
modalopen.addEventListener("click",(e)=>{
    modal.classList.add("show");
    modal.style.display = "block";
    body.classList.add("modal-open");
    
});
const imgFile = document.getElementById("img-file");
const imgContainer = document.getElementById("image-cell")
imgFile.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", (e) => {
        let text = `
        <div class="pg-logo-wrapper">
        <button type="button" class="delete-btn" style="
        display: flex;
        height: 25px;
        align-items: center;
    ">
            <i class="fas fa-trash"></i>
        </button>
        <img src="${e.target.result}"style="display:flex; margin:0 auto; height:100px" ">
    </div>
                            
       
        `;

        imgContainer.innerHTML += text;
        
    });
    const deletebtn = document.querySelectorAll(".delete-btn")
imgContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".delete-btn");
    if (btn) {
        const wrapper = btn.closest(".pg-logo-wrapper");
        if (wrapper) {
            wrapper.remove();
        }
    }
});
});
