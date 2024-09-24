document.addEventListener("DOMContentLoaded", function() {  
    const buttons = document.querySelectorAll(".sub-btn");  

    buttons.forEach(button => {  
        button.addEventListener("click", function(event) {  
            event.preventDefault();  
            const targetId = this.getAttribute("data-target");
            const subMenu = document.getElementById(targetId); 
            subMenu.style.display = subMenu.style.display === "none" ? "block" : "none";  
        });  
    });  
}); 