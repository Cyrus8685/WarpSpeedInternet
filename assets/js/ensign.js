function changePage() {
    window.location.assign("http://assets/html/planspage.html");
};

    function changePage2() {
        var Ensign = "Ensign Plan $39.99 500/500 Mbps";
        localStorage.setItem('Ensign', Ensign.value);
        window.location.assign("http://assets/html/cart.html");
    };

    