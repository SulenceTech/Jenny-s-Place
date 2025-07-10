 const menuItems = [
            {
                id: 1,
                name: "Truffle Risotto",
                description: "Creamy Arborio rice with black truffle, parmesan, and wild mushrooms",
                price: 15600,
                category: "mains",
                specialCategory: "intercontinental",
                image: "images/Mushroom Risotto.jpeg"
            },
            {
                id: 2,
                name: "Grilled Salmon",
                description: "Atlantic salmon with lemon herb butter, seasonal vegetables",
                price: 10200,
                category: "mains",
                specialCategory: "intercontinental",
                image: "images/Atlantic salmon.jpeg"
            },
            {
                id: 3,
                name: "Caesar Salad",
                description: "Crisp romaine lettuce, parmesan, croutons, classic caesar dressing",
                price: 2000,
                category: "appetizers",
                specialCategory: "intercontinental",
                image: "images/Classic Caesar Salad with Crispy.jpeg"
            },
            {
                id: 4,
                name: "Chocolate Lava Cake",
                description: "Warm chocolate cake with molten center, vanilla ice cream",
                price: 15000,
                category: "desserts",
                specialCategory: "pastry",
                image: "images/Warm chocolate cake with molten center, vanilla ice cream.jpeg" 
            },
            {
                id: 5,
                name: "Craft Beer",
                description: "Local brewery selection, rotating seasonal flavors",
                price: 1200,
                category: "beverages",
                specialCategory: "local",
                image: "images/Local brewery selection, rotating seasonal flavors.jpeg" 
            },
            {
                id: 6,
                name: "Beef Wellington",
                description: "Premium beef tenderloin wrapped in puff pastry with mushroom duxelles",
                price: 3000,
                category: "mains",
                specialCategory: "intercontinental",
                image: "images/Beef Wellington.jpeg" 
            },
            {
                id: 7,
                name: "Bruschetta Trio",
                description: "Three varieties: tomato basil, mushroom, and goat cheese with honey",
                price: 9000,
                category: "appetizers",
                specialCategory: "intercontinental",
                image: "images/tomato basil, mushroom, and goat cheese with honey.jpeg" 
            },
            {
                id: 8,
                name: "Tiramisu",
                description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone",
                price: 7000,
                category: "desserts",
                specialCategory: "pastry",
                image: "images/Classic Italian dessert with espresso-soaked ladyfingers and mascarpone.jpeg" 
            },
            // New items for special categories
            {
                id: 9,
                name: "Jollof Rice",
                description: "Traditional Nigerian spiced rice with chicken and vegetables",
                price: 6000,
                category: "mains",
                specialCategory: "local",
                image: "images/Traditional Nigerian spiced rice with chicken and vegetables.jpeg" 
            },
            {
                id: 10,
                name: "Suya Platter",
                description: "Grilled spiced beef skewers with onions and tomatoes, served with yaji",
                price: 5000,
                category: "mains",
                specialCategory: "local",
                image: "images/Grilled spiced beef skewers with onions and tomatoes, served with yaji.jpeg" 
            },
            {
                id: 11,
                name: "Pounded Yam & Egusi",
                description: "Traditional pounded yam served with rich egusi soup and assorted meat",
                price: 4500,
                category: "mains",
                specialCategory: "local",
                image: "images/Traditional pounded yam served with rich egusi soup and assorted meat.jpeg" 
            },
            {
                id: 12,
                name: "Croissant Pastry",
                description: "Buttery French croissant with almond filling and powdered sugar",
                price: 1900,
                category: "desserts",
                specialCategory: "pastry",
                image: "images/Buttery French croissant with almond filling and powdered sugar.jpeg" 
            },
            {
                id: 13,
                name: "Danish Pastry",
                description: "Flaky pastry with fruit filling and sweet glaze",
                price: 3500,
                category: "desserts",
                specialCategory: "pastry",
                image: "images/Danish Pastry.jpeg" 
            },
            {
                id: 14,
                name: "Éclair",
                description: "Choux pastry filled with vanilla cream and topped with chocolate glaze",
                price: 5900,
                category: "desserts",
                specialCategory: "pastry",
                image: "images/Choux pastry filled with vanilla cream and topped with chocolate glaze.jpeg" 
            },
            {
                id: 15,
                name: "Vanilla Ice Cream",
                description: "Premium Madagascar vanilla ice cream served in a waffle cone",
                price: 1800,
                category: "desserts",
                specialCategory: "icecream",
                image: "images/Vanilla Ice Cream.jpeg" 
            },
            {
                id: 16,
                name: "Chocolate Sundae",
                description: "Rich chocolate ice cream with hot fudge, whipped cream, and cherry",
                price: 2200,
                category: "desserts",
                specialCategory: "icecream",
                image: "images/Chocolate Sundae.jpeg",
            },
            {
                id: 17,
                name: "Strawberry Gelato",
                description: "Authentic Italian gelato made with fresh strawberries and cream",
                price: 4000,
                category: "desserts",
                specialCategory: "icecream",
                image: "images/Strawberry Gelato.jpeg" 
            },
            {
                id: 18,
                name: "Mint Chocolate Chip",
                description: "Refreshing mint ice cream with dark chocolate chips",
                price: 3500,
                category: "desserts",
                specialCategory: "icecream",
                image: "images/Mint Chocolate Chip.jpeg" 
            },
            {
                id: 19,
                name: "Nkwobi",
                description: "Cow foot or goat foot cooked in a spicy palm oil sauce",
                price: 6000,
                category: "mains",
                specialCategory: "local",
                image: "images/Cow foot or goat foot cooked in a spicy palm oil sauce.jpeg" 
            },
        ];

        let cart = [];
        let currentFilter = 'all';

        // Filter by special category from dropdown
        function filterBySpecialCategory(specialCategory) {
            // Close dropdown
            document.querySelector('.dropdown').classList.remove('active');
            
            // Reset menu category buttons
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Filter and display items
            const filtered = menuItems.filter(item => item.specialCategory === specialCategory);
            displayMenuItems(filtered);
            
            // Update section title to show current filter
            const sectionTitle = document.querySelector('.section-title');
            const categoryNames = {
                'intercontinental': 'Intercontinental Cuisine',
                'local': 'Local Delicacies',
                'pastry': 'Fresh Pastries',
                'icecream': 'Ice Cream Selection'
            };
            sectionTitle.textContent = categoryNames[specialCategory] || 'Our Menu';
        }

        // Toggle dropdown
        function toggleDropdown() {
            const dropdown = document.querySelector('.dropdown');
            dropdown.classList.toggle('active');
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const dropdown = document.querySelector('.dropdown');
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove('active');
            }
        });

        // Add click event to dropdown button
        document.addEventListener('DOMContentLoaded', function() {
            displayMenuItems(menuItems);
            updateCartCount();
            
            // Add dropdown toggle functionality
            const dropdownBtn = document.querySelector('.dropdown-btn');
            if (dropdownBtn) {
                dropdownBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    toggleDropdown();
                });
            }
        });

        // Display menu items
        function displayMenuItems(items) {
            const menuGrid = document.getElementById('menuGrid');
            menuGrid.innerHTML = '';

            items.forEach(item => {
                const menuItemDiv = document.createElement('div');
                menuItemDiv.className = 'menu-item';
                menuItemDiv.innerHTML = `
                    <div class="item-image" style="background-image: url('${item.image}')"></div>
                    <div class="item-content">
                        <h3 class="item-name">${item.name}</h3>
                        <p class="item-description">${item.description}</p>
                        <div class="item-footer">
                            <span class="item-price">₦${item.price.toLocaleString()}</span>
                            <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
                        </div>
                    </div>
                `;
                menuGrid.appendChild(menuItemDiv);
            });
        }

        // Filter menu items
        function filterMenu(category) {
            currentFilter = category;
            
            // Update active button
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');

            // Filter items
            const filtered = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);
            displayMenuItems(filtered);
        }

        // Add item to cart
        function addToCart(itemId) {
            const item = menuItems.find(item => item.id === itemId);
            const existingItem = cart.find(cartItem => cartItem.id === itemId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...item, quantity: 1 });
            }

            updateCartCount();
            updateCartDisplay();
            
            // Show feedback
            const btn = event.target;
            const originalText = btn.textContent;
            btn.textContent = 'Added!';
            btn.style.background = '#4CAF50';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '#ff6b35';
            }, 1000);
        }

        // Update cart count
        function updateCartCount() {
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            document.getElementById('cartCount').textContent = count;
        }

        // Update cart display
        function updateCartDisplay() {
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');

            if (cart.length === 0) {
                cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
                cartTotal.textContent = 'Total: $0.00';
                return;
            }

            cartItems.innerHTML = '';
            let total = 0;

            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;

                const cartItemDiv = document.createElement('div');
                cartItemDiv.className = 'cart-item';
                cartItemDiv.innerHTML = `
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                    </div>
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                `;
                cartItems.appendChild(cartItemDiv);
            });

            cartTotal.textContent = `Total: ₦${total.toLocaleString()}`;
        }

        // Update item quantity
        function updateQuantity(itemId, change) {
            const item = cart.find(cartItem => cartItem.id === itemId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    cart = cart.filter(cartItem => cartItem.id !== itemId);
                }
                updateCartCount();
                updateCartDisplay();
            }
        }

        // Toggle cart modal
        function toggleCart() {
            const modal = document.getElementById('cartModal');
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
            } else {
                modal.style.display = 'block';
                updateCartDisplay();
            }
        }

        // Toggle mobile menu
        function toggleMenu() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        }

        // Scroll to menu
        function scrollToMenu() {
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        }

        // Checkout function
        function checkout() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            alert(`Thank you for your order! Total: ₦${total.toLocaleString()}\n\nThis is a demo - no actual payment processed.`);

            
            // Clear cart
            cart = [];
            updateCartCount();
            updateCartDisplay();
            toggleCart();
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('cartModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }

        // Filter menu items
        function filterMenu(category) {
            currentFilter = category;
            
            // Update active button
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList
        }




        // for filtering................................................................................
    const menuGrid = document.getElementById('menuGrid');

    function populateMenu(items) {
    menuGrid.innerHTML = ''; // Clear existing items

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = `menu-item ${item.category}`;
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width:100%; height:auto; border-radius:8px;">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p><strong>₦${item.price.toLocaleString()}</strong></p>
            <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        menuGrid.appendChild(div);
    });
}


    // Filter items by category
    function filterMenu(category) {
    const filteredItems = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);
    populateMenu(filteredItems);

    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}


    // Initial load
    document.addEventListener('DOMContentLoaded', () => {
        populateMenu(menuItems);
    });
