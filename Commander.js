function changePage() {
    window.location.replace("planspage.html")};

    function changePage2() {
        var Commander = "Commander";
        localStorage.setItem('Commander', Commander.value);
        window.location.replace("Cart.html");
    };