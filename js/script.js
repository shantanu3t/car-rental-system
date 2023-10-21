// JavaScript to show and hide the pop-up
const showPopupButton = document.getElementById('showPopup');
const closePopupButton = document.getElementById('closePopup');
const popup = document.getElementById('popup');

showPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';

});

// Get the form element by its ID
const addReviewForm = document.getElementById('add-review-form');

// Get the user-reviews container element by its ID
const userReviewsContainer = document.getElementById('user-reviews');

// Function to display user reviews
function displayUserReviews() {
    userReviewsContainer.innerHTML = ''; // Clear the existing content

    userReviews.forEach((review) => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('user-review');
        reviewElement.innerHTML = `
            <h3>${review.name}</h3>
            <p>Rating: ${review.rating}/5</p>
            <p>${review.comment}</p>
        `;
        userReviewsContainer.appendChild(reviewElement);
    });
}

// Get the stored reviews from Local Storage when the page loads
const storedReviews = JSON.parse(localStorage.getItem('userReviews')) || [];

// Initialize userReviews with stored reviews
let userReviews = storedReviews;

// Display the user reviews
displayUserReviews();

// Add a submit event listener to the form
addReviewForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Capture the form input values
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    // Create an object to represent the user's review
    const userReview = {
        name,
        rating,
        comment,
    };

    // Add the user's review to the array
    userReviews.push(userReview);

    // Store the updated reviews in Local Storage
    localStorage.setItem('userReviews', JSON.stringify(userReviews));

    // Display the user reviews
    displayUserReviews();

    // Clear the form inputs
    addReviewForm.reset();

    // Close the popup after submitting the review
    popup.style.display = 'none';
});
