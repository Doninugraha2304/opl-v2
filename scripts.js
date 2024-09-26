window.onload = function() {
    showContent('homeContent'); // Default to show the home content first
};

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var burgerCheckbox = document.getElementById('burger');
    var wrapper = document.getElementById('wrapper');
    if (burgerCheckbox.checked) {
        sidebar.classList.add('active');
        wrapper.classList.add('sidebar-active');
    } else {
        sidebar.classList.remove('active');
        wrapper.classList.remove('sidebar-active');
    }
}

function showContent(contentId) {
    // Hide all content sections
    var sections = document.querySelectorAll('.content section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected content
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

function searchFunction() {
    var input = document.getElementById('searchInput').value;
    alert("Searching for: " + input);
}

function switchLanguage(language) {
    if (language === 'en') {
        alert('Language switched to English');
        // Add logic to switch the content language to English
    } else if (language === 'id') {
        alert('Bahasa diubah ke Bahasa Indonesia');
        // Add logic to switch the content language to Bahasa Indonesia
    }
}

function toggleDropdown() {
    var dropdown = document.getElementById('languageDropdown');
    dropdown.classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.language-switch i')) {
        var dropdowns = document.getElementsByClassName("language-dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var editButton = document.getElementById('editButton');
    var editableElements = document.querySelectorAll('.editable');

    editButton.addEventListener('click', function() {
        var isActive = editButton.classList.toggle('active');
        editableElements.forEach(function(element) {
            element.contentEditable = isActive;
        });
    });
});


let contentLoaded = 9; // Jumlah konten yang sudah dimuat

function loadMoreContent() {
    const cardContainer = document.getElementById('cardContainer');
    let newContent = '';

    for (let i = 0; i < 3; i++) { // Misalnya, menambahkan 3 kartu baru setiap kali tombol diklik
        contentLoaded++;
        newContent += `
            <div class="card">
                <div class="card-image">
                    <img src="modul2.jpg" alt="Advanced Programming Image">
                </div>
                <div class="card-header">Modul ${contentLoaded}: Pemrograman Lanjut</div>
                <div class="card-body">
                    <h5 class="card-title">Topik: Struktur Data dan Algoritma</h5>
                    <p class="card-text">Pelajari tentang struktur data seperti array, linked list, dan algoritma dasar seperti sorting dan searching.</p>
                    <a href="#" class="btn btn-primary">Lihat Modul</a>
                </div>
            </div>
        `;
    }

    cardContainer.insertAdjacentHTML('beforeend', newContent);

    // Optional: Sembunyikan tombol "Load More" jika sudah tidak ada konten tambahan
    // if (contentLoaded >= totalAvailableContent) {
    //     document.getElementById('loadMoreBtn').style.display = 'none';
    // }
}

// JavaScript for handling card pagination

let currentPage = 1;
const cardsPerPage = 9;
const totalCards = 30; // Assume there are 30 cards, adjust as necessary

function renderCards() {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    const start = (currentPage - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    for (let i = start; i < end && i < totalCards; i++) {
        const card = `
            <div class="card">
                <div class="card-image">
                    <img src="modul${i % 3 + 1}.jpg" alt="Programming Image ${i + 1}">
                </div>
                <div class="card-header">Modul ${i + 1}: Pengantar Pemrograman</div>
                <div class="card-body">
                    <h5 class="card-title">Topik: Dasar-dasar Pemrograman</h5>
                    <p class="card-text">Pelajari konsep dasar pemrograman, termasuk variabel, tipe data, dan struktur kontrol.</p>
                    <a href="#" class="btn btn-primary">Lihat Modul</a>
                </div>
            </div>
        `;
        cardContainer.innerHTML += card;
    }

    // Enable/disable buttons
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = end >= totalCards;
}

function nextPage() {
    currentPage++;
    renderCards();
}

function prevPage() {
    currentPage--;
    renderCards();
}

// Initial render
renderCards();

document.addEventListener('click', function(event) {
    var dropdown = document.getElementById('coursesDropdown');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    if (event.target === dropdown) {
        dropdownMenu.classList.toggle('show');
    } else if (!dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});


function navigateLearning(direction) {
    const learningContent = document.getElementById('learningContent');
    const learningContentPage2 = document.getElementById('learningContentPage2');
    const agreementContent = document.getElementById('agreementContent');

    if (direction === 'next') {
        if (learningContent.style.display === 'block') {
            learningContent.style.display = 'none';
            learningContentPage2.style.display = 'block';
        } else if (learningContentPage2.style.display === 'block') {
            learningContentPage2.style.display = 'none';
            agreementContent.style.display = 'block';
        }
    } else if (direction === 'prev') {
        if (learningContentPage2.style.display === 'block') {
            learningContentPage2.style.display = 'none';
            learningContent.style.display = 'block';
        } else if (agreementContent.style.display === 'block') {
            agreementContent.style.display = 'none';
            learningContentPage2.style.display = 'block';
        }
    }
}

function toggleAccordion(element) {
    const body = element.nextElementSibling;
    if (body.style.display === 'block') {
        body.style.display = 'none';
    } else {
        body.style.display = 'block';
    }
}





