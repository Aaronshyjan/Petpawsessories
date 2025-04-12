document.addEventListener("DOMContentLoaded", () => {
    // Select all filter buttons
    const filterButtons = document.querySelectorAll(".filter-btn");
    // Select all category sections
    const productSections = document.querySelectorAll(".category-section");
  
    // Check if elements were found (for debugging)
    if (filterButtons.length === 0) {
      console.error(
        "Filter buttons (.filter-btn) not found. Check HTML class names."
      );
      return;
    }
    if (productSections.length === 0) {
      console.error(
        "Product sections (.category-section) not found. Check HTML class names."
      );
      return;
    }
  
    // Show all products by default when the page loads
    filterProducts("all");
    // Make sure the "All" button is active initially - check if it exists first
    const allButton = document.querySelector('.filter-btn[data-filter="all"]');
    if (allButton) {
      allButton.classList.add("active");
    }
  
    // Add click event listener to each filter button
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Get the category to filter by from the button's data attribute
        const filterValue = button.getAttribute("data-filter");
  
        // Apply the filter to show/hide sections
        filterProducts(filterValue);
  
        // Update the visual state of the buttons (active class)
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
      });
    });
  
    // Function to show/hide product sections based on the filter
    function filterProducts(filter) {
      console.log("Filtering for:", filter); // Optional: Check if function runs
      productSections.forEach((section) => {
        // Find the category container inside the section to get its data-category
        const categoryContainer = section.querySelector(".category-container");
  
        // If the container or its data-category is missing, skip this section
        if (
          !categoryContainer ||
          !categoryContainer.hasAttribute("data-category")
        ) {
          console.warn(
            "Skipping section because .category-container or data-category is missing:",
            section
          );
          return;
        }
  
        const sectionCategory = categoryContainer.getAttribute("data-category");
  
        // Check if the section should be shown (matches the filter or filter is 'all')
        if (filter === "all" || filter === sectionCategory) {
          section.classList.remove("hidden"); // Show matching sections
          console.log("Showing:", sectionCategory); // Optional Check
        } else {
          section.classList.add("hidden"); // Hide non-matching sections
          console.log("Hiding:", sectionCategory); // Optional Check
        }
      });
    }
  });
  script.js