function toggleDropdown(dropdownId) {
  const dropdownContent = document.getElementById(dropdownId);
  const button = dropdownContent.previousElementSibling; // Get the button element

  if (dropdownContent && button) {
      const isDisplayed = dropdownContent.style.display === "block";
      // Close all other dropdowns first (optional, but good UX)
      // document.querySelectorAll('.dropdown-content').forEach(content => {
      //     if (content.id !== dropdownId) {
      //         content.style.display = 'none';
      //         content.previousElementSibling.classList.remove('active');
      //     }
      // });

      // Toggle the current dropdown
      dropdownContent.style.display = isDisplayed ? "none" : "block";
      // Toggle active class on button for styling (like arrow rotation)
      button.classList.toggle('active', !isDisplayed);
  }
}

// Toggle mobile navigation menu
function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  if (navMenu) {
      navMenu.classList.toggle('active');
  }
}

// Optional: Close dropdowns if clicking outside
// document.addEventListener('click', function(event) {
//     const isDropdownButton = event.target.matches('.dropdown-button') || event.target.closest('.dropdown-button');
//     const isDropdownContent = event.target.closest('.dropdown-content');

//     if (!isDropdownButton && !isDropdownContent) {
//         document.querySelectorAll('.dropdown-content').forEach(content => {
//             content.style.display = 'none';
//             content.previousElementSibling.classList.remove('active');
//         });
//     }
// });