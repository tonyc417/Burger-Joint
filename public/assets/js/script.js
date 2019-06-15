$("#submitBurger").on("click", (event) => {
    event.preventDefault();
    
    var newBurger = {
        name: $("#burgerInput").val()
    };

    $.ajax("")
})