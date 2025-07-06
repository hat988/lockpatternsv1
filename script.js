/* Custom Pattern Preloader JavaScript */
window.addEventListener("load", () => {
    const preloader = document.getElementById("custom-preloader");
    if (preloader) {
        // Ensure preloader stays for at least 3 seconds
        setTimeout(() => {
            preloader.classList.add("hidden");
            // Remove preloader from DOM after transition to ensure it doesn't interfere with interactions
            preloader.addEventListener("transitionend", () => {
                preloader.remove();
            });
        }, 3000); // 3 seconds
    }
});






document.addEventListener("DOMContentLoaded", () => {
// Function to initialize the app once patterns are loaded
function initializeApp() {
    console.log("DOMContentLoaded fired");
    
    const patternGrid = document.querySelector(".pattern-grid");
    const paginationContainer = document.querySelector(".pagination");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const difficultyFilter = document.getElementById("difficulty-filter");
    
    console.log("Elements found:", {
        patternGrid: !!patternGrid,
        paginationContainer: !!paginationContainer,
        searchInput: !!searchInput,
        searchButton: !!searchButton,
        difficultyFilter: !!difficultyFilter
    });
    
    // Check if allPatterns is loaded
    if (typeof allPatterns === 'undefined') {
        console.error("allPatterns is not defined. Patterns.js may not have loaded properly.");
        // Try again after a short delay
        setTimeout(initializeApp, 100);
        return;
    }
    
    const patternsPerPage = 10;
    let currentPage = 1;
    let filteredPatterns = [...allPatterns];
    let totalPages = Math.ceil(filteredPatterns.length / patternsPerPage);

    console.log("Initial state:", {
        allPatternsLength: allPatterns.length,
        filteredPatternsLength: filteredPatterns.length,
        totalPages: totalPages
    });

    // Add difficulty property to patterns
    allPatterns.forEach((pattern, index) => {
        if (index < 34) pattern.difficulty = "easy";
        else if (index < 67) pattern.difficulty = "medium";
        else pattern.difficulty = "hard";
    });

    // Function to create SVG pattern lock
    function createPatternLock(patternData) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 200 200");
        svg.classList.add("pattern-svg");

        // Create dots
        const dots = [];
        for (let i = 0; i < 9; i++) {
            const row = Math.floor(i / 3);
            const col = i % 3;
            const x = 50 + col * 50;
            const y = 50 + row * 50;

            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", x);
            circle.setAttribute("cy", y);
            circle.setAttribute("r", "8");
            circle.classList.add("pattern-dot");
            
            if (patternData.path.includes(i)) {
                circle.classList.add("active");
            }
            
            svg.appendChild(circle);
            dots.push({ x, y });
        }

        // Create lines
        const pathGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        pathGroup.classList.add("pattern-path");
        
        for (let i = 0; i < patternData.path.length - 1; i++) {
            const startDot = dots[patternData.path[i]];
            const endDot = dots[patternData.path[i + 1]];
            
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", startDot.x);
            line.setAttribute("y1", startDot.y);
            line.setAttribute("x2", endDot.x);
            line.setAttribute("y2", endDot.y);
            line.classList.add("pattern-line");
            line.style.setProperty("--animation-delay", `${i * 0.3}s`);
            
            pathGroup.appendChild(line);
        }
        
        svg.appendChild(pathGroup);
        return svg;
    }

    // Function to render a single pattern lock
    function renderPatternLock(patternData) {
        console.log("renderPatternLock called for:", patternData.name);
        
        const patternCard = document.createElement("div");
        patternCard.classList.add("pattern-card", "loading");
        
        const title = document.createElement("h3");
        title.textContent = patternData.name;
        
        // Add numerical navigation display
        const numericalNav = document.createElement("div");
        numericalNav.classList.add("numerical-navigation");
        const pathNumbers = patternData.path.map(index => index + 1).join(" > ");
        numericalNav.textContent = pathNumbers;
        
        const canvasContainer = document.createElement("div");
        canvasContainer.classList.add("pattern-canvas-container");
        
        const svg = createPatternLock(patternData);
        canvasContainer.appendChild(svg);
        
        // Add difficulty badge
        const difficultyBadge = document.createElement("div");
        difficultyBadge.classList.add("difficulty-badge", patternData.difficulty);
        difficultyBadge.textContent = patternData.difficulty.charAt(0).toUpperCase() + patternData.difficulty.slice(1);
        
        patternCard.appendChild(title);
        patternCard.appendChild(numericalNav);
        patternCard.appendChild(canvasContainer);
        patternCard.appendChild(difficultyBadge);
        
        // Add loading to loaded transition
        setTimeout(() => {
            patternCard.classList.remove("loading");
            patternCard.classList.add("loaded");
        }, 100);
        
        console.log("Pattern card created for:", patternData.name);
        return patternCard;
    }

    // Function to start animations
    function startAnimations() {
        const lines = document.querySelectorAll(".pattern-line");
        lines.forEach(line => {
            line.style.animationPlayState = 'running';
        });
    }

    // Function to filter patterns
    function filterPatterns() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedDifficulty = difficultyFilter.value;
        
        filteredPatterns = allPatterns.filter(pattern => {
            const matchesSearch = pattern.name.toLowerCase().includes(searchTerm);
            const matchesDifficulty = !selectedDifficulty || pattern.difficulty === selectedDifficulty;
            return matchesSearch && matchesDifficulty;
        });
        
        totalPages = Math.ceil(filteredPatterns.length / patternsPerPage);
        currentPage = 1;
        renderCurrentPage();
        setupPagination();
    }

    // Function to render patterns for current page
    function renderCurrentPage() {
        console.log("renderCurrentPage called");
        patternGrid.innerHTML = "";
        
        if (filteredPatterns.length === 0) {
            console.log("No patterns to display");
            const noResults = document.createElement("div");
            noResults.classList.add("no-results");
            noResults.innerHTML = "<h3>No patterns found</h3><p>Try adjusting your search or filter criteria.</p>";
            patternGrid.appendChild(noResults);
            return;
        }
        
        const startIndex = (currentPage - 1) * patternsPerPage;
        const endIndex = Math.min(startIndex + patternsPerPage, filteredPatterns.length);
        const currentPatterns = filteredPatterns.slice(startIndex, endIndex);
        
        console.log("Rendering patterns:", {
            startIndex,
            endIndex,
            currentPatternsLength: currentPatterns.length
        });
        
        currentPatterns.forEach((pattern, index) => {
            console.log(`Rendering pattern ${index}:`, pattern.name);
            const patternCard = renderPatternLock(pattern);
            patternGrid.appendChild(patternCard);
            console.log("Pattern card appended to grid");

            // Start animation for each pattern card
            const lines = patternCard.querySelectorAll(".pattern-line");
            lines.forEach(line => {
                line.style.animationPlayState = 'running';
            });
        });
        
        console.log("Patterns rendered, grid children:", patternGrid.children.length);
    }

    // Function to setup pagination
    function setupPagination() {
        paginationContainer.innerHTML = "";
        
        if (totalPages <= 1) return;
        
        const paginationInfo = document.createElement("div");
        paginationInfo.classList.add("pagination-info");
        paginationInfo.textContent = `Page ${currentPage} of ${totalPages}`;
        
        const paginationControls = document.createElement("div");
        paginationControls.classList.add("pagination-controls");
        
        const prevButton = document.createElement("button");
        prevButton.textContent = "Previous";
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                renderCurrentPage();
                setupPagination();
            }
        });
        
        const nextButton = document.createElement("button");
        nextButton.textContent = "Next";
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener("click", () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderCurrentPage();
                setupPagination();
            }
        });
        
        paginationControls.appendChild(prevButton);
        paginationControls.appendChild(nextButton);
        
        const pageJumpContainer = document.createElement("div");
        pageJumpContainer.classList.add("page-jump-container");
        
        const pageJumpInput = document.createElement("input");
        pageJumpInput.setAttribute("type", "number");
        pageJumpInput.setAttribute("min", "1");
        pageJumpInput.setAttribute("max", totalPages);
        pageJumpInput.setAttribute("value", currentPage);
        pageJumpInput.classList.add("page-jump-input");
        
        const pageJumpButton = document.createElement("button");
        pageJumpButton.textContent = "Go";
        pageJumpButton.classList.add("page-jump-button");
        
        pageJumpButton.addEventListener("click", () => {
            const page = parseInt(pageJumpInput.value);
            if (page >= 1 && page <= totalPages) {
                currentPage = page;
                renderCurrentPage();
                setupPagination();
            } else {
                alert(`Please enter a page number between 1 and ${totalPages}`);
                pageJumpInput.value = currentPage; // Reset input to current page
            }
        });
        
        pageJumpInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                pageJumpButton.click();
            }
        });
        
        pageJumpContainer.appendChild(pageJumpInput);
        pageJumpContainer.appendChild(pageJumpButton);
        
        paginationControls.appendChild(pageJumpContainer);
        
        paginationContainer.appendChild(paginationInfo);
        paginationContainer.appendChild(paginationControls);
    }

    // Event listeners
    searchButton.addEventListener("click", filterPatterns);
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            filterPatterns();
        }
    });
    difficultyFilter.addEventListener("change", filterPatterns);

    // Initialize the page
    console.log("Initializing page...");
    renderCurrentPage();
    setupPagination();
    console.log("Page initialization complete");
}

// Start the initialization
initializeApp();
});

