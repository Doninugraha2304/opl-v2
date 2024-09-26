let isDropdownOpen = false;

// Fungsi untuk menyimpan mata kuliah Teknik Informatika ke localStorage
function saveCoursesToLocalStorage() {
    const courses = [
        { 
            courseName: 'Pengantar Teknologi Informasi', 
            courseCode: 'TI101', 
            imgSrc: 'modul1.jpg' 
        },
        { 
            courseName: 'Algoritma dan Struktur Data', 
            courseCode: 'TI102', 
            imgSrc: 'path_to_image/algoritma_dan_struktur_data.jpg' 
        },
        { 
            courseName: 'Basis Data', 
            courseCode: 'TI103', 
            imgSrc: 'path_to_image/basis_data.jpg' 
        },
        { 
            courseName: 'Sistem Operasi', 
            courseCode: 'TI104', 
            imgSrc: 'path_to_image/sistem_operasi.jpg' 
        },
        { 
            courseName: 'Jaringan Komputer', 
            courseCode: 'TI105', 
            imgSrc: 'path_to_image/jaringan_komputer.jpg' 
        },
        { 
            courseName: 'Pemrograman Berorientasi Objek', 
            courseCode: 'TI106', 
            imgSrc: 'path_to_image/pemrograman_berorientasi_objek.jpg' 
        },
        { 
            courseName: 'Pengembangan Aplikasi Web', 
            courseCode: 'TI107', 
            imgSrc: 'path_to_image/pengembangan_aplikasi_web.jpg' 
        },
        { 
            courseName: 'Kecerdasan Buatan', 
            courseCode: 'TI108', 
            imgSrc: 'path_to_image/kecerdasan_buatan.jpg' 
        },
        { 
            courseName: 'Keamanan Informasi', 
            courseCode: 'TI109', 
            imgSrc: 'modul1.jpg' 
        },
        { 
            courseName: 'Rekayasa Perangkat Lunak Yang Berbasi Algoritma Matematika Seni Budaya Salto Ditempat Hiu Sunda', 
            courseCode: 'TI110', 
            imgSrc: 'modul1.jpg' 
        }
    ];

    // Simpan setiap mata kuliah ke localStorage
    courses.forEach(course => {
        localStorage.setItem(course.courseCode, JSON.stringify(course));
    });

    console.log('Mata kuliah Teknik Informatika dengan gambar berhasil disimpan ke localStorage.');
}

// Panggil fungsi ini saat halaman dimuat untuk menyimpan mata kuliah ke localStorage
document.addEventListener("DOMContentLoaded", function() {
    saveCoursesToLocalStorage();
    attachDropdownListeners(); // Attach event listeners after DOM is loaded
});

function toggleCoursesDropdown() {
    const dropdownMenu = document.getElementById("coursesDropdownMenu");
    const coursesDropdown = document.getElementById("coursesDropdown");

    if (isDropdownOpen) {
        dropdownMenu.classList.remove("show");
        coursesDropdown.setAttribute("aria-expanded", "false");
    } else {
        dropdownMenu.classList.add("show");
        coursesDropdown.setAttribute("aria-expanded", "true");
    }
    isDropdownOpen = !isDropdownOpen;
}

function resetDropdown() {
    const dropdownMenu = document.getElementById("coursesDropdownMenu");
    dropdownMenu.innerHTML = `
        <h6 class="dropdown-header">Favorite Courses</h6>
        <a class="dropdown-item" href="#"><img src="modul2.jpg" alt="Course 1">Pengantar Teknologi Informasi yang Sangat Panjang</a>
        <a class="dropdown-item" href="#"><img src="modul1.jpg" alt="Course 2">Course 2</a>
        <a class="dropdown-item" href="#"><img src="modul2.jpg" alt="Course 3">Course 3</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#" id="allCourses"><i class="material-icons">arrow_back</i> All Courses</a>
        <div class="dropdown-divider"></div>
        <div class="dropdown-footer">
            
            
        </div>
    `;

    attachDropdownListeners(); // Re-attach listeners
    keepDropdownOpen();
}

function attachDropdownListeners() {
    document.getElementById("allCourses").addEventListener("click", function(event) {
        event.preventDefault(); 

        const dropdownMenu = document.getElementById("coursesDropdownMenu");
        dropdownMenu.innerHTML = `
            <button class="dropdown-item" id="backButton"><i class="material-icons">arrow_back</i> Back</button>
            <form class="form" style="padding: 10px;">
                <input class="input form-control" id="allCoursesSearchInput" placeholder="Search courses..." type="text" onkeyup="searchAllCourses()">
                <button class="reset btn btn-link" type="reset" style="position: absolute; right: 20px; top: 15px;">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </form>
            <div class="dropdown-scrollable-area" style="max-height: 300px; overflow-y: auto; padding: 10px; margin-top: 10px;">
                <!-- Kursus akan dimasukkan di sini -->
            </div>
            <div class="dropdown-divider"></div>
            <a class="btn-add-course" href="#" data-toggle="modal" data-target="#addCourseModal" style="display: flex; justify-content: center; padding: 10px;">
                <i class="material-icons">add</i>Add Course
            </a>
        `;

        const allCourses = [
            { title: "Pengantar Teknologi", imgSrc: "modul2.jpg" },
            { title: "Algoritma Struktur Data", imgSrc: "modul1.jpg" },
            { title: "Basis Data", imgSrc: "modul2.jpg" },
            { title: "Sistem Operasi", imgSrc: "modul1.jpg" },
            { title: "Jaringan Komputer", imgSrc: "modul2.jpg" },
            // Tambahkan kursus lainnya jika diperlukan
        ];

        const scrollableArea = dropdownMenu.querySelector('.dropdown-scrollable-area');

        allCourses.forEach(course => {
            scrollableArea.innerHTML += `
                <a class="dropdown-item all-course-item" href="#"><img src="${course.imgSrc}" alt="${course.title}" style="margin-right: 10px;">${course.title}</a>
            `;
        });

        keepDropdownOpen();

        document.getElementById('backButton').addEventListener('click', function(event) {
            event.preventDefault();
            resetDropdown();
        });
    });

    document.querySelector('.manage-item').addEventListener('click', function(event) {
        event.preventDefault();

        const dropdownMenu = document.getElementById("coursesDropdownMenu");
        dropdownMenu.innerHTML = `
            <button class="dropdown-item" id="backButton"><i class="material-icons">arrow_back</i> Back</button>
        `;

        dropdownMenu.innerHTML += `
            <div class="dropdown-submenu-card">
                <h6 class="dropdown-header">Customize Page Colors</h6>
                <div class="dropdown-item">
                    <label for="navbarColor">Navbar Color:</label>
                    <input type="color" id="navbarColor" value="#3B5998">
                </div>
                <div class="dropdown-item">
                    <label for="sidebarColor">Sidebar Color:</label>
                    <input type="color" id="sidebarColor" value="#28A745">
                </div>
                <div class="dropdown-item">
                    <label for="buttonColor">Button Color:</label>
                    <input type="color" id="buttonColor" value="#007bff">
                </div>
                <div class="dropdown-item">
                    <label for="textColor">Text Color:</label>
                    <input type="color" id="textColor" value="#000000">
                </div>
                <div class="dropdown-item">
                    <label for="placeholderColor">Placeholder Text Color:</label>
                    <input type="color" id="placeholderColor" value="#999999">
                </div>
                <div class="dropdown-item">
                    <label for="dropdownBgColor">Dropdown Color:</label>
                    <input type="color" id="dropdownBgColor" value="#3B5998">
                </div>
                <div class="dropdown-item">
                    <label for="dropdownTextColor">Dropdown Text Color:</label>
                    <input type="color" id="dropdownTextColor" value="#000000">
                </div>
                <button class="btn btn-primary" onclick="applyColors()">Apply Colors</button>
            </div>
        `;

        keepDropdownOpen();

        document.getElementById('backButton').addEventListener('click', function(event) {
            event.preventDefault();
            resetDropdown();
        });
    });
}

function keepDropdownOpen() {
    const coursesDropdown = document.getElementById("coursesDropdown");
    const dropdownMenu = document.getElementById("coursesDropdownMenu");

    coursesDropdown.classList.add('show');
    dropdownMenu.classList.add('show');
}

function searchAllCourses() {
    const input = document.getElementById('allCoursesSearchInput');
    const filter = input.value.toLowerCase();
    const dropdownMenu = document.getElementById('coursesDropdownMenu');
    const items = dropdownMenu.getElementsByClassName('dropdown-item');

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const textValue = item.textContent || item.innerText;

        if (textValue.toLowerCase().indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
}

function applyColors() {
    const navbarColor = document.getElementById("navbarColor").value;
    const sidebarColor = document.getElementById("sidebarColor").value;
    const buttonColor = document.getElementById("buttonColor").value;
    const textColor = document.getElementById("textColor").value;
    const placeholderColor = document.getElementById("placeholderColor").value;
    const dropdownBgColor = document.getElementById("dropdownBgColor").value;
    const dropdownTextColor = document.getElementById("dropdownTextColor").value;

    document.querySelector('.navbar').style.backgroundColor = navbarColor;
    document.getElementById("sidebar").style.backgroundColor = sidebarColor;
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.style.backgroundColor = buttonColor;
        button.style.borderColor = buttonColor;
    });
    document.querySelectorAll('.card-header').forEach(header => {
        header.style.backgroundColor = buttonColor;
    });
    document.querySelectorAll('.btn-courses').forEach(button => {
        button.style.backgroundColor = buttonColor;
        button.style.borderColor = buttonColor;
    });
    document.querySelectorAll('.content-wrapper').forEach(content => {
        content.style.color = textColor;
    });
    document.querySelectorAll('input::placeholder').forEach(placeholder => {
        placeholder.style.color = placeholderColor;
    });
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.style.backgroundColor = dropdownBgColor;
        menu.style.color = dropdownTextColor;
    });
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.style.color = textColor;
    });
    document.querySelectorAll('.manage-item i').forEach(icon => {
        icon.style.color = buttonColor;
    });
}

function submitCourse() {
    const courseName = document.getElementById('courseName').value.trim();
    const courseCode = document.getElementById('courseCode').value.trim();

    if (courseName && courseCode) {
        // Cek apakah kursus ada di localStorage berdasarkan kode kursus
        const storedCourse = localStorage.getItem(courseCode);

        if (storedCourse) {
            // Parse kursus dari localStorage
            const course = JSON.parse(storedCourse);

            // Pastikan nama kursus yang dimasukkan sama dengan yang ada di localStorage
            if (course.courseName.toLowerCase() === courseName.toLowerCase()) {
                // Jika kursus ada di localStorage dan nama cocok, tambahkan ke dropdown
                addCourseToDropdown(course.courseName, course.courseCode, course.imgSrc);
                // Tampilkan notifikasi bahwa kursus sudah berhasil ditambahkan
                alert('Kursus berhasil ditambahkan ke dropdown.');
            } else {
                alert('Nama kursus tidak sesuai dengan data di localStorage. Harap periksa nama kursus.');
            }
        } else {
            // Jika kursus tidak ada di localStorage, tampilkan peringatan
            alert('Kursus tidak ditemukan di localStorage. Harap periksa kode kursus.');
        }

        // Setelah berhasil menyimpan atau tidak, tutup modal
        $('#addCourseModal').modal('hide');
    } else {
        alert('Harap isi semua bidang sebelum menyimpan kursus.');
    }
}

function addCourseToDropdown(courseName, imgSrc) {
    const scrollableArea = document.querySelector(".dropdown-scrollable-area");
    const newCourseItem = document.createElement("a");
    newCourseItem.className = "dropdown-item";
    newCourseItem.href = "#";

    // Tambahkan gambar jika ada
    if (imgSrc) {
        const imgElement = document.createElement("img");
        imgElement.src = imgSrc;
        imgElement.alt = `${courseName} Image`;
        imgElement.style.marginRight = '10px'; // Berikan jarak antara gambar dan teks
        newCourseItem.appendChild(imgElement);
    }

    // Buat elemen span untuk teks courseName dengan kelas text-ellipsis
    const textElement = document.createElement("span");
    textElement.className = "text-ellipsis";
    textElement.textContent = courseName;

    // Gabungkan elemen textElement ke dalam newCourseItem
    newCourseItem.appendChild(textElement);

    // Tambahkan elemen kursus baru ke dalam scrollable area
    scrollableArea.appendChild(newCourseItem);
}

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
        setLanguage('en');
    } else if (language === 'id') {
        alert('Bahasa diubah ke Bahasa Indonesia');
        setLanguage('id');
    }
}

function setLanguage(language) {
    const elements = document.querySelectorAll("[data-lang]");

    elements.forEach(element => {
        const text = element.getAttribute(`data-lang-${language}`);
        if (text) {
            element.innerHTML = text;
        }
    });
}

function toggleDropdown() {
    var dropdown = document.getElementById('languageDropdown');
    dropdown.classList.toggle('show');
}

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

function toggleProfileDropdown() {
    const profileDropdownMenu = document.getElementById("profileDropdownMenu");
    profileDropdownMenu.classList.toggle("show");
}


// Function to switch the dropdown content to theme color options
function switchToThemeDropdown() {
    const dropdownMenu = document.getElementById("coursesDropdownMenu");

    // Clear current content and display theme options
    dropdownMenu.innerHTML = `
        <h6 class="dropdown-header">Select Theme Color</h6>
        <div class="theme-cards">
            <div class="theme-card" style="background-color: #1a73e8;" onclick="applyThemeColor('#1a73e8', '#ffffff')">
                <p>Blue</p>
            </div>
            <div class="theme-card" style="background-color: #28A745;" onclick="applyThemeColor('#28A745', '#ffffff')">
                <p>Green</p>
            </div>
            <div class="theme-card" style="background-color: #FF6347;" onclick="applyThemeColor('#FF6347', '#ffffff')">
                <p>Tomato</p>
            </div>
            <div class="theme-card" style="background-color: #FFB6C1;" onclick="applyThemeColor('#FFB6C1', '#ffffff')">
                <p>Pink</p>
            </div>
            <div class="theme-card" style="background-color: #000000;" onclick="applyThemeColor('#000000', '#ffffff')">
                <p>Dark</p>
            </div>
            <div class="theme-card" style="background-color: #FFFFFF; color: #000000;" onclick="applyThemeColor('#FFFFFF', '#000000')">
                <p>Light</p>
            </div>
            <div class="theme-card" style="background-color: #FFD700; color: #FF6347;" onclick="applyThemeColor('#FFD700', '#FF6347')">
                <p>Cupcake</p>
            </div>
            <div class="theme-card" style="background-color: #007BFF; color: #FFD700;" onclick="applyThemeColor('#007BFF', '#FFD700')">
                <p>Corporate</p>
            </div>
            <div class="theme-card" style="background-color: #FFDAB9; color: #8B4513;" onclick="applyThemeColor('#FFDAB9', '#8B4513')">
                <p>Retro</p>
            </div>
            <div class="theme-card" style="background-color: #39FF14; color: #000000;" onclick="applyThemeColor('#39FF14', '#000000')">
                <p>Neon Night</p>
            </div>
            <div class="theme-card" style="background-color: #8B4513; color: #FFDAB9;" onclick="applyThemeColor('#8B4513', '#FFDAB9')">
                <p>Casual</p>
            </div>
        </div>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="javascript:void(0)" onclick="resetDropdown()">
            <i class="material-icons">arrow_back</i> Back to Courses
        </a>
    `;
}

// Function to apply the selected theme color to specific elements with primary and secondary colors
function applyThemeColor(primaryColor, secondaryColor) {
    // Change navbar background color
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.backgroundColor = primaryColor;
        navbar.style.color = secondaryColor;
    }

    // Change card header background color
    const cardHeaders = document.querySelectorAll('.card-header');
    cardHeaders.forEach(header => {
        header.style.backgroundColor = primaryColor;
        header.style.color = secondaryColor;
    });

    // Change button background color
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.style.backgroundColor = secondaryColor;
        button.style.borderColor = secondaryColor;
        button.style.color = primaryColor;  // Inverse text and button colors
    });

    // Change other elements such as the footer, sidebar, or any other components
    const footer = document.querySelector('.dropdown-footer');
    if (footer) {
        footer.style.backgroundColor = primaryColor;
        footer.style.color = secondaryColor;
    }

    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.backgroundColor = primaryColor;
        sidebar.style.color = secondaryColor;
    }
}




// Fungsi untuk menampilkan/menyembunyikan dropdown Style Color
function toggleStyleDropdown() {
    const dropdown = document.getElementById("styleDropdown");
    dropdown.classList.toggle("show");
}






// Fungsi untuk mengembalikan dropdown ke mode courses
function resetToCoursesDropdown() {
    const dropdownMenu = document.getElementById("styleDropdown");
    dropdownMenu.innerHTML = `
        <a href="javascript:void(0)" onclick="switchToThemeDropdown()">Change Theme</a>
    `;
}


// Fungsi untuk menampilkan/menyembunyikan dropdown Style Color
function toggleStyleDropdown() {
    const dropdown = document.getElementById("styleDropdown");
    dropdown.classList.toggle("show");
}

// Fungsi untuk membuka panel Custom Color
function openCustomColor() {
    const customColorContainer = document.querySelector(".custom-color-container");
    customColorContainer.style.display = customColorContainer.style.display === "none" ? "block" : "none";
}

// Fungsi untuk beralih ke dropdown pilihan tema warna
function switchToThemeDropdown() {
    const dropdownMenu = document.getElementById("styleDropdown");
    dropdownMenu.innerHTML = `
        <h6 class="dropdown-header">Select Theme Color</h6>
        <div class="theme-cards-container">
            <div class="theme-card" onclick="applyThemeColor('#2C3E50', '#ECF0F1', '#2980B9', '#8E44AD')">
                <p class="theme-name">Retro</p>
                <div class="theme-separator"></div>
                <div class="theme-colors">
                    <span style="background-color: #2C3E50;"></span>
                    <span style="background-color: #ECF0F1;"></span>
                    <span style="background-color: #2980B9;"></span>
                    <span style="background-color: #8E44AD;"></span>
                </div>
            </div>
            <div class="theme-card" onclick="applyThemeColor('#333333', '#E0E0E0', '#FF5722', '#757575')">
                <p class="theme-name">Darks</p>
                <div class="theme-separator"></div>
                <div class="theme-colors">
                    <span style="background-color: #333333;"></span>
                    <span style="background-color: #E0E0E0;"></span>
                    <span style="background-color: #FF5722;"></span>
                    <span style="background-color: #757575;"></span>
                </div>
            </div>
            <div class="theme-card" onclick="applyThemeColor('#16A085', '#FFFFFF', '#F39C12', '#E74C3C')">
                <p class="theme-name">Skena</p>
                <div class="theme-separator"></div>
                <div class="theme-colors">
                    <span style="background-color: #16A085;"></span>
                    <span style="background-color: #FFFFFF;"></span>
                    <span style="background-color: #F39C12;"></span>
                    <span style="background-color: #E74C3C;"></span>
                </div>
            </div>
            <div class="theme-card" onclick="applyThemeColor('#3498DB', '#FFFFFF', '#1ABC9C', '#2ECC71')">
                <p class="theme-name">Winter</p>
                <div class="theme-separator"></div>
                <div class="theme-colors">
                    <span style="background-color: #3498DB;"></span>
                    <span style="background-color: #FFFFFF;"></span>
                    <span style="background-color: #1ABC9C;"></span>
                    <span style="background-color: #2ECC71;"></span>
                </div>
            </div>
            <div class="theme-card" onclick="applyThemeColor('#F7DC6F', '#2C3E50', '#E74C3C', '#27AE60')">
                <p class="theme-name">Sunset</p>
                <div class="theme-separator"></div>
                <div class="theme-colors">
                    <span style="background-color: #F7DC6F;"></span>
                    <span style="background-color: #2C3E50;"></span>
                    <span style="background-color: #E74C3C;"></span>
                    <span style="background-color: #27AE60;"></span>
                </div>
            </div>
            <div class="theme-card" onclick="applyThemeColor('#FF7F50', '#6A0DAD', '#FFC0CB', '#FFD700')">
                <p class="theme-name">Sunset</p>
                <div class="theme-separator"></div>
                <div class="theme-colors">
                    <span style="background-color: #FF7F50;"></span>
                    <span style="background-color: #6A0DAD;"></span>
                    <span style="background-color: #FFC0CB;"></span>
                    <span style="background-color: #FFD700;"></span>
                </div>
            </div>
            <div class="theme-card" onclick="applyThemeColor('#00CED1', '#2E8B57', '#F4A460', '#000080')">
                <p class="theme-name">Ocean</p>
                <div class="theme-separator"></div>
                <div class="theme-colors">
                    <span style="background-color: #00CED1;"></span>
                    <span style="background-color: #2E8B57;"></span>
                    <span style="background-color: #F4A460;"></span>
                    <span style="background-color: #000080;"></span>
                </div>
            </div>
            <div class="theme-card" onclick="applyThemeColor('#556B2F', '#8B4513', '#FFD700', '#778899')">
                <p class="theme-name">Forest</p>
                <div class="theme-separator"></div>
                <div class="theme-colors">
                    <span style="background-color: #556B2F;"></span>
                    <span style="background-color: #8B4513;"></span>
                    <span style="background-color: #FFD700;"></span>
                    <span style="background-color: #778899;"></span>
                </div>
            </div>
            <div class="theme-card" onclick="applyThemeColor('#C08081', '#E6E6FA', '#FFF8DC', '#800020')">
                <p class="theme-name">Vintage Theme</p>
                <div class="theme-separator"></div>
                <div class="theme-colors">
                    <span style="background-color: #C08081;"></span>
                    <span style="background-color: #E6E6FA;"></span>
                    <span style="background-color: #FFF8DC;"></span>
                    <span style="background-color: #800020;"></span>
                </div>
            </div>
            <div class="theme-card" onclick="applyThemeColor('#D2691E', '#A0522D', '#DC143C', '#6B8E23')">
                <p class="theme-name">Autumn</p>
                <div class="theme-separator"></div>
                <div class="theme-colors">
                    <span style="background-color: #D2691E;"></span>
                    <span style="background-color: #A0522D;"></span>
                    <span style="background-color: #DC143C;"></span>
                    <span style="background-color: #6B8E23;"></span>
                </div>
            </div>
        </div>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="javascript:void(0)" onclick="resetToCoursesDropdown()">
            <i class="material-icons">arrow_back</i>Back
        </a>
    `;

    // Style untuk tema warna dengan pembatas dan scroll vertikal tanpa scroll horizontal
    const style = document.createElement('style');
    style.innerHTML = `
        /* Style untuk tema warna dengan pembatas dan scroll vertikal tanpa scroll horizontal */
        .theme-cards-container {
            max-height: 300px; /* Batasi tinggi maksimal */
            overflow-y: auto; /* Aktifkan scroll vertikal */
            overflow-x: hidden; /* Hilangkan scroll horizontal */
            padding: 10px; /* Tambahkan padding untuk estetika */
        }

        .theme-card {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 10px;
            cursor: pointer;
            border-radius: 5px;
            transition: transform 0.3s;
            width: 100%;
            box-sizing: border-box;
            margin-bottom: 10px; /* Tambahkan spasi antar kartu */
        }

        .theme-card:hover {
            transform: scale(1.05); /* Efek zoom ketika mouse hover */
        }

        .theme-name {
            flex: 1;
            font-weight: bold;
            font-size: 14px;
            margin-right: 10px; /* Spasi antara nama tema dan pembatas */
        }

        .theme-separator {
            width: 1px;
            height: 20px;
            background-color: #ccc; /* Warna pembatas */
            margin-right: 20px; /* Spasi antara pembatas dan kumpulan warna */
        }

        .theme-colors {
            display: flex;
            gap: 2px; /* Jarak antar warna */
        }

        .theme-colors span {
            width: 20px;
            height: 20px;
            border-radius: 50%; /* Bentuk lingkaran */
        }

        /* Menambahkan scrollbar yang lebih minimalis */
        .theme-cards-container::-webkit-scrollbar {
            width: 6px; /* Lebar scrollbar */
        }

        .theme-cards-container::-webkit-scrollbar-track {
            background-color: #f0f0f0; /* Warna latar scrollbar */
            border-radius: 10px; /* Bulatkan tepi scrollbar */
        }

        .theme-cards-container::-webkit-scrollbar-thumb {
            background-color: #ccc; /* Warna thumb scrollbar */
            border-radius: 10px; /* Bulatkan tepi thumb */
        }

        .theme-cards-container::-webkit-scrollbar-thumb:hover {
            background-color: #b3b3b3; /* Warna thumb ketika di-hover */
        }

    `;
    document.head.appendChild(style);
}



// Fungsi untuk mengubah warna tema di semua elemen dengan 3-4 warna
function applyThemeColor(navbarColor, textColor, buttonColor, cardColor) {
    // Ubah warna navbar
    const navbar = document.querySelector('.navbar');
    navbar.style.backgroundColor = navbarColor;
    navbar.style.color = textColor;

    // Ubah warna header kartu
    const cardHeaders = document.querySelectorAll('.card-header');
    cardHeaders.forEach(header => {
        header.style.backgroundColor = cardColor;
        header.style.color = textColor;
    });

    // Ubah warna tombol utama di halaman
    const buttons = document.querySelectorAll('.btn-primary, .btn-courses');
    buttons.forEach(button => {
        button.style.backgroundColor = buttonColor;
        button.style.borderColor = buttonColor;
        button.style.color = textColor;
    });

    // Ubah warna sidebar
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.backgroundColor = navbarColor;
    sidebar.style.color = textColor;

    // Ubah warna item dropdown courses
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.style.backgroundColor = navbarColor;
        item.style.color = textColor;
    });

    // Ubah warna dropdown menu secara keseluruhan
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    dropdownMenus.forEach(menu => {
        menu.style.backgroundColor = cardColor;
        menu.style.color = textColor;
    });

    // Ubah warna teks di dalam semua input yang ada di halaman (jika ada)
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.style.backgroundColor = buttonColor;
        input.style.color = textColor;
        input.style.borderColor = buttonColor;
    });
}


// Fungsi untuk mengembalikan dropdown ke mode courses
function resetToCoursesDropdown() {
    const dropdownMenu = document.getElementById("styleDropdown");
    dropdownMenu.innerHTML = `
        <a href="javascript:void(0)" onclick="switchToThemeDropdown()">Change Theme</a>
        <div class="dropdown-divider"></div>
        <button class="btn btn-primary" onclick="openCustomColor()">Custom Color</button>
        <div class="custom-color-container" style="display: none;">
            <h6 class="dropdown-header">Customize Page Colors</h6>
            <div class="dropdown-item">
                <label for="navbarColor">Navbar Color:</label>
                <input type="color" id="navbarColor" value="#3B5998">
            </div>
            <div class="dropdown-item">
                <label for="sidebarColor">Sidebar Color:</label>
                <input type="color" id="sidebarColor" value="#28A745">
            </div>
            <div class="dropdown-item">
                <label for="buttonColor">Button Color:</label>
                <input type="color" id="buttonColor" value="#007bff">
            </div>
            <div class="dropdown-item">
                <label for="cardColor">Card Color:</label>
                <input type="color" id="cardColor" value="#f8f9fa">
            </div>
            <div class="dropdown-item">
                <label for="textColor">Text Color:</label>
                <input type="color" id="textColor" value="#000000">
            </div>
            <button class="btn btn-primary" onclick="applyCustomColors()">Apply Colors</button>
            <button class="btn btn-secondary" onclick="cancelCustomColors()">Cancel</button>
        </div>
    `;
}

// Fungsi untuk menampilkan/menyembunyikan panel Custom Color
function openCustomColor() {
    const customColorContainer = document.querySelector(".custom-color-container");
    customColorContainer.style.display = customColorContainer.style.display === "none" ? "block" : "none";
}

// Fungsi untuk menerapkan warna kustom
function applyCustomColors() {
    const navbarColor = document.getElementById("navbarColor").value;
    const sidebarColor = document.getElementById("sidebarColor").value;
    const buttonColor = document.getElementById("buttonColor").value;
    const cardColor = document.getElementById("cardColor").value;
    const textColor = document.getElementById("textColor").value;

    // Ubah warna navbar
    document.querySelector('.navbar').style.backgroundColor = navbarColor;

    // Ubah warna sidebar
    document.getElementById("sidebar").style.backgroundColor = sidebarColor;

    // Ubah warna tombol
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.style.backgroundColor = buttonColor;
        button.style.borderColor = buttonColor;
        button.style.color = textColor;  // Sesuaikan warna teks tombol
    });

    // Ubah warna kartu
    document.querySelectorAll('.card-header').forEach(header => {
        header.style.backgroundColor = cardColor;
        header.style.color = textColor;  // Sesuaikan warna teks kartu
    });

    // Ubah warna teks di elemen lain
    document.querySelectorAll('.content-wrapper').forEach(content => {
        content.style.color = textColor;
    });
}

// Fungsi untuk menyembunyikan panel Custom Color
function cancelCustomColors() {
    const customColorContainer = document.querySelector(".custom-color-container");
    customColorContainer.style.display = "none";
}
