// SRMCEM Training & Placement Website JavaScript with Fixed Login System

// Mock data from the application data
const mockData = {
  "students": [
    {
      "id": "SRMCEM2021001",
      "name": "Rahul Sharma",
      "email": "rahul.sharma@srmcem.ac.in",
      "password": "student123",
      "course": "B.Tech CSE",
      "year": "4th Year",
      "cgpa": 8.5,
      "phone": "9876543210",
      "placement_status": "Placed",
      "company": "TCS",
      "package": "4.5 LPA",
      "skills": ["Java", "Python", "React", "Node.js"],
      "resume_uploaded": true,
      "applications": [
        {"company": "TCS", "status": "Selected", "package": "4.5 LPA"},
        {"company": "Infosys", "status": "Pending", "package": "4.0 LPA"},
        {"company": "Wipro", "status": "Rejected", "package": "3.8 LPA"}
      ]
    },
    {
      "id": "SRMCEM2021002",
      "name": "Priya Singh",
      "email": "priya.singh@srmcem.ac.in",
      "password": "student456",
      "course": "B.Tech IT",
      "year": "4th Year",
      "cgpa": 9.2,
      "phone": "9876543211",
      "placement_status": "Placed",
      "company": "Amazon",
      "package": "12 LPA",
      "skills": ["Python", "AWS", "Machine Learning", "Data Science"],
      "resume_uploaded": true,
      "applications": [
        {"company": "Amazon", "status": "Selected", "package": "12 LPA"},
        {"company": "Google", "status": "Interview", "package": "18 LPA"},
        {"company": "Microsoft", "status": "Applied", "package": "15 LPA"}
      ]
    },
    {
      "id": "SRMCEM2021003",
      "name": "Amit Kumar",
      "email": "amit.kumar@srmcem.ac.in",
      "password": "student789",
      "course": "B.Tech ECE",
      "year": "4th Year",
      "cgpa": 7.8,
      "phone": "9876543212",
      "placement_status": "Not Placed",
      "company": null,
      "package": null,
      "skills": ["C++", "MATLAB", "Embedded Systems", "IoT"],
      "resume_uploaded": false,
      "applications": [
        {"company": "HCL", "status": "Rejected", "package": "3.5 LPA"},
        {"company": "Tech Mahindra", "status": "Pending", "package": "4.2 LPA"}
      ]
    }
  ],
  "admin": {
    "username": "admin",
    "password": "admin123",
    "email": "admin@srmcem.ac.in",
    "name": "Training & Placement Officer"
  },
  "recruiters": [
    {
      "id": "REC001",
      "company_name": "Tata Consultancy Services",
      "short_name": "TCS",
      "industry": "IT Services",
      "hr_name": "Rajesh Gupta",
      "hr_email": "rajesh.gupta@tcs.com",
      "hr_phone": "9876501234",
      "package_range": "3.5-6.0 LPA",
      "positions": 50,
      "requirements": "B.Tech CSE/IT/ECE, CGPA > 7.0",
      "visit_date": "2024-09-15",
      "status": "Completed",
      "selected_students": 45
    },
    {
      "id": "REC002",
      "company_name": "Infosys Limited",
      "short_name": "Infosys",
      "industry": "IT Services",
      "hr_name": "Sneha Reddy",
      "hr_email": "sneha.reddy@infosys.com",
      "hr_phone": "9876501235",
      "package_range": "4.0-7.0 LPA",
      "positions": 40,
      "requirements": "B.Tech CSE/IT, CGPA > 7.5",
      "visit_date": "2024-09-20",
      "status": "Completed",
      "selected_students": 38
    },
    {
      "id": "REC003",
      "company_name": "Amazon India",
      "short_name": "Amazon",
      "industry": "E-commerce/Tech",
      "hr_name": "Vikram Mehta",
      "hr_email": "vikram.mehta@amazon.com",
      "hr_phone": "9876501236",
      "package_range": "12-25 LPA",
      "positions": 15,
      "requirements": "B.Tech CSE/IT, CGPA > 8.5, Strong DSA skills",
      "visit_date": "2024-10-05",
      "status": "Upcoming",
      "selected_students": 0
    }
  ],
  "analytics": {
    "placement_trends": {
      "2020": {"placed": 650, "total": 800, "percentage": 81.25},
      "2021": {"placed": 720, "total": 850, "percentage": 84.71},
      "2022": {"placed": 780, "total": 900, "percentage": 86.67},
      "2023": {"placed": 944, "total": 1200, "percentage": 78.67},
      "2024": {"placed": 1100, "total": 1400, "percentage": 78.57}
    },
    "course_wise_placement": {
      "CSE": {"placed": 285, "total": 300, "percentage": 95.0},
      "IT": {"placed": 270, "total": 280, "percentage": 96.43},
      "ECE": {"placed": 180, "total": 250, "percentage": 72.0},
      "ME": {"placed": 160, "total": 220, "percentage": 72.73},
      "CE": {"placed": 140, "total": 200, "percentage": 70.0},
      "EE": {"placed": 65, "total": 150, "percentage": 43.33}
    },
    "package_distribution": {
      "0-3 LPA": 245,
      "3-5 LPA": 420,
      "5-8 LPA": 280,
      "8-12 LPA": 120,
      "12+ LPA": 35
    },
    "top_hiring_companies": {
      "TCS": 150,
      "Infosys": 130,
      "Wipro": 95,
      "Accenture": 85,
      "Capgemini": 70,
      "HCL": 65,
      "Tech Mahindra": 60,
      "Cognizant": 55
    }
  },
  "student_resources": {
    "upcoming_drives": [
      {
        "company": "Google India",
        "date": "2024-10-15",
        "package": "18-25 LPA",
        "eligibility": "B.Tech CSE/IT, CGPA > 8.0",
        "deadline": "2024-10-10"
      },
      {
        "company": "Microsoft India",
        "date": "2024-10-20",
        "package": "15-22 LPA",
        "eligibility": "B.Tech CSE/IT/ECE, CGPA > 8.5",
        "deadline": "2024-10-15"
      }
    ],
    "training_schedule": [
      {
        "program": "Data Structures & Algorithms",
        "instructor": "Dr. Rajesh Kumar",
        "date": "2024-09-10",
        "time": "10:00 AM - 12:00 PM",
        "venue": "Lab 1"
      },
      {
        "program": "Aptitude Training",
        "instructor": "Prof. Meera Sharma",
        "date": "2024-09-12",
        "time": "2:00 PM - 4:00 PM",
        "venue": "Seminar Hall"
      }
    ],
    "notices": [
      "Resume submission deadline extended till 15th September",
      "Mock interview sessions starting from 20th September",
      "Industry expert session on AI/ML trends - 25th September"
    ]
  }
};

// Session management
let currentUser = null;
let userType = null;
let currentLoginType = null;

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎓 Initializing SRMCEM Website...');
    
    // Initialize all functions
    initNavigation();
    initLoginSystem();
    initHeroCounters();
    initChart();
    initRecruiterFiltering();
    initForms();
    initScrollAnimations();
    initSmoothScrolling();
    initDashboard();
    
    console.log('✅ Website initialization complete!');
});

// Login System Initialization
function initLoginSystem() {
    // Student login buttons
    const studentLoginBtn = document.getElementById('student-login-btn');
    const heroStudentLogin = document.getElementById('hero-student-login');
    const adminLoginBtn = document.getElementById('admin-login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    
    // Modal close buttons
    const closeLoginModal = document.getElementById('close-login-modal');
    const closeAddRecruiterModal = document.getElementById('close-add-recruiter-modal');
    
    // Add Recruiter button
    const addRecruiterBtn = document.getElementById('add-recruiter-btn');
    
    // Login form
    const loginForm = document.getElementById('login-form');
    const addRecruiterForm = document.getElementById('add-recruiter-form');
    
    // Bind event listeners
    if (studentLoginBtn) {
        studentLoginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openLoginModal('student');
        });
    }
    
    if (heroStudentLogin) {
        heroStudentLogin.addEventListener('click', function(e) {
            e.preventDefault();
            openLoginModal('student');
        });
    }
    
    if (adminLoginBtn) {
        adminLoginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openLoginModal('admin');
        });
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            logout();
        });
    }
    
    if (closeLoginModal) {
        closeLoginModal.addEventListener('click', function(e) {
            e.preventDefault();
            closeLoginModalFn();
        });
    }
    
    if (closeAddRecruiterModal) {
        closeAddRecruiterModal.addEventListener('click', function(e) {
            e.preventDefault();
            closeAddRecruiterModalFn();
        });
    }
    
    if (addRecruiterBtn) {
        addRecruiterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openAddRecruiterModal();
        });
    }
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (addRecruiterForm) {
        addRecruiterForm.addEventListener('submit', handleAddRecruiter);
    }
    
    // Close modals when clicking outside
    document.addEventListener('click', function(e) {
        const loginModal = document.getElementById('login-modal');
        const addRecruiterModal = document.getElementById('add-recruiter-modal');
        
        if (e.target === loginModal && !loginModal.classList.contains('hidden')) {
            closeLoginModalFn();
        }
        
        if (e.target === addRecruiterModal && !addRecruiterModal.classList.contains('hidden')) {
            closeAddRecruiterModalFn();
        }
    });
    
    console.log('🔐 Login system initialized');
}

// Authentication functions
function openLoginModal(type) {
    const modal = document.getElementById('login-modal');
    const title = document.getElementById('login-title');
    const idLabel = document.getElementById('login-id-label');
    const demoCredentials = document.getElementById('demo-credentials');
    
    if (!modal || !title || !idLabel || !demoCredentials) {
        console.error('Login modal elements not found');
        return;
    }
    
    currentLoginType = type;
    
    if (type === 'student') {
        title.textContent = 'Student Login';
        idLabel.textContent = 'Student ID / Email';
        demoCredentials.innerHTML = `
            <strong>Demo Student Credentials:</strong><br>
            <strong>ID:</strong> SRMCEM2021001<br>
            <strong>Password:</strong> student123<br>
            <br>
            <strong>Alternative:</strong><br>
            <strong>Email:</strong> priya.singh@srmcem.ac.in<br>
            <strong>Password:</strong> student456
        `;
    } else {
        title.textContent = 'Admin Login';
        idLabel.textContent = 'Username';
        demoCredentials.innerHTML = `
            <strong>Demo Admin Credentials:</strong><br>
            <strong>Username:</strong> admin<br>
            <strong>Password:</strong> admin123
        `;
    }
    
    // Clear any existing form data
    const loginId = document.getElementById('login-id');
    const loginPassword = document.getElementById('login-password');
    if (loginId) loginId.value = '';
    if (loginPassword) loginPassword.value = '';
    
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    console.log(`📝 ${type} login modal opened`);
}

function closeLoginModalFn() {
    const modal = document.getElementById('login-modal');
    if (!modal) return;
    
    modal.classList.remove('show');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    
    // Clear form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.reset();
    }
    
    currentLoginType = null;
    console.log('Login modal closed');
}

function handleLogin(event) {
    event.preventDefault();
    console.log(' Login attempt started...');
    
    const loginId = document.getElementById('login-id').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const submitBtn = document.getElementById('login-submit');
    
    if (!loginId || !password) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (!currentLoginType) {
        showNotification('Login type not specified', 'error');
        return;
    }
    
    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> Logging in...';
    submitBtn.disabled = true;
    
    // Simulate loading delay
    setTimeout(() => {
        if (currentLoginType === 'student') {
            // Check student credentials
            const student = mockData.students.find(s => 
                (s.id === loginId || s.email === loginId) && s.password === password
            );
            
            if (student) {
                currentUser = student;
                userType = 'student';
                
                showNotification(`Welcome back, ${student.name}!`, 'success');
                closeLoginModalFn();
                updateUIForLoggedInUser();
                showStudentDashboard();
                
                console.log('✅ Student login successful:', student.name);
            } else {
                showNotification('Invalid credentials. Please check the demo credentials above.', 'error');
                console.log('Student login failed');
            }
        } else if (currentLoginType === 'admin') {
            // Check admin credentials
            if (loginId === mockData.admin.username && password === mockData.admin.password) {
                currentUser = mockData.admin;
                userType = 'admin';
                
                showNotification(`Welcome back, ${mockData.admin.name}!`, 'success');
                closeLoginModalFn();
                updateUIForLoggedInUser();
                showAdminDashboard();
                
                console.log('✅ Admin login successful');
            } else {
                showNotification('Invalid admin credentials. Please check the demo credentials above.', 'error');
                console.log('Admin login failed');
            }
        }
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
    }, 1500);
}

function logout() {
    console.log('🚪 Logout initiated...');
    
    currentUser = null;
    userType = null;
    currentLoginType = null;
    
    // Hide dashboards and show public content
    document.getElementById('public-content').classList.remove('hidden');
    document.getElementById('student-dashboard').classList.add('hidden');
    document.getElementById('admin-dashboard').classList.add('hidden');
    document.getElementById('footer').classList.remove('hidden');
    
    // Update navigation
    document.getElementById('nav-auth').classList.remove('hidden');
    document.getElementById('nav-user').classList.add('hidden');
    document.getElementById('public-nav').classList.remove('hidden');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    showNotification('You have been logged out successfully', 'success');
    console.log('✅ Logout successful');
}

function updateUIForLoggedInUser() {
    // Update navigation
    document.getElementById('nav-auth').classList.add('hidden');
    document.getElementById('nav-user').classList.remove('hidden');
    
    const welcomeText = document.getElementById('nav-welcome');
    if (userType === 'student') {
        welcomeText.textContent = `Welcome, ${currentUser.name}`;
    } else {
        welcomeText.textContent = `Welcome, Admin`;
    }
    
    console.log('🔄 UI updated for logged in user');
}

function showStudentDashboard() {
    console.log('📊 Loading student dashboard...');
    
    // Hide public content and footer
    document.getElementById('public-content').classList.add('hidden');
    document.getElementById('footer').classList.add('hidden');
    document.getElementById('public-nav').classList.add('hidden');
    
    // Show student dashboard
    document.getElementById('student-dashboard').classList.remove('hidden');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Populate student dashboard
    populateStudentDashboard();
}

function showAdminDashboard() {
    console.log('📊 Loading admin dashboard...');
    
    // Hide public content and footer
    document.getElementById('public-content').classList.add('hidden');
    document.getElementById('footer').classList.add('hidden');
    document.getElementById('public-nav').classList.add('hidden');
    
    // Show admin dashboard
    document.getElementById('admin-dashboard').classList.remove('hidden');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Populate admin dashboard
    populateAdminDashboard();
}

function populateStudentDashboard() {
    if (!currentUser || userType !== 'student') return;
    
    // Update student name in header
    document.getElementById('student-name').textContent = currentUser.name;
    
    // Populate personal information
    const studentInfo = document.getElementById('student-info');
    studentInfo.innerHTML = `
        <div class="student-info-item">
            <span class="student-info-label">Student ID:</span>
            <span class="student-info-value">${currentUser.id}</span>
        </div>
        <div class="student-info-item">
            <span class="student-info-label">Email:</span>
            <span class="student-info-value">${currentUser.email}</span>
        </div>
        <div class="student-info-item">
            <span class="student-info-label">Course:</span>
            <span class="student-info-value">${currentUser.course}</span>
        </div>
        <div class="student-info-item">
            <span class="student-info-label">Year:</span>
            <span class="student-info-value">${currentUser.year}</span>
        </div>
        <div class="student-info-item">
            <span class="student-info-label">CGPA:</span>
            <span class="student-info-value">${currentUser.cgpa}</span>
        </div>
        <div class="student-info-item">
            <span class="student-info-label">Phone:</span>
            <span class="student-info-value">${currentUser.phone}</span>
        </div>
    `;
    
    // Populate placement status
    const placementStatus = document.getElementById('placement-status');
    const isPlaced = currentUser.placement_status === 'Placed';
    placementStatus.innerHTML = `
        <div class="placement-status ${isPlaced ? 'placed' : 'not-placed'}">
            <div class="placement-status-badge ${isPlaced ? 'placed' : 'not-placed'}">
                ${currentUser.placement_status}
            </div>
            ${isPlaced ? `
                <h4>🎉 Congratulations!</h4>
                <p><strong>Company:</strong> ${currentUser.company}</p>
                <p><strong>Package:</strong> ${currentUser.package}</p>
            ` : `
                <h4>💪 Keep Going!</h4>
                <p>Continue applying to opportunities</p>
                <p>Participate in training programs</p>
            `}
        </div>
    `;
    
    // Populate quick stats
    const studentStats = document.getElementById('student-stats');
    const totalApplications = currentUser.applications.length;
    const selectedApplications = currentUser.applications.filter(app => app.status === 'Selected').length;
    
    studentStats.innerHTML = `
        <div class="student-info-item">
            <span class="student-info-label">Total Applications:</span>
            <span class="student-info-value">${totalApplications}</span>
        </div>
        <div class="student-info-item">
            <span class="student-info-label">Selected:</span>
            <span class="student-info-value">${selectedApplications}</span>
        </div>
        <div class="student-info-item">
            <span class="student-info-label">Skills:</span>
            <span class="student-info-value">${currentUser.skills.length}</span>
        </div>
        <div class="student-info-item">
            <span class="student-info-label">Resume Status:</span>
            <span class="student-info-value">${currentUser.resume_uploaded ? 'Uploaded ✓' : 'Not Uploaded ✗'}</span>
        </div>
    `;
    
    // Populate applications
    const applicationsList = document.getElementById('applications-list');
    if (currentUser.applications.length === 0) {
        applicationsList.innerHTML = '<p>No applications submitted yet. Start applying to available opportunities!</p>';
    } else {
        applicationsList.innerHTML = currentUser.applications.map(app => `
            <div class="application-item">
                <div class="application-header">
                    <span class="application-company">${app.company}</span>
                    <span class="application-package">${app.package}</span>
                </div>
                <div class="application-status status-${app.status.toLowerCase()}">${app.status}</div>
            </div>
        `).join('');
    }
    
    // Populate opportunities
    const opportunitiesList = document.getElementById('opportunities-list');
    opportunitiesList.innerHTML = mockData.student_resources.upcoming_drives.map(drive => `
        <div class="opportunity-item">
            <div class="opportunity-header">
                <span class="opportunity-company">${drive.company}</span>
                <span class="opportunity-package">${drive.package}</span>
            </div>
            <p><strong>Date:</strong> ${formatDate(drive.date)}</p>
            <p><strong>Eligibility:</strong> ${drive.eligibility}</p>
            <p><strong>Deadline:</strong> ${formatDate(drive.deadline)}</p>
            <button class="btn btn--primary btn--sm" onclick="showNotification('Application submitted successfully!', 'success')">Apply Now</button>
        </div>
    `).join('');
    
    // Populate training schedule
    const trainingSchedule = document.getElementById('training-schedule');
    trainingSchedule.innerHTML = mockData.student_resources.training_schedule.map(training => `
        <div class="training-item">
            <div class="training-header">
                <span class="training-program">${training.program}</span>
            </div>
            <p><strong>Instructor:</strong> ${training.instructor}</p>
            <p><strong>Date:</strong> ${formatDate(training.date)}</p>
            <p><strong>Time:</strong> ${training.time}</p>
            <p><strong>Venue:</strong> ${training.venue}</p>
            <button class="btn btn--secondary btn--sm" onclick="showNotification('Enrolled in training program!', 'success')">Enroll</button>
        </div>
    `).join('');
    
    // Populate notices
    const noticesList = document.getElementById('notices-list');
    noticesList.innerHTML = mockData.student_resources.notices.map(notice => `
        <div class="notice-item">📢 ${notice}</div>
    `).join('');
    
    console.log('✅ Student dashboard populated');
}

function populateAdminDashboard() {
    if (!currentUser || userType !== 'admin') return;
    
    // Initialize analytics charts
    setTimeout(() => {
        initAnalyticsCharts();
    }, 100);
    
    // Populate recruiters list
    populateRecruitersList();
    
    // Populate students list
    populateStudentsList();
    
    console.log('✅ Admin dashboard populated');
}

function initAnalyticsCharts() {
    console.log('📈 Initializing analytics charts...');
    
    // Placement Trends Chart
    const trendsCtx = document.getElementById('trendsChart');
    if (trendsCtx) {
        new Chart(trendsCtx, {
            type: 'line',
            data: {
                labels: Object.keys(mockData.analytics.placement_trends),
                datasets: [{
                    label: 'Placement Percentage',
                    data: Object.values(mockData.analytics.placement_trends).map(year => year.percentage),
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Course-wise Placement Chart
    const courseCtx = document.getElementById('courseChart');
    if (courseCtx) {
        const courseData = mockData.analytics.course_wise_placement;
        new Chart(courseCtx, {
            type: 'bar',
            data: {
                labels: Object.keys(courseData),
                datasets: [{
                    label: 'Placement Percentage',
                    data: Object.values(courseData).map(course => course.percentage),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Package Distribution Chart
    const packageCtx = document.getElementById('packageChart');
    if (packageCtx) {
        new Chart(packageCtx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(mockData.analytics.package_distribution),
                datasets: [{
                    data: Object.values(mockData.analytics.package_distribution),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
    
    // Top Companies Chart
    const companiesCtx = document.getElementById('companiesChart');
    if (companiesCtx) {
        new Chart(companiesCtx, {
            type: 'bar',
            data: {
                labels: Object.keys(mockData.analytics.top_hiring_companies),
                datasets: [{
                    label: 'Students Hired',
                    data: Object.values(mockData.analytics.top_hiring_companies),
                    backgroundColor: '#1FB8CD'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
}

function populateRecruitersList() {
    const recruitersList = document.getElementById('recruiters-list');
    if (!recruitersList) return;
    
    recruitersList.innerHTML = mockData.recruiters.map(recruiter => `
        <div class="recruiter-item">
            <div class="recruiter-info">
                <div class="recruiter-name">${recruiter.company_name}</div>
                <div class="recruiter-details">
                    <strong>Industry:</strong> ${recruiter.industry} | 
                    <strong>Package:</strong> ${recruiter.package_range} | 
                    <strong>Status:</strong> ${recruiter.status}
                </div>
                <div class="recruiter-details">
                    <strong>HR:</strong> ${recruiter.hr_name} (${recruiter.hr_email}) | 
                    <strong>Visit Date:</strong> ${formatDate(recruiter.visit_date)}
                </div>
            </div>
            <div class="recruiter-actions">
                <button class="btn btn--outline btn--sm" onclick="showNotification('Editing recruiter info...', 'info')">Edit</button>
                <button class="btn btn--secondary btn--sm" onclick="showNotification('Viewing recruiter details...', 'info')">View Details</button>
            </div>
        </div>
    `).join('');
}

function populateStudentsList() {
    const studentsList = document.getElementById('students-list');
    if (!studentsList) return;
    
    // Get filter values
    const courseFilter = document.getElementById('course-filter');
    const statusFilter = document.getElementById('status-filter');
    const courseValue = courseFilter ? courseFilter.value : '';
    const statusValue = statusFilter ? statusFilter.value : '';
    
    // Filter students
    let filteredStudents = mockData.students;
    
    if (courseValue) {
        filteredStudents = filteredStudents.filter(student => student.course === courseValue);
    }
    
    if (statusValue) {
        filteredStudents = filteredStudents.filter(student => student.placement_status === statusValue);
    }
    
    studentsList.innerHTML = filteredStudents.map(student => `
        <div class="student-item">
            <div class="student-info">
                <div class="student-name">${student.name}</div>
                <div class="student-details">
                    <strong>ID:</strong> ${student.id} | 
                    <strong>Course:</strong> ${student.course} | 
                    <strong>CGPA:</strong> ${student.cgpa}
                </div>
                <div class="student-details">
                    <strong>Status:</strong> ${student.placement_status} | 
                    <strong>Company:</strong> ${student.company || 'N/A'} | 
                    <strong>Package:</strong> ${student.package || 'N/A'}
                </div>
            </div>
            <div class="student-actions">
                <button class="btn btn--outline btn--sm" onclick="showNotification('Viewing student profile...', 'info')">View Profile</button>
                <button class="btn btn--secondary btn--sm" onclick="showNotification('Exporting student data...', 'info')">Export Data</button>
            </div>
        </div>
    `).join('');
}

// Add Recruiter functionality
function openAddRecruiterModal() {
    const modal = document.getElementById('add-recruiter-modal');
    if (!modal) return;
    
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    console.log('➕ Add recruiter modal opened');
}

function closeAddRecruiterModalFn() {
    const modal = document.getElementById('add-recruiter-modal');
    if (!modal) return;
    
    modal.classList.remove('show');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    
    // Clear form
    const addRecruiterForm = document.getElementById('add-recruiter-form');
    if (addRecruiterForm) {
        addRecruiterForm.reset();
    }
    
    console.log('❌ Add recruiter modal closed');
}

function handleAddRecruiter(event) {
    event.preventDefault();
    console.log('➕ Adding new recruiter...');
    
    const formData = new FormData(event.target);
    const recruiterData = {
        id: `REC${String(mockData.recruiters.length + 1).padStart(3, '0')}`,
        company_name: formData.get('company-name'),
        short_name: formData.get('short-name'),
        industry: formData.get('industry'),
        package_range: formData.get('package-range'),
        hr_name: formData.get('hr-name'),
        hr_email: formData.get('hr-email'),
        hr_phone: formData.get('hr-phone'),
        positions: parseInt(formData.get('positions')),
        requirements: formData.get('requirements'),
        visit_date: formData.get('visit-date'),
        status: formData.get('status'),
        selected_students: 0
    };
    
    // Add to mock data
    mockData.recruiters.push(recruiterData);
    
    // Show success message
    showNotification(`${recruiterData.company_name} has been added successfully!`, 'success');
    
    // Close modal and refresh list
    closeAddRecruiterModalFn();
    populateRecruitersList();
    
    console.log('✅ Recruiter added successfully:', recruiterData.company_name);
}

// Dashboard functionality
function initDashboard() {
    // Tab switching
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('tab-btn')) {
            const tabName = e.target.getAttribute('data-tab');
            switchTab(tabName, e.target);
        }
    });
    
    // Filter event listeners with error handling
    setTimeout(() => {
        const courseFilter = document.getElementById('course-filter');
        const statusFilter = document.getElementById('status-filter');
        
        if (courseFilter) {
            courseFilter.addEventListener('change', populateStudentsList);
        }
        
        if (statusFilter) {
            statusFilter.addEventListener('change', populateStudentsList);
        }
    }, 500);
    
    console.log('📊 Dashboard functionality initialized');
}

function switchTab(tabName, clickedBtn) {
    // Get the parent dashboard
    const dashboard = clickedBtn.closest('.dashboard');
    if (!dashboard) return;
    
    // Remove active class from all tab buttons and content within this dashboard
    dashboard.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    dashboard.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked button and corresponding content
    clickedBtn.classList.add('active');
    const tabContent = document.getElementById(`${tabName}-tab`);
    if (tabContent) {
        tabContent.classList.add('active');
    }
    
    // If switching to analytics tab and user is admin, reinitialize charts
    if (tabName === 'analytics' && userType === 'admin') {
        setTimeout(() => {
            initAnalyticsCharts();
        }, 100);
    }
    
    console.log('🔄 Switched to tab:', tabName);
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Navigation functionality
function initNavigation() {
    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    // Sticky navigation
    window.addEventListener('scroll', function() {
        if (window.scrollY >= 80) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) {
                navMenu.classList.remove('show');
            }
            if (navToggle) {
                navToggle.classList.remove('active');
            }
        });
    });

    console.log('🧭 Navigation initialized');
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            
            // Don't prevent default for dashboard navigation or if no public content
            if (document.getElementById('public-content').classList.contains('hidden') || !targetId) {
                return;
            }
            
            e.preventDefault();
            
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerHeight = 80;
                const offsetTop = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    console.log('🏄 Smooth scrolling initialized');
}

// Hero section counter animation
function initHeroCounters() {
    const counters = document.querySelectorAll('.hero__stat-number');
    let counterAnimated = false;

    const animateCounters = () => {
        if (counterAnimated) return;
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;

            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    setTimeout(updateCounter, 20);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });
        
        counterAnimated = true;
    };

    // Trigger animation when hero section is in view
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                }
            });
        }, { threshold: 0.5 });

        observer.observe(heroSection);
    }
}

// Chart initialization for public page
function initChart() {
    const ctx = document.getElementById('placementChart');
    if (!ctx) return;

    const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['CSE', 'IT', 'ECE', 'Civil', 'Mechanical', 'Electrical'],
            datasets: [{
                data: [95, 96.4, 72, 70, 72.7, 43.3],
                backgroundColor: [
                    '#1FB8CD',
                    '#FFC185', 
                    '#B4413C',
                    '#ECEBD5',
                    '#5D878F',
                    '#DB4545'
                ],
                borderWidth: 0,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            },
            elements: {
                arc: {
                    borderWidth: 0
                }
            }
        }
    });
    
    console.log('📊 Public chart initialized');
}

// Recruiter filtering functionality
function initRecruiterFiltering() {
    const tabs = document.querySelectorAll('.recruiters__tab');
    const recruiters = document.querySelectorAll('.recruiter__card');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter recruiters with smooth animation
            recruiters.forEach((recruiter, index) => {
                const recruiterCategory = recruiter.getAttribute('data-category');
                
                if (category === 'all' || recruiterCategory === category) {
                    recruiter.style.display = 'block';
                    setTimeout(() => {
                        recruiter.style.opacity = '1';
                        recruiter.style.transform = 'translateY(0)';
                    }, index * 50);
                } else {
                    recruiter.style.opacity = '0';
                    recruiter.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        recruiter.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Form handling
function initForms() {
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate required fields
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Validate email
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<span class="loading"></span> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                showNotification('Message sent successfully! We will get back to you within 24 hours.', 'success');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                this.reset();
            }, 2000);
        });
    }
    
    console.log('📝 Forms initialized');
}

// Scroll animations
function initScrollAnimations() {
    const elements = document.querySelectorAll('.stats__card, .training__card, .feature');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// Training program modal functionality
function showTrainingModal(program) {
    const modalContent = {
        'Technical Training': {
            title: 'Technical Training Program',
            content: `
                <h4>Program Overview</h4>
                <p>Comprehensive technical training covering latest technologies and industry best practices.</p>
                <h4>Duration</h4>
                <p>6 months intensive training</p>
                <h4>Topics Covered</h4>
                <ul>
                    <li>Data Structures & Algorithms</li>
                    <li>Full Stack Web Development (React, Node.js)</li>
                    <li>System Design Principles</li>
                    <li>Cloud Computing (AWS, Azure)</li>
                    <li>DevOps Practices</li>
                    <li>Database Management</li>
                </ul>
                <h4>Certification</h4>
                <p>Industry-recognized certification upon successful completion</p>
            `
        },
        'Soft Skills Development': {
            title: 'Soft Skills Development Program',
            content: `
                <h4>Program Overview</h4>
                <p>Develop essential interpersonal and communication skills for professional success.</p>
                <h4>Duration</h4>
                <p>3 months comprehensive program</p>
                <h4>Key Areas</h4>
                <ul>
                    <li>Effective Communication Skills</li>
                    <li>Leadership & Team Management</li>
                    <li>Professional Presentation Skills</li>
                    <li>Time Management & Productivity</li>
                    <li>Emotional Intelligence</li>
                    <li>Conflict Resolution</li>
                </ul>
            `
        },
        'Aptitude Training': {
            title: 'Aptitude Training Program',
            content: `
                <h4>Program Overview</h4>
                <p>Comprehensive training to enhance logical thinking and problem-solving abilities.</p>
                <h4>Duration</h4>
                <p>4 months structured program</p>
                <h4>Core Components</h4>
                <ul>
                    <li>Quantitative Aptitude & Mathematics</li>
                    <li>Logical & Analytical Reasoning</li>
                    <li>Verbal Ability & English</li>
                    <li>Problem Solving Techniques</li>
                    <li>Time Management in Tests</li>
                </ul>
            `
        },
        'Interview Preparation': {
            title: 'Interview Preparation Program',
            content: `
                <h4>Program Overview</h4>
                <p>Comprehensive preparation for technical and HR interviews across all industries.</p>
                <h4>Duration</h4>
                <p>2 months intensive program</p>
                <h4>Training Modules</h4>
                <ul>
                    <li>Mock Technical Interviews</li>
                    <li>HR Interview Preparation</li>
                    <li>Group Discussion Training</li>
                    <li>Resume Building & Optimization</li>
                    <li>Industry Exposure Sessions</li>
                    <li>Body Language & Confidence Building</li>
                </ul>
            `
        }
    };

    const modal = modalContent[program] || modalContent['Technical Training'];
    showModal(modal.title, modal.content);
}

// Modal functionality
function showModal(title, content) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('custom-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'custom-modal';
        modal.className = 'modal hidden';
        modal.innerHTML = `
            <div class="modal__content">
                <button class="modal__close" id="close-custom-modal">&times;</button>
                <h3 id="modal-title"></h3>
                <div id="modal-body"></div>
                <div style="text-align: center; margin-top: 20px;">
                    <button class="btn btn--primary" id="close-custom-modal-btn">Close</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Bind close events
        modal.querySelector('#close-custom-modal').addEventListener('click', closeModal);
        modal.querySelector('#close-custom-modal-btn').addEventListener('click', closeModal);
        
        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = content;
    modal.classList.remove('hidden');
    
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('custom-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}

// Add event listeners for training cards
document.addEventListener('click', function(e) {
    if (e.target.matches('.training__card .btn')) {
        e.preventDefault();
        const card = e.target.closest('.training__card');
        const programTitle = card.querySelector('h3').textContent;
        showTrainingModal(programTitle);
    }
});

// Notification system
function showNotification(message, type = 'info') {
    // Create notification container if it doesn't exist
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 3000;
            max-width: 400px;
        `;
        document.body.appendChild(container);
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.style.cssText = `
        background: var(--color-surface);
        color: var(--color-text);
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        margin-bottom: 10px;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        border-left: 4px solid ${type === 'error' ? 'var(--color-error)' : type === 'success' ? 'var(--color-success)' : 'var(--color-primary)'};
        font-size: 14px;
        line-height: 1.4;
    `;
    notification.textContent = message;
    
    container.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
    
    console.log(`📢 ${type.toUpperCase()}: ${message}`);
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Handle keyboard navigation
document.addEventListener('keydown', function(e) {
    // Close modals on Escape key
    if (e.key === 'Escape') {
        closeModal();
        closeLoginModalFn();
        closeAddRecruiterModalFn();
    }
});

// Console log for successful initialization
console.log('🎓 SRMCEM Training & Placement Website with Enhanced Login System loaded successfully!');
console.log('📊 All interactive features including dashboards are now active');
console.log('🔐 Login credentials available in demo sections');
console.log('✅ Modal functionality has been fixed and enhanced');