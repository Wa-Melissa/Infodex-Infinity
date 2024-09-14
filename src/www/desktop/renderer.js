const DOM = {
    logout_btn: document.getElementById("logout-btn") 
}
Object.freeze(DOM);

DOM.logout_btn.addEventListener("click", async (event) => {
    const result = await Swal.fire({
        title: "Etes vous certain de vouloir quitter la partie ?",
        showCancelButton: true,
        confirmButtonText: "Quitter",
        cancelButtonText: "Annuler",
        icon: "warning",
        confirmButtonColor: "#d33",
    })
    if (result.isConfirmed) fadeOutBody("../login/page.html")
})