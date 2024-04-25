async function changePage() {
    window.location.assign("/warpspeedinternet/html/plansPage.html");};

    async function changePage2() {
        var Commander = "Commander Plan $99.99 2000/2000 Mbps";
        var planchoice = "Commander Plan $99.99 2000/2000 Mbps";
        localStorage.setItem('Commander', Commander);
        localStorage.setItem('Planchoice', planchoice);
        window.location.assign("/warpspeedinternet/assets/html/cart.html");};
