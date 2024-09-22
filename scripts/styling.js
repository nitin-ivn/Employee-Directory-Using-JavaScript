document.addEventListener("DOMContentLoaded", function() {  
    const buttons = document.querySelectorAll(".sub-btn");  

    buttons.forEach(button => {  
        button.addEventListener("click", function(event) {  
            event.preventDefault();  
            const targetId = this.getAttribute("data-target");  // Get the target ID  
            const subMenu = document.getElementById(targetId);  // Select the sub-menu by ID  
            subMenu.style.display = subMenu.style.display === "none" ? "block" : "none";  
        });  
    });  
}); 