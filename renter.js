$(document).ready(function() {
    // Handle the click event for the home button
    $('#home').on('click', function() {
        window.location.href = 'index.html'; 
    });

    // Toggle About Section
    $("#about").on('click', function() {
        $("#navbarHeader").slideToggle();
    });

    // Toggle Dropdown
    $(".d-block").on('click', function() {
        $("ul.dropdown-menu").slideToggle();
    });

    
    const addItemForm = $('#addItemForm');
    const itemsList = $('#itemsList');

    // Handle form submission
    addItemForm.on('submit', function(event) {
        event.preventDefault();
        const itemName = $('#itemName').val();
        const itemDescription = $('#itemDescription').val();
        const itemPrice = $('#itemPrice').val();
        const itemImage = $('#itemImage')[0].files[0]; // Use [0] to access the native file input

        // Create a new FileReader object to read the image
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageSrc = e.target.result;

            // Create new item element
            const listItem = `
                <li class="list-group-item d-flex align-items-center">
                    <img src="${imageSrc}" alt="${itemName}" class="item-image mr-3">
                    <div class="flex-grow-1">
                        <h5>${itemName}</h5>
                        <p>${itemDescription}</p>
                    </div>
                    <span class="badge badge-primary badge-pill">${itemPrice}/day</span>
                </li>
            `;

            // Add item to the list
            itemsList.append(listItem);
        };

        // Read the image file as a Data URL (Base64)
        if (itemImage) {
            reader.readAsDataURL(itemImage);
        }

        // Clear form after submission
        addItemForm[0].reset(); // Use [0] to access the native form reset method
    });
});



