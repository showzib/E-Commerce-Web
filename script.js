const ADMIN_USERNAME = "DarkLord_Admin";
const ADMIN_PASSWORD = "Admin@2024!Secure#";

const products = [
    {
        id: 1,
        name: "Gaming Headset Pro",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "High-quality gaming headset with RGB lighting and surround sound.",
        category: "electronics"
    },
    {
        id: 2,
        name: "Mechanical Keyboard",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "RGB mechanical keyboard with customizable keys and fast response.",
        category: "electronics"
    },
    {
        id: 3,
        name: "Wireless Mouse",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Ergonomic wireless mouse with precision tracking and long battery.",
        category: "electronics"
    },
    {
        id: 4,
        name: "Smart Watch",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Feature-rich smartwatch with health monitoring and notifications.",
        category: "electronics"
    },
    {
        id: 5,
        name: "Bluetooth Speaker",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Portable Bluetooth speaker with excellent sound quality and bass.",
        category: "electronics"
    },
    {
        id: 6,
        name: "Laptop Stand",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Adjustable laptop stand for better ergonomics and cooling.",
        category: "electronics"
    },
    {
        id: 7,
        name: "Wireless Earbuds",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1590658165737-15a047b8b5e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "True wireless earbuds with noise cancellation and long battery life.",
        category: "electronics"
    },
    {
        id: 8,
        name: "Gaming Monitor",
        price: 349.99,
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "27-inch gaming monitor with 144Hz refresh rate and 1ms response.",
        category: "electronics"
    },
    {
        id: 9,
        name: "External SSD",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "1TB external SSD with fast transfer speeds and durable design.",
        category: "electronics"
    },
    {
        id: 10,
        name: "Webcam HD",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1558089687-db4b8b3e3c5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "1080p HD webcam with built-in microphone and auto-focus.",
        category: "electronics"
    },
    {
        id: 11,
        name: "USB-C Hub",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "7-in-1 USB-C hub with HDMI, USB 3.0, and SD card slots.",
        category: "electronics"
    },
    {
        id: 12,
        name: "Desk Lamp",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "LED desk lamp with adjustable brightness and color temperature.",
        category: "electronics"
    },
    {
        id: 13,
        name: "Educational Tablet for Kids",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Child-friendly educational tablet with parental controls and learning apps.",
        category: "kids"
    },
    {
        id: 14,
        name: "Building Blocks Set",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Colorful building blocks for creative play and development.",
        category: "kids"
    },
    {
        id: 15,
        name: "Kids Smartwatch",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "GPS-enabled smartwatch for kids with safety features.",
        category: "kids"
    },
    {
        id: 16,
        name: "Art Supplies Kit",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Complete art set with crayons, markers, and coloring books.",
        category: "kids"
    },
    {
        id: 17,
        name: "Remote Control Car",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Fast remote control car with rechargeable battery.",
        category: "kids"
    },
    {
        id: 18,
        name: "Kids Headphones",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Volume-limited headphones designed specifically for children.",
        category: "kids"
    },
    {
        id: 19,
        name: "Silver Necklace",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Elegant silver necklace with pendant.",
        category: "jewelry"
    },
    {
        id: 20,
        name: "Gold Earrings",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Beautiful gold earrings with precious stones.",
        category: "jewelry"
    },
    {
        id: 21,
        name: "Diamond Ring",
        price: 499.99,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Exquisite diamond ring in 18k gold setting.",
        category: "jewelry"
    },
    {
        id: 22,
        name: "Pearl Bracelet",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Classic pearl bracelet with silver clasp.",
        category: "jewelry"
    },
    {
        id: 23,
        name: "Men's Watch",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Luxury men's watch with leather strap.",
        category: "jewelry"
    },
    {
        id: 24,
        name: "Charm Bracelet",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Customizable charm bracelet with various charms.",
        category: "jewelry"
    },
    {
        id: 25,
        name: "Smart Air Fryer",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Digital air fryer with multiple cooking functions.",
        category: "kitchen"
    },
    {
        id: 26,
        name: "Electric Kettle",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Fast-boiling electric kettle with temperature control.",
        category: "kitchen"
    },
    {
        id: 27,
        name: "Blender Pro",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "High-power blender for smoothies and food processing.",
        category: "kitchen"
    },
    {
        id: 28,
        name: "Coffee Maker",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Programmable coffee maker with thermal carafe.",
        category: "kitchen"
    },
    {
        id: 29,
        name: "Food Processor",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Multi-functional food processor with various attachments.",
        category: "kitchen"
    },
    {
        id: 30,
        name: "Stand Mixer",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Professional stand mixer for baking and cooking.",
        category: "kitchen"
    },
    {
        id: 31,
        name: "Wireless Charger",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Fast wireless charger compatible with all devices.",
        category: "electronics"
    },
    {
        id: 32,
        name: "Kids Bicycle",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Safe and sturdy bicycle for children with training wheels.",
        category: "kids"
    },
    {
        id: 33,
        name: "Silver Bracelet",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Elegant silver bracelet with intricate design.",
        category: "jewelry"
    },
    {
        id: 34,
        name: "Toaster Oven",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Versatile toaster oven with convection baking.",
        category: "kitchen"
    },
    {
        id: 35,
        name: "Kids Play Tent",
        price: 44.99,
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Colorful play tent for indoor and outdoor fun.",
        category: "kids"
    },
    {
        id: 36,
        name: "Kitchen Knife Set",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Professional knife set with wooden block.",
        category: "kitchen"
    },
    {
        id: 37,
        name: "Men's Casual Shirt",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Premium cotton casual shirt for men.",
        category: "men"
    },
    {
        id: 38,
        name: "Men's Jeans",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Comfortable denim jeans with perfect fit.",
        category: "men"
    },
    {
        id: 39,
        name: "Men's Running Shoes",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Lightweight running shoes for men.",
        category: "men"
    },
    {
        id: 40,
        name: "Women's Summer Dress",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Elegant summer dress for women.",
        category: "women"
    },
    {
        id: 41,
        name: "Women's Handbag",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Stylish leather handbag for women.",
        category: "women"
    },
    {
        id: 42,
        name: "Women's Heels",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Elegant high heels for special occasions.",
        category: "women"
    },
    {
        id: 43,
        name: "Yoga Mat",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Non-slip yoga mat for exercise and meditation.",
        category: "sports"
    },
    {
        id: 44,
        name: "Dumbbell Set",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Adjustable dumbbell set for home workouts.",
        category: "sports"
    },
    {
        id: 45,
        name: "Fitness Tracker",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Advanced fitness tracker with heart rate monitor.",
        category: "sports"
    },
    {
        id: 46,
        name: "Skincare Set",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Complete skincare set for daily routine.",
        category: "beauty"
    },
    {
        id: 47,
        name: "Hair Dryer",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Professional hair dryer with multiple settings.",
        category: "beauty"
    },
    {
        id: 48,
        name: "Perfume Collection",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Luxury perfume collection with 3 different scents.",
        category: "beauty"
    }
];

let userData = JSON.parse(localStorage.getItem('userData')) || {};
let adminData = JSON.parse(localStorage.getItem('adminData')) || {
    totalRevenue: 12500,
    totalOrders: 156,
    activityLogs: [
        "System initialized - " + new Date().toLocaleString(),
        "Admin panel created - " + new Date().toLocaleString()
    ]
};

let userProducts = JSON.parse(localStorage.getItem('userProducts')) || {};
let nextProductId = 1000;

let visibleProducts = 12;
const productsPerLoad = 12;

const categoryNames = {
    'electronics': 'Electronics & Gadgets',
    'kids': 'Kids Collection',
    'jewelry': 'Jewelry & Accessories',
    'kitchen': 'Kitchen & Home',
    'men': 'Men\'s Fashion',
    'women': 'Women\'s Fashion',
    'sports': 'Sports & Fitness',
    'beauty': 'Beauty & Personal Care'
};

function updateNavbarVisibility() {
    const savedProductsLink = document.getElementById('savedProductsLink');
    const likedProductsLink = document.getElementById('likedProductsLink');

    if (userData.email) {
        savedProductsLink.style.display = 'block';
        likedProductsLink.style.display = 'block';
    } else {
        savedProductsLink.style.display = 'none';
        likedProductsLink.style.display = 'none';
    }
}

function clearGuestData() {
    localStorage.removeItem('likedProducts_guest');
    localStorage.removeItem('savedProducts_guest');
    localStorage.removeItem('cartItems_guest');
}

function getUserSpecificData() {
    const currentUser = userData.email || 'guest';

    if (currentUser === 'guest') {
        const guestData = {
            likedProducts: [],
            savedProducts: [],
            cartItems: []
        };

        localStorage.setItem('likedProducts_guest', JSON.stringify(guestData.likedProducts));
        localStorage.setItem('savedProducts_guest', JSON.stringify(guestData.savedProducts));
        localStorage.setItem('cartItems_guest', JSON.stringify(guestData.cartItems));

        return guestData;
    }

    return {
        likedProducts: JSON.parse(localStorage.getItem(`likedProducts_${currentUser}`)) || [],
        savedProducts: JSON.parse(localStorage.getItem(`savedProducts_${currentUser}`)) || [],
        cartItems: JSON.parse(localStorage.getItem(`cartItems_${currentUser}`)) || []
    };
}

function saveUserSpecificData(data) {
    const currentUser = userData.email || 'guest';
    if (data.likedProducts !== undefined) {
        localStorage.setItem(`likedProducts_${currentUser}`, JSON.stringify(data.likedProducts));
    }
    if (data.savedProducts !== undefined) {
        localStorage.setItem(`savedProducts_${currentUser}`, JSON.stringify(data.savedProducts));
    }
    if (data.cartItems !== undefined) {
        localStorage.setItem(`cartItems_${currentUser}`, JSON.stringify(data.cartItems));
    }
}

const productsContainer = document.getElementById('productsContainer');
const authLink = document.getElementById('authLink');
const adminLink = document.querySelector('.admin-link');
const adminModal = new bootstrap.Modal(document.getElementById('adminModal'));
const authModal = new bootstrap.Modal(document.getElementById('authModal'));
const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
const cartIcon = document.getElementById('cartIcon');
const cartCount = document.getElementById('cartCount');
const showMoreBtn = document.getElementById('showMoreBtn');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const guestNotice = document.getElementById('guestNotice');
const checkoutBtn = document.getElementById('checkoutBtn');
const savedProductsLink = document.getElementById('savedProductsLink');
const likedProductsLink = document.getElementById('likedProductsLink');
const productsSection = document.getElementById('productsSection');
const savedSection = document.getElementById('savedSection');
const likedSection = document.getElementById('likedSection');
const savedProductsContainer = document.getElementById('savedProductsContainer');
const likedProductsContainer = document.getElementById('likedProductsContainer');

const dashboardSection = document.getElementById('dashboardSection');
const userProductsContainer = document.getElementById('userProductsContainer');
const addProductBtn = document.getElementById('addProductBtn');
const addProductModal = new bootstrap.Modal(document.getElementById('addProductModal'));
const addProductForm = document.getElementById('addProductForm');

const mobileCategoriesIcon = document.getElementById('mobileCategoriesIcon');
const mobileCategoriesModal = new bootstrap.Modal(document.getElementById('mobileCategoriesModal'));

document.addEventListener('DOMContentLoaded', function () {
    clearGuestData();
    renderProducts();
    updateCartUI();
    checkAdminAccess();
    updateAuthLinkText();
    updateGuestNotice();
    updateNavbarVisibility();

    initializeCategories();

    if (addProductBtn) {
        addProductBtn.addEventListener('click', function () {
            addProductModal.show();
        });
    }

    if (addProductForm) {
        addProductForm.addEventListener('submit', function (e) {
            e.preventDefault();
            addUserProduct();
        });
    }

    const dashboardLink = document.getElementById('dashboardLink');
    if (dashboardLink) {
        dashboardLink.addEventListener('click', function (e) {
            e.preventDefault();
            if (!userData.email) {
                showAlert('Please sign in to access your dashboard', 'error');
                authModal.show();
                return;
            }
            showDashboard();
        });
    }

    document.getElementById('signinForm').addEventListener('submit', handleSignIn);
    document.getElementById('signupForm').addEventListener('submit', handleSignUp);
    cartIcon.addEventListener('click', function (e) {
        e.preventDefault();
        if (!userData.email) {
            showAlert('Please sign in to view your cart', 'error');
            authModal.show();
            return;
        }
        renderCart();
        cartModal.show();
    });

    if (adminLink) {
        document.getElementById('adminLink').addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = "Admin.html";
        });
    }

    showMoreBtn.addEventListener('click', showMoreProducts);

    scrollToTopBtn.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', toggleScrollToTopButton);

    checkoutBtn.addEventListener('click', handleCheckout);

    savedProductsLink.addEventListener('click', function (e) {
        e.preventDefault();
        if (!userData.email) {
            showAlert('Please sign in to view saved products', 'error');
            authModal.show();
            return;
        }
        showSavedProducts();
    });

    likedProductsLink.addEventListener('click', function (e) {
        e.preventDefault();
        if (!userData.email) {
            showAlert('Please sign in to view liked products', 'error');
            authModal.show();
            return;
        }
        showLikedProducts();
    });

    updateMobileNotifications();
    updateNavbarVisibility();
});

function showDashboard() {
    if (productsSection) productsSection.style.display = 'none';
    if (savedSection) savedSection.style.display = 'none';
    if (likedSection) likedSection.style.display = 'none';
    if (dashboardSection) dashboardSection.style.display = 'block';

    renderUserProducts();
}

function renderUserProducts() {
    if (!userProductsContainer) return;

    const currentUser = userData.email;
    const userProductsList = userProducts[currentUser] || [];

    userProductsContainer.innerHTML = '';

    if (userProductsList.length === 0) {
        userProductsContainer.innerHTML = `
            <div class="col-12">
                <div class="empty-state">
                    <i class="fas fa-box-open"></i>
                    <h4>No Products Yet</h4>
                    <p>You haven't added any products yet. Start by adding your first product!</p>
                    <button class="btn btn-warning mt-3" onclick="document.getElementById('addProductBtn').click()">
                        <i class="fas fa-plus me-2"></i>Add Your First Product
                    </button>
                </div>
            </div>
        `;
        return;
    }

    userProductsList.forEach(product => {
        const productCard = `
            <div class="col-md-6 col-lg-4">
                <div class="card user-product-card h-100">
                    <span class="user-product-badge">Your Product</span>
                    <div class="user-product-actions">
                        <button class="btn-edit" onclick="editUserProduct(${product.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-delete" onclick="deleteUserProduct(${product.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                    <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text flex-grow-1">${product.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="price">$${product.price.toFixed(2)}</span>
                            <small class="text-muted">${getCategoryName(product.category)}</small>
                        </div>
                    </div>
                </div>
            </div>
        `;

        userProductsContainer.innerHTML += productCard;
    });
}

function addUserProduct() {
    const currentUser = userData.email;
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const description = document.getElementById('productDescription').value;
    const category = document.getElementById('productCategory').value;
    const image = document.getElementById('productImage').value;

    if (!name || !price || !description || !category || !image) {
        showAlert('Please fill in all fields', 'error');
        return;
    }

    if (!userProducts[currentUser]) {
        userProducts[currentUser] = [];
    }

    const newProduct = {
        id: nextProductId++,
        name,
        price,
        description,
        category,
        image,
        owner: currentUser
    };

    userProducts[currentUser].push(newProduct);

    localStorage.setItem('userProducts', JSON.stringify(userProducts));

    document.getElementById('addProductForm').reset();
    bootstrap.Modal.getInstance(document.getElementById('addProductModal')).hide();

    showAlert('Product added successfully!', 'success');

    renderUserProducts();
    renderProducts();

    const existingFilter = document.getElementById('categoryFilterSection');
    if (existingFilter) {
        const categoryText = existingFilter.querySelector('.category-filter-title span').textContent;
        const categoryMatch = categoryText.match(/Showing products in: (.+)$/);
        if (categoryMatch) {
            const currentCategory = Object.keys(categoryNames).find(key =>
                categoryNames[key] === categoryMatch[1].trim()
            );
            if (currentCategory && currentCategory === category) {
                filterByCategory(currentCategory);
            }
        }
    }
}

function deleteUserProduct(productId) {
    if (!confirm('Are you sure you want to delete this product?')) {
        return;
    }

    const currentUser = userData.email;
    userProducts[currentUser] = userProducts[currentUser].filter(product => product.id !== productId);

    localStorage.setItem('userProducts', JSON.stringify(userProducts));

    renderUserProducts();
    renderProducts();

    const existingFilter = document.getElementById('categoryFilterSection');
    if (existingFilter) {
        const categoryText = existingFilter.querySelector('.category-filter-title span').textContent;
        const categoryMatch = categoryText.match(/Showing products in: (.+)$/);
        if (categoryMatch) {
            const currentCategory = Object.keys(categoryNames).find(key =>
                categoryNames[key] === categoryMatch[1].trim()
            );
            if (currentCategory) {
                filterByCategory(currentCategory);
            }
        }
    }

    showAlert('Product deleted successfully!', 'info');
}

function editUserProduct(productId) {
    showAlert('Edit functionality would open here in a full implementation', 'info');
}

function initializeCategories() {
    if (mobileCategoriesIcon) {
        mobileCategoriesIcon.addEventListener('click', (e) => {
            e.preventDefault();
            mobileCategoriesModal.show();
        });
    }
}

function filterByCategory(category) {
    console.log('Filtering by category:', category);

    if (mobileCategoriesModal) {
        mobileCategoriesModal.hide();
    }

    showProductsSection();

    const currentUser = userData.email;
    const userProductsList = userProducts[currentUser] || [];
    const allProducts = [...products, ...userProductsList];

    const filteredProducts = allProducts.filter(product => product.category === category);

    renderFilteredProducts(filteredProducts, category);

    showCategoryFilterSection(category);
}

function renderFilteredProducts(filteredProducts, category) {
    if (!productsContainer) return;

    productsContainer.innerHTML = '';

    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = `
            <div class="col-12">
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <h4>No Products Found</h4>
                    <p>No products available in the ${getCategoryName(category)} category.</p>
                    <button class="btn btn-warning mt-3" onclick="clearCategoryFilter()">
                        Show All Products
                    </button>
                </div>
            </div>
        `;
        return;
    }

    const userSpecificData = getUserSpecificData();
    const isLoggedIn = !!userData.email;
    const currentUser = userData.email;

    filteredProducts.forEach(product => {
        const isLiked = userSpecificData.likedProducts.includes(product.id);
        const isSaved = userSpecificData.savedProducts.includes(product.id);
        const isInCart = userSpecificData.cartItems.some(item => item.id === product.id);
        const isUserProduct = product.owner === currentUser;

        const productCard = `
            <div class="col-md-6 col-lg-4">
                <div class="card product-card h-100">
                    ${isUserProduct ? '<span class="user-product-badge">Your Product</span>' : ''}
                    <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text flex-grow-1">${product.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="price">$${product.price.toFixed(2)}</span>
                            <div class="action-buttons">
                                <button class="btn-like ${isLiked ? 'active' : ''} ${!isLoggedIn ? 'disabled' : ''}" 
                                        onclick="${isLoggedIn ? `toggleLike(${product.id})` : `showSignInAlert('like')`}">
                                    <i class="fas fa-heart"></i>
                                </button>
                                <button class="btn-save ${isSaved ? 'active' : ''} ${!isLoggedIn ? 'disabled' : ''}" 
                                        onclick="${isLoggedIn ? `toggleSave(${product.id})` : `showSignInAlert('save')`}">
                                    <i class="fas fa-bookmark"></i>
                                </button>
                                <button class="btn-cart ${isInCart ? 'active' : ''} ${!isLoggedIn ? 'disabled' : ''}" 
                                        onclick="${isLoggedIn ? `toggleCart(${product.id})` : `showSignInAlert('add to cart')`}">
                                    <i class="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        productsContainer.innerHTML += productCard;
    });

    if (showMoreBtn) {
        showMoreBtn.style.display = 'none';
    }
}

function showCategoryFilterSection(category) {
    if (!productsSection) return;

    const existingFilter = document.getElementById('categoryFilterSection');
    if (existingFilter) {
        existingFilter.remove();
    }

    const categoryFilterSection = document.createElement('div');
    categoryFilterSection.id = 'categoryFilterSection';
    categoryFilterSection.className = 'category-filter-section';
    categoryFilterSection.innerHTML = `
        <div class="category-filter-title">
            <span>
                <i class="fas fa-filter me-2"></i>
                Showing products in: ${getCategoryName(category)}
            </span>
            <a href="#" class="clear-filter" onclick="clearCategoryFilter()">
                <i class="fas fa-times me-1"></i>Clear Filter
            </a>
        </div>
    `;

    productsSection.insertBefore(categoryFilterSection, productsContainer);
}

function clearCategoryFilter() {
    const existingFilter = document.getElementById('categoryFilterSection');
    if (existingFilter) {
        existingFilter.remove();
    }

    const currentUser = userData.email;
    const userProductsList = userProducts[currentUser] || [];
    const allProducts = [...products, ...userProductsList];

    renderProducts();

    if (showMoreBtn && visibleProducts < allProducts.length) {
        showMoreBtn.style.display = 'block';
    }
}

function getCategoryName(category) {
    return categoryNames[category] || category;
}

function updateGuestNotice() {
    if (userData.email) {
        guestNotice.style.display = 'none';
    } else {
        guestNotice.style.display = 'flex';
    }
    updateNavbarVisibility();
}

function handleCheckout() {
    const userSpecificData = getUserSpecificData();
    if (userSpecificData.cartItems.length === 0) {
        showAlert('Your cart is empty!', 'error');
        return;
    }

    showAlert('Proceeding to checkout...', 'success');
}

function updateAuthLinkText() {
    if (userData.email) {
        if (userData.email === ADMIN_USERNAME) {
            authLink.innerHTML = '<i class="fas fa-sign-out-alt me-2"></i>Sign Out';
        } else {
            authLink.innerHTML = '<i class="fas fa-sign-out-alt me-2"></i>Sign Out';
        }
    } else {
        authLink.innerHTML = '<i class="fas fa-sign-in-alt me-2"></i>Sign In/Up';
    }
    updateNavbarVisibility();
}

function renderProducts() {
    if (!productsContainer) return;

    productsContainer.innerHTML = '';

    const currentUser = userData.email;
    const userProductsList = userProducts[currentUser] || [];
    const allProducts = [...products, ...userProductsList];

    const productsToShow = allProducts.slice(0, visibleProducts);
    const userSpecificData = getUserSpecificData();
    const isLoggedIn = !!userData.email;

    productsToShow.forEach(product => {
        const isLiked = userSpecificData.likedProducts.includes(product.id);
        const isSaved = userSpecificData.savedProducts.includes(product.id);
        const isInCart = userSpecificData.cartItems.some(item => item.id === product.id);
        const isUserProduct = product.owner === currentUser;

        const productCard = `
            <div class="col-md-6 col-lg-4">
                <div class="card product-card h-100">
                    ${isUserProduct ? '<span class="user-product-badge">Your Product</span>' : ''}
                    <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text flex-grow-1">${product.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="price">$${product.price.toFixed(2)}</span>
                            <div class="action-buttons">
                                <button class="btn-like ${isLiked ? 'active' : ''} ${!isLoggedIn ? 'disabled' : ''}" 
                                        onclick="${isLoggedIn ? `toggleLike(${product.id})` : `showSignInAlert('like')`}">
                                    <i class="fas fa-heart"></i>
                                </button>
                                <button class="btn-save ${isSaved ? 'active' : ''} ${!isLoggedIn ? 'disabled' : ''}" 
                                        onclick="${isLoggedIn ? `toggleSave(${product.id})` : `showSignInAlert('save')`}">
                                    <i class="fas fa-bookmark"></i>
                                </button>
                                <button class="btn-cart ${isInCart ? 'active' : ''} ${!isLoggedIn ? 'disabled' : ''}" 
                                        onclick="${isLoggedIn ? `toggleCart(${product.id})` : `showSignInAlert('add to cart')`}">
                                    <i class="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        productsContainer.innerHTML += productCard;
    });

    if (visibleProducts >= allProducts.length) {
        showMoreBtn.style.display = 'none';
    } else {
        showMoreBtn.style.display = 'block';
    }
}

function showSavedProducts() {
    productsSection.style.display = 'none';
    savedSection.style.display = 'block';
    likedSection.style.display = 'none';
    if (dashboardSection) dashboardSection.style.display = 'none';

    const userSpecificData = getUserSpecificData();
    const currentUser = userData.email;
    const userProductsList = userProducts[currentUser] || [];
    const allProducts = [...products, ...userProductsList];

    const savedProducts = allProducts.filter(product =>
        userSpecificData.savedProducts.includes(product.id)
    );

    savedProductsContainer.innerHTML = '';

    if (savedProducts.length === 0) {
        savedProductsContainer.innerHTML = `
            <div class="col-12">
                <div class="empty-state">
                    <i class="fas fa-bookmark"></i>
                    <h4>No Saved Products</h4>
                    <p>You haven't saved any products yet.</p>
                </div>
            </div>
        `;
        return;
    }

    savedProducts.forEach(product => {
        const isLiked = userSpecificData.likedProducts.includes(product.id);
        const isInCart = userSpecificData.cartItems.some(item => item.id === product.id);
        const isUserProduct = product.owner === currentUser;

        const productCard = `
            <div class="col-md-6 col-lg-4">
                <div class="card product-card h-100">
                    ${isUserProduct ? '<span class="user-product-badge">Your Product</span>' : ''}
                    <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text flex-grow-1">${product.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="price">$${product.price.toFixed(2)}</span>
                            <div class="action-buttons">
                                <button class="btn-like ${isLiked ? 'active' : ''}" onclick="toggleLike(${product.id})">
                                    <i class="fas fa-heart"></i>
                                </button>
                                <button class="btn-save active" onclick="toggleSave(${product.id})">
                                    <i class="fas fa-bookmark"></i>
                                </button>
                                <button class="btn-cart ${isInCart ? 'active' : ''}" onclick="toggleCart(${product.id})">
                                    <i class="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        savedProductsContainer.innerHTML += productCard;
    });
}

function showLikedProducts() {
    productsSection.style.display = 'none';
    savedSection.style.display = 'none';
    likedSection.style.display = 'block';
    if (dashboardSection) dashboardSection.style.display = 'none';

    const userSpecificData = getUserSpecificData();
    const currentUser = userData.email;
    const userProductsList = userProducts[currentUser] || [];
    const allProducts = [...products, ...userProductsList];

    const likedProducts = allProducts.filter(product =>
        userSpecificData.likedProducts.includes(product.id)
    );

    likedProductsContainer.innerHTML = '';

    if (likedProducts.length === 0) {
        likedProductsContainer.innerHTML = `
            <div class="col-12">
                <div class="empty-state">
                    <i class="fas fa-heart"></i>
                    <h4>No Liked Products</h4>
                    <p>You haven't liked any products yet.</p>
                </div>
            </div>
        `;
        return;
    }

    likedProducts.forEach(product => {
        const isSaved = userSpecificData.savedProducts.includes(product.id);
        const isInCart = userSpecificData.cartItems.some(item => item.id === product.id);
        const isUserProduct = product.owner === currentUser;

        const productCard = `
            <div class="col-md-6 col-lg-4">
                <div class="card product-card h-100">
                    ${isUserProduct ? '<span class="user-product-badge">Your Product</span>' : ''}
                    <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text flex-grow-1">${product.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="price">$${product.price.toFixed(2)}</span>
                            <div class="action-buttons">
                                <button class="btn-like active" onclick="toggleLike(${product.id})">
                                    <i class="fas fa-heart"></i>
                                </button>
                                <button class="btn-save ${isSaved ? 'active' : ''}" onclick="toggleSave(${product.id})">
                                    <i class="fas fa-bookmark"></i>
                                </button>
                                <button class="btn-cart ${isInCart ? 'active' : ''}" onclick="toggleCart(${product.id})">
                                    <i class="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        likedProductsContainer.innerHTML += productCard;
    });
}

function showSignInAlert(action) {
    showAlert(`Please sign in to ${action} products`, 'error');
    authModal.show();
}

function showMoreProducts() {
    visibleProducts += productsPerLoad;
    renderProducts();

    setTimeout(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);
}

function toggleScrollToTopButton() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleLike(productId) {
    const userSpecificData = getUserSpecificData();
    const index = userSpecificData.likedProducts.indexOf(productId);
    if (index === -1) {
        userSpecificData.likedProducts.push(productId);
        showAlert('Product added to favorites!', 'success');
    } else {
        userSpecificData.likedProducts.splice(index, 1);
        showAlert('Product removed from favorites!', 'info');
    }
    saveUserSpecificData({ likedProducts: userSpecificData.likedProducts });
    renderProducts();
    if (likedSection.style.display === 'block') {
        showLikedProducts();
    }
}

function toggleSave(productId) {
    const userSpecificData = getUserSpecificData();
    const index = userSpecificData.savedProducts.indexOf(productId);
    if (index === -1) {
        userSpecificData.savedProducts.push(productId);
        showAlert('Product saved for later!', 'success');
    } else {
        userSpecificData.savedProducts.splice(index, 1);
        showAlert('Product removed from saved!', 'info');
    }
    saveUserSpecificData({ savedProducts: userSpecificData.savedProducts });
    renderProducts();
    if (savedSection.style.display === 'block') {
        showSavedProducts();
    }
}

function toggleCart(productId) {
    const userSpecificData = getUserSpecificData();
    const currentUser = userData.email;
    const userProductsList = userProducts[currentUser] || [];
    const allProducts = [...products, ...userProductsList];
    const product = allProducts.find(p => p.id === productId);

    if (!product) {
        showAlert('Product not found!', 'error');
        return;
    }

    const index = userSpecificData.cartItems.findIndex(item => item.id === productId);

    if (index === -1) {
        userSpecificData.cartItems.push({ ...product, quantity: 1 });
        showAlert('Product added to cart!', 'success');
        showPurchaseAnimation();
    } else {
        userSpecificData.cartItems.splice(index, 1);
        showAlert('Product removed from cart!', 'info');
    }

    saveUserSpecificData({ cartItems: userSpecificData.cartItems });
    updateCartUI();
    renderProducts();
}

function updateCartUI() {
    const userSpecificData = getUserSpecificData();
    cartCount.textContent = userSpecificData.cartItems.length;
    updateMobileNotifications();
}

function renderCart() {
    const userSpecificData = getUserSpecificData();
    const cartItemsContainer = document.getElementById('cartItems');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartTotal = document.getElementById('cartTotal');

    cartItemsContainer.innerHTML = '';

    if (userSpecificData.cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center">Your cart is empty</p>';
        cartSubtotal.textContent = '$0.00';
        cartTotal.textContent = '$5.00';
        return;
    }

    let subtotal = 0;

    userSpecificData.cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const cartItem = `
            <div class="cart-item">
                <div class="row align-items-center">
                    <div class="col-3">
                        <img src="${item.image}" alt="${item.name}" class="img-fluid rounded">
                    </div>
                    <div class="col-5">
                        <h6 class="mb-1">${item.name}</h6>
                        <small class="text-muted">$${item.price.toFixed(2)}</small>
                    </div>
                    <div class="col-4 text-end">
                        <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        cartItemsContainer.innerHTML += cartItem;
    });

    const shipping = 5.00;
    const total = subtotal + shipping;

    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function removeFromCart(productId) {
    const userSpecificData = getUserSpecificData();
    userSpecificData.cartItems = userSpecificData.cartItems.filter(item => item.id !== productId);
    saveUserSpecificData({ cartItems: userSpecificData.cartItems });
    updateCartUI();
    renderCart();
    renderProducts();
    showAlert('Product removed from cart!', 'info');
}

function handleSignIn(e) {
    e.preventDefault();

    const username = document.getElementById('signinUsername').value;
    const password = document.getElementById('signinPassword').value;

    if (!username || !password) {
        showAlert('Please fill in all fields', 'error');
        return;
    }

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        userData = { email: ADMIN_USERNAME, name: 'Admin', isAdmin: true };
        localStorage.setItem('userData', JSON.stringify(userData));

        window.location.href = "Admin.html";
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => (u.email === username || u.name === username) && u.password === password);

    if (user) {
        userData = user;
        localStorage.setItem('userData', JSON.stringify(userData));
        updateAuthLinkText();
        adminLink.style.display = 'none';
        authModal.hide();
        showAlert('Successfully signed in!', 'success');
        renderProducts();
        updateCartUI();
        updateGuestNotice();
        updateNavbarVisibility();
    } else {
        showAlert('Invalid username or password', 'error');
    }
}

function handleSignUp(e) {
    e.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    if (!name || !email || !password || !confirmPassword) {
        showAlert('Please fill in all fields', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showAlert('Passwords do not match', 'error');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
        showAlert('User with this email already exists', 'error');
        return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    userData = newUser;
    localStorage.setItem('userData', JSON.stringify(userData));
    updateAuthLinkText();
    authModal.hide();
    showAlert('Successfully signed up!', 'success');
    renderProducts();
    updateCartUI();
    updateGuestNotice();
    updateNavbarVisibility();
}

function checkAdminAccess() {
    if (userData.email === ADMIN_USERNAME) {
        adminLink.style.display = 'block';
    } else {
        adminLink.style.display = 'none';
    }
}

function showAdminDashboard() {
    if (userData.email === ADMIN_USERNAME) {
        updateAdminStats();
        adminModal.show();
    } else {
        showAlert('Access Denied! Admin privileges required.', 'error');
    }
}

function updateAdminStats() {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    document.getElementById('totalUsers').textContent = users.length;
    document.getElementById('totalProducts').textContent = products.length;
    document.getElementById('totalOrders').textContent = adminData.totalOrders;
    document.getElementById('totalRevenue').textContent = `$${adminData.totalRevenue.toLocaleString()}`;

    renderActivityLogs();
}

function renderActivityLogs() {
    const activityContainer = document.getElementById('recentActivity');
    const logs = adminData.activityLogs || [];

    activityContainer.innerHTML = '';

    if (logs.length === 0) {
        activityContainer.innerHTML = '<p class="text-muted">No recent activity</p>';
        return;
    }

    logs.slice(-5).reverse().forEach(log => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item border-bottom pb-2 mb-2';
        activityItem.innerHTML = `
            <div class="d-flex justify-content-between">
                <span>${log}</span>
            </div>
        `;
        activityContainer.appendChild(activityItem);
    });
}

function addActivityLog(message) {
    adminData.activityLogs.push(message + " - " + new Date().toLocaleString());
    localStorage.setItem('adminData', JSON.stringify(adminData));
}

function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type === 'error' ? 'danger' : type} position-fixed top-0 start-50 translate-middle-x mt-3`;
    alertDiv.style.zIndex = '9999';
    alertDiv.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
            <span>${message}</span>
            <button type="button" class="btn-close" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
    `;

    document.body.appendChild(alertDiv);

    setTimeout(() => {
        if (alertDiv.parentElement) {
            alertDiv.remove();
        }
    }, 3000);
}

authLink.addEventListener('click', function (e) {
    e.preventDefault();

    if (userData.email) {
        if (confirm('Do you want to sign out?')) {
            userData = {};
            localStorage.removeItem('userData');
            updateAuthLinkText();
            adminLink.style.display = 'none';
            showAlert('Successfully signed out!', 'info');
            renderProducts();
            updateCartUI();
            updateGuestNotice();
            updateNavbarVisibility();
            productsSection.style.display = 'block';
            savedSection.style.display = 'none';
            likedSection.style.display = 'none';
            if (dashboardSection) dashboardSection.style.display = 'none';
        }
    } else {
        authModal.show();
    }
});

function updateMobileNotifications() {
    const userSpecificData = getUserSpecificData();
    const hamburgerNotification = document.getElementById('hamburgerNotification');
    const mobilePurchaseIndicator = document.getElementById('mobilePurchaseIndicator');

    if (userSpecificData.cartItems.length > 0) {
        hamburgerNotification.style.display = 'block';
        mobilePurchaseIndicator.style.display = 'flex';
    } else {
        hamburgerNotification.style.display = 'none';
        mobilePurchaseIndicator.style.display = 'none';
    }
}

function showPurchaseAnimation() {
    const cartIcon = document.getElementById('cartIcon');
    cartIcon.classList.add('purchase-success');
    setTimeout(() => {
        cartIcon.classList.remove('purchase-success');
    }, 2000);
}

function showProductsSection() {
    productsSection.style.display = 'block';
    savedSection.style.display = 'none';
    likedSection.style.display = 'none';
    if (dashboardSection) dashboardSection.style.display = 'none';
}

document.getElementById('mobilePurchaseIndicator').addEventListener('click', function () {
    if (!userData.email) {
        showAlert('Please sign in to view your cart', 'error');
        authModal.show();
        return;
    }
    renderCart();
    cartModal.show();
});

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');
const mobileSearchInput = document.getElementById('mobileSearchInput');
const mobileSearchBtn = document.getElementById('mobileSearchBtn');
const mobileSearchResults = document.getElementById('mobileSearchResults');
const mobileSearchIcon = document.getElementById('mobileSearchIcon');
const mobileSearchModal = new bootstrap.Modal(document.getElementById('mobileSearchModal'));

function performSearch(searchTerm, resultsContainer) {
    if (searchTerm.trim() === '') {
        resultsContainer.innerHTML = '';
        resultsContainer.classList.remove('active');
        return;
    }

    const currentUser = userData.email;
    const userProductsList = userProducts[currentUser] || [];
    const allProducts = [...products, ...userProductsList];

    const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    displaySearchResults(filteredProducts, resultsContainer, searchTerm);
}

function displaySearchResults(filteredProducts, resultsContainer, searchTerm) {
    resultsContainer.innerHTML = '';

    if (filteredProducts.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search me-2"></i>
                No products found for "${searchTerm}"
            </div>
        `;
    } else {
        filteredProducts.forEach(product => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="search-result-image">
                <div class="search-result-info">
                    <div class="search-result-name">${product.name}</div>
                    <div class="search-result-price">$${product.price.toFixed(2)}</div>
                    <div class="search-result-category">${product.category}</div>
                </div>
            `;
            resultItem.addEventListener('click', () => {
                handleSearchResultClick(product);
                resultsContainer.classList.remove('active');
                if (mobileSearchModal._element) {
                    mobileSearchModal.hide();
                }
            });
            resultsContainer.appendChild(resultItem);
        });
    }

    resultsContainer.classList.add('active');
}

function handleSearchResultClick(product) {
    showProductsSection();

    setTimeout(() => {
        const productElement = document.querySelector(`[onclick*="toggleLike(${product.id})"]`);
        if (productElement) {
            productElement.closest('.product-card').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            const card = productElement.closest('.product-card');
            card.style.boxShadow = '0 0 0 3px var(--accent-color)';
            setTimeout(() => {
                card.style.boxShadow = '';
            }, 2000);
        }
    }, 100);
}

searchInput.addEventListener('input', (e) => {
    performSearch(e.target.value, searchResults);
});

searchBtn.addEventListener('click', () => {
    performSearch(searchInput.value, searchResults);
});

searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim() !== '') {
        performSearch(searchInput.value, searchResults);
    }
});

mobileSearchInput.addEventListener('input', (e) => {
    performSearch(e.target.value, mobileSearchResults);
});

mobileSearchBtn.addEventListener('click', () => {
    performSearch(mobileSearchInput.value, mobileSearchResults);
});

mobileSearchIcon.addEventListener('click', (e) => {
    e.preventDefault();
    mobileSearchModal.show();
    setTimeout(() => {
        mobileSearchInput.focus();
    }, 500);
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        searchResults.classList.remove('active');
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch(searchInput.value, searchResults);
    }
});

mobileSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch(mobileSearchInput.value, mobileSearchResults);
    }
});

document.getElementById('mobileSearchModal').addEventListener('hidden.bs.modal', () => {
    mobileSearchInput.value = '';
    mobileSearchResults.innerHTML = '';
    mobileSearchResults.classList.remove('active');
});