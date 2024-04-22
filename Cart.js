const userNameText = document.querySelector("#fullname"); 

function displayName() {
    const nameFromLocalStorage = localStorage.getItem('name');

    if (nameFromLocalStorage) {
        userNameText.textContent = nameFromLocalStorage;
    } else {
        userNameText.textContent = "No name data in local storage";
    }
}

displayName();