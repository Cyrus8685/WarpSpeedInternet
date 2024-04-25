function changePage() {
    window.location.assign("/warpspeedinternet/html/plansPage.html");
};

    function changePage2() {
        var Ensign = "Ensign Plan $39.99 500/500 Mbps";
        var planchoice = "Ensign Plan $39.99 500/500 Mbps";
        localStorage.setItem('Ensign', Ensign);
        localStorage.setItem('Planchoice', planchoice);
        window.location.assign("/warpspeedinternet/assets/html/cart.html");
    };

    
