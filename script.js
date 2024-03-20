document.querySelectorAll('.buy-now').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        var imgSrc = this.getAttribute('data-img-src');
        document.getElementById('modalImg').src = imgSrc;
        document.getElementById('productModal').style.display = "block";
    });
});

// When the user clicks on <span> (x), close the modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('productModal').style.display = "none";
});

// Click outside of the modal to close it
window.onclick = function(event) {
    if (event.target == document.getElementById('productModal')) {
        document.getElementById('productModal').style.display = "none";
    }
}
const products = [
    { name: "Impact Drill", url: "product.html#Impact Drill" },
    { name: "Electric Router", url: "product.html#Electric Router" },
    { name: "Circular Saw", url: "product.html#Circular Saw" },
    { name: "Demolition Hammer", url: "product.html#Demolition Hammer" },
    { name: "Hammer Drill", url: "product.html#Hammer Drill" },
    { name: "Angle Grinder", url: "product.html#Angle Grinder" },
    { name: "Jig Saw", url: "product.html#Jig Saw" },
    { name: "Innovaive Duo", url: "product.html#Innovative Duo" },
    { name: "Multi-Tool Set", url: "product.html#Multi-Tool Set" },
]

// Function to display suggestions
function displaySuggestions(suggestions) {
    const suggestionsList = document.getElementById('suggestions');
    suggestionsList.innerHTML = ''; // Clear existing suggestions
    suggestions.forEach(product => {
        const suggestionItem = document.createElement('li');
        suggestionItem.textContent = product.name;
        suggestionItem.addEventListener('click', () => {
            window.location.href = product.url; // Redirect on click
            clearSuggestions(); // Clear suggestions after redirecting
        });
        suggestionsList.appendChild(suggestionItem);
    });
    suggestionsList.style.display = suggestions.length > 0 ? 'block' : 'none';
}

// Function to clear suggestions
function clearSuggestions() {
    const suggestionsList = document.getElementById('suggestions');
    suggestionsList.innerHTML = '';
    suggestionsList.style.display = 'none';
}


// Event listener for the search input field
document.getElementById('srch').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase().trim();
    const searchResults = products.filter(product => product.name.toLowerCase().includes(searchQuery));
    displaySuggestions(searchResults); // Display matching suggestions
});

// Update the existing form submit event listener
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting in the traditional way

    const searchQuery = document.getElementById('srch').value.toLowerCase().trim();
    const searchResults = products.filter(product => product.name.toLowerCase().includes(searchQuery));

    if (searchResults.length > 0) {
        window.location.href = searchResults[0].url; // Redirect to the first matching product's URL
    } else {
        alert('Product not available');
    }
    clearSuggestions(); // Clear suggestions after search
});
function toggleFeature() {
  var feature = document.getElementById("durableDesign");
  var button = document.getElementById("readMoreBtn");
  if (feature.style.display === "none") {
      feature.style.display = "block";
      button.textContent = "Read Less";
  } else {
      feature.style.display = "none";
      button.textContent = "Read More";
  }
}
document.addEventListener("DOMContentLoaded", function() {
  let currentIndex = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  const totalTestimonials = testimonials.length;
  const changeInterval = 5000; // Change testimonial every 5000 milliseconds (5 seconds)

  function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
          if (i === index) {
              testimonial.classList.add('active');
          } else {
              testimonial.classList.remove('active');
          }
      });
  }

  function changeTestimonial(step) {
      currentIndex += step;

      if (currentIndex >= totalTestimonials) {
          currentIndex = 0;
      } else if (currentIndex < 0) {
          currentIndex = totalTestimonials - 1;
      }

      showTestimonial(currentIndex);
  }

  // Automatic change
  setInterval(() => {
      changeTestimonial(1);
  }, changeInterval);

  // Manual change through buttons
  document.querySelector('.prev').addEventListener('click', () => changeTestimonial(-1));
  document.querySelector('.next').addEventListener('click', () => changeTestimonial(1));

  // Initialize first testimonial
  showTestimonial(currentIndex);
});
document.addEventListener('DOMContentLoaded', function() {
    // Select all the FAQ toggle icons
    const faqToggles = document.querySelectorAll('.faq-toggle');

    // Function to toggle the visibility of the FAQ answer
    function toggleFaqAnswer(event) {
        // Prevent default action
        event.preventDefault();
        
        // The clicked icon
        const icon = event.target;
        
        // The parent element of the icon (the question div)
        const faqQuestion = icon.closest('.faq-question');
        
        // The paragraph (answer) inside the question div
        const faqAnswer = faqQuestion.querySelector('p');
        
        // Toggle the 'active' class on the answer paragraph to show/hide it
        faqAnswer.classList.toggle('active');
        
        // Optionally, toggle the icon between 'down' and 'up'
        icon.classList.toggle('fa-angle-down');
        icon.classList.toggle('fa-angle-up');
    }

    // Add click event listeners to each toggle icon
    faqToggles.forEach(function(toggle) {
        toggle.addEventListener('click', toggleFaqAnswer);
    });
});

const text = "Join our security squad";
const container = document.getElementById('animatedText');
let i = 0;
function animateText() {
    if (i < text.length) {
      container.innerHTML += text.charAt(i);
      i++;
      setTimeout(animateText, 100);
    } else {
      // Once the text animation is complete, show the icons
      document.getElementById('icons').style.display = 'block';
    }
  }
  
  animateText();
  
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function changeImage(src) {
    document.getElementById('main-image').src = src;
}
function changeImage(src) {
    document.getElementById('displayedImage').src = src;
  }
  document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Review submitted!');
    // Here you would typically handle the form submission, e.g., sending data to a server
  });
    