function searchStudent() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const table = document.getElementById("studentsTable");
    const rows = table.getElementsByTagName("tr");
    let found = false;

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        const name = cells[0].textContent.toLowerCase();

        if (name.includes(searchInput)) {
            rows[i].style.display = "";
            found = true;
        } else {
            rows[i].style.display = "none";
        }
    }

    document.getElementById("noResults").style.display = found ? "none" : "block";
}
