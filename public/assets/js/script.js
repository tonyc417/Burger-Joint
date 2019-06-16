$("#submitBurger").on("click", (event) => {
    event.preventDefault();
    console.log("Working");
    var newBurger = {
        name: $("#burgerInput").val()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then( () => {
        console.log("New burger!")
        location.reload();
    })
})