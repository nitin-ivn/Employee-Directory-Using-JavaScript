document.addEventListener("DOMContentLoaded", function() {  
    const buttons = document.querySelectorAll(".sub-btn");  

    buttons.forEach(button => {  
        button.addEventListener("click", function(event) {  
            event.preventDefault();
            // document.querySelector('.item-hover').classList.remove('item-hover');  
            const targetId = this.getAttribute("data-target");
            const subMenu = document.getElementById(targetId); 
            if(subMenu.style.display === "none"){
                subMenu.style.display = "block";
                document.querySelector('.item-hover').classList.remove('item-hover');
            }else{
                subMenu.style.display = "none";
                document.querySelector('.item').classList.add('item-hover');
            }
            // subMenu.style.display = subMenu.style.display === 
            //"none" ? "block" : "none";  
        });  
    });  
}); 