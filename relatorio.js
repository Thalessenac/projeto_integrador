 // Função para atualizar o status dos produtos
 function updateProductStatus() {
    const rows = document.querySelectorAll('#productsTable tbody tr');
    const today = new Date();

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const expiryDate = new Date(cells[3].textContent);

        const daysToExpiry = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));

        const statusIndicator = cells[5].querySelector('.status-indicator');
        if (daysToExpiry <= 7) {
            statusIndicator.className = 'status-indicator status-red';
        } else if (daysToExpiry <= 15) {
            statusIndicator.className = 'status-indicator status-yellow';
        } else if (daysToExpiry <= 30) {
            statusIndicator.className = 'status-indicator status-green';
        } else {
            statusIndicator.className = 'status-indicator status-gray'; // Gray for normal
        }
    });
}

// Função para filtrar a tabela
function filterTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('productsTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let rowVisible = false;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j].textContent.toLowerCase().includes(filter)) {
                rowVisible = true;
                break;
            }
        }

        rows[i].style.display = rowVisible ? '' : 'none';
    }
}

// Atualiza o status dos produtos ao carregar a página
window.onload = function() {
    updateProductStatus();
};

// Adiciona o evento de filtragem
document.getElementById('searchInput').addEventListener('input', filterTable);