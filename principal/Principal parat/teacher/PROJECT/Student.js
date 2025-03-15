// script.js
function submitSearch() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const rows = document.querySelectorAll("#studentTable tbody tr");
  
    rows.forEach(row => {
      const name = row.cells[0].textContent.toLowerCase();
      if (name.includes(filter)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }
  