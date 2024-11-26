document.getElementById("header-placeholder").innerHTML = `<head>
    <link rel="stylesheet" href="header.css">
</head>

<header class="header">
    <div class="container d-flex justify-content-between align-items-center p-3">
        <!-- Logo -->
        <a href="index.html" class="navbar-brand">
            <img src="images/Logo.png" alt="Logo Image" class="logo">
        </a>

        <!-- Navigation Menu -->
        <nav>
            <ul class="nav">
                <li class="nav-item">
                    <a href="index.html" class="nav-link">Home<i class="fas fa-chevron-down"></i></a>
                    <div class="dropdown-menu">
                        <a href="index.html#services" class="dropdown-link">Our Services</a>
                        <a href="index.html#latest-news" class="dropdown-link">Latest News</a>
                        <a href="index.html#articles" class="dropdown-link">Articles</a>
                        <a href="index.html#contact" class="dropdown-link">Contact with Us</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="services.html" class="nav-link">Services<i class="fas fa-chevron-down"></i></a>
                    <div class="dropdown-menu">
                        <a href="plastic-surgery.html" class="dropdown-link">Plastic Surgery</a>
                        <a href="dentistry.html" class="dropdown-link">Dentistry</a>
                        <a href="clinics.html" class="dropdown-link">Clinics</a>
                        <a href="consultation.html" class="dropdown-link">Consultation</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Find a doctor<i class="fas fa-chevron-down"></i></a>
                    <div class="dropdown-menu">
                        <a href="plastic-surgeons.html" class="dropdown-link">Plastic Surgeons</a>
                        <a href="dentists.html" class="dropdown-link">Dentists</a>
                    </div>
                </li>
                <li class="nav-item"><a href="clinics.html" class="nav-link">Clinics</a></li>
                <li class="nav-item"><a href="about.html" class="nav-link">About Us</a></li>
                <li class="nav-item"><a href="partner.html" class="nav-link">Become a partner</a></li>
            </ul>
        </nav>
    </div>
</header>`;
