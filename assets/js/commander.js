async function changePage() {
    window.location.assign("/assets/html/Planspage.html");};

    async function changePage2() {
        var Commander = "Commander Plan $99.99 2000/2000 Mbps";
        localStorage.setItem('Commander', Commander.value);
        window.location.assign("/assets/html/Cart.html");};