// Vega-Lite Charts with Embedded Data
// This version includes comprehensive error handling and logging

console.log('=== Vega Charts Script Loaded ===');

// Survey data - embedded to avoid CORS issues
const surveyData = [
    {"video game genre": "Puzzles", "food": "Shawarma", "tiredness": 100, "one piece": 5, "taylor swift": 5, "marvel movies": 7, "screen time": 67, "phone battery": 67},
    {"video game genre": "RPG", "food": "Ramen", "tiredness": 80, "one piece": 8, "taylor swift": 5, "marvel movies": 5, "screen time": 250, "phone battery": 83},
    {"video game genre": "Action", "food": "Biryani", "tiredness": 80, "one piece": 9, "taylor swift": 5, "marvel movies": 5, "screen time": 339, "phone battery": 86},
    {"video game genre": "Action", "food": "Hamburger", "tiredness": 100, "one piece": 2, "taylor swift": 1, "marvel movies": 9, "screen time": 300, "phone battery": 75},
    {"video game genre": "Action", "food": "Steak", "tiredness": 60, "one piece": 7, "taylor swift": 4, "marvel movies": 6, "screen time": 617, "phone battery": 19},
    {"video game genre": "Shooter", "food": "Dumpling", "tiredness": 99, "one piece": 5, "taylor swift": 5, "marvel movies": 3, "screen time": 300, "phone battery": 34},
    {"video game genre": "Puzzles", "food": "Ramen", "tiredness": 100, "one piece": 9, "taylor swift": 5, "marvel movies": 6, "screen time": 362, "phone battery": 54},
    {"video game genre": "Sports", "food": "Ramen", "tiredness": 88, "one piece": 3, "taylor swift": 7, "marvel movies": 9, "screen time": 188, "phone battery": 81},
    {"video game genre": "Strategy", "food": "Pasta", "tiredness": 80, "one piece": 5, "taylor swift": 9, "marvel movies": 8, "screen time": 94, "phone battery": 40},
    {"video game genre": "Simluation", "food": "Lasagna", "tiredness": 80, "one piece": 5, "taylor swift": 6, "marvel movies": 2, "screen time": 240, "phone battery": 27},
    {"video game genre": "Shooter", "food": "Sushi", "tiredness": 70, "one piece": 7, "taylor swift": 5, "marvel movies": 1, "screen time": 360, "phone battery": 32},
    {"video game genre": "Strategy", "food": "Sushi", "tiredness": 30, "one piece": 6, "taylor swift": 8, "marvel movies": 9, "screen time": 350, "phone battery": 96},
    {"video game genre": "Action", "food": "Sashimi", "tiredness": 67, "one piece": 9, "taylor swift": 1, "marvel movies": 5, "screen time": 452, "phone battery": 52},
    {"video game genre": "Action", "food": "Ramen", "tiredness": 94, "one piece": 5, "taylor swift": 3, "marvel movies": 4, "screen time": 321, "phone battery": 34},
    {"video game genre": "Shooter", "food": "Hamburger", "tiredness": 30, "one piece": 9, "taylor swift": 4, "marvel movies": 7, "screen time": 240, "phone battery": 65},
    {"video game genre": "Adventure", "food": "Sushi", "tiredness": 20, "one piece": 5, "taylor swift": 5, "marvel movies": 5, "screen time": 262, "phone battery": 13},
    {"video game genre": "Puzzles", "food": "Shawarma", "tiredness": 80, "one piece": 2, "taylor swift": 1, "marvel movies": 6, "screen time": 360, "phone battery": 60},
    {"video game genre": "Action", "food": "Pasta", "tiredness": 70, "one piece": 9, "taylor swift": 6, "marvel movies": 6, "screen time": 367, "phone battery": 41},
    {"video game genre": "RPG", "food": "Dumpling", "tiredness": 100, "one piece": 7, "taylor swift": 5, "marvel movies": 4, "screen time": 67, "phone battery": 1},
    {"video game genre": "Puzzles", "food": "Pasta", "tiredness": 76, "one piece": 8, "taylor swift": 3, "marvel movies": 5, "screen time": 342, "phone battery": 77},
    {"video game genre": "Action", "food": "Sushi", "tiredness": 35, "one piece": 8, "taylor swift": 4, "marvel movies": 5, "screen time": 240, "phone battery": 49},
    {"video game genre": "Action-adventure", "food": "Lasagna", "tiredness": 100, "one piece": 8, "taylor swift": 5, "marvel movies": 7, "screen time": 900, "phone battery": 30},
    {"video game genre": "Puzzles", "food": "Steak", "tiredness": 35, "one piece": 5, "taylor swift": 8, "marvel movies": 9, "screen time": 360, "phone battery": 73},
    {"video game genre": "Adventure", "food": "Lasagna", "tiredness": 89, "one piece": 2, "taylor swift": 1, "marvel movies": 4, "screen time": 332, "phone battery": 43},
    {"video game genre": "Shooter", "food": "Biryani", "tiredness": 80, "one piece": 5, "taylor swift": 2, "marvel movies": 9, "screen time": 283, "phone battery": 36},
    {"video game genre": "Strategy", "food": "Pasta", "tiredness": 89, "one piece": 7, "taylor swift": 7, "marvel movies": 3, "screen time": 340, "phone battery": 89},
    {"video game genre": "Adventure", "food": "Ramen", "tiredness": 75, "one piece": 4, "taylor swift": 8, "marvel movies": 6, "screen time": 780, "phone battery": 17},
    {"video game genre": "Strategy", "food": "Pizza", "tiredness": 60, "one piece": 5, "taylor swift": 1, "marvel movies": 3, "screen time": 382, "phone battery": 75},
    {"video game genre": "Action", "food": "Sushi", "tiredness": 30, "one piece": 7, "taylor swift": 6, "marvel movies": 6, "screen time": 614, "phone battery": 34},
    {"video game genre": "Puzzles", "food": "Biryani", "tiredness": 90, "one piece": 9, "taylor swift": 5, "marvel movies": 6, "screen time": 156, "phone battery": 43},
    {"video game genre": "Shooter", "food": "Steak", "tiredness": 100, "one piece": 9, "taylor swift": 1, "marvel movies": 5, "screen time": 120, "phone battery": 67},
    {"video game genre": "Simluation", "food": "Sushi", "tiredness": 60, "one piece": 5, "taylor swift": 5, "marvel movies": 5, "screen time": 505, "phone battery": 75},
    {"video game genre": "RPG", "food": "Shawarma", "tiredness": 65, "one piece": 8, "taylor swift": 5, "marvel movies": 6, "screen time": 147, "phone battery": 17},
    {"video game genre": "Action-adventure", "food": "Ramen", "tiredness": 80, "one piece": 5, "taylor swift": 5, "marvel movies": 7, "screen time": 360, "phone battery": 63},
    {"video game genre": "Shooter", "food": "Dumpling", "tiredness": 89, "one piece": 6, "taylor swift": 9, "marvel movies": 6, "screen time": 193, "phone battery": 65},
    {"video game genre": "Shooter", "food": "Lasagna", "tiredness": 40, "one piece": 5, "taylor swift": 3, "marvel movies": 6, "screen time": 343, "phone battery": 99},
    {"video game genre": "Puzzles", "food": "Steak", "tiredness": 60, "one piece": 5, "taylor swift": 4, "marvel movies": 9, "screen time": 310, "phone battery": 21},
    {"video game genre": "Adventure", "food": "Shawarma", "tiredness": 85, "one piece": 2, "taylor swift": 2, "marvel movies": 2, "screen time": 215, "phone battery": 16},
    {"video game genre": "Action", "food": "Steak", "tiredness": 60, "one piece": 7, "taylor swift": 1, "marvel movies": 6, "screen time": 600, "phone battery": 55},
    {"video game genre": "Shooter", "food": "Pizza", "tiredness": 100, "one piece": 1, "taylor swift": 1, "marvel movies": 5, "screen time": 67, "phone battery": 17},
    {"video game genre": "Action-adventure", "food": "Shawarma", "tiredness": 40, "one piece": 5, "taylor swift": 3, "marvel movies": 7, "screen time": 300, "phone battery": 52},
    {"video game genre": "Action-adventure", "food": "Shawarma", "tiredness": 90, "one piece": 6, "taylor swift": 4, "marvel movies": 6, "screen time": 198, "phone battery": 68},
    {"video game genre": "RPG", "food": "Sushi", "tiredness": 60, "one piece": 5, "taylor swift": 4, "marvel movies": 5, "screen time": 225, "phone battery": 63},
    {"video game genre": "RPG", "food": "Shawarma", "tiredness": 50, "one piece": 5, "taylor swift": 1, "marvel movies": 6, "screen time": 606, "phone battery": 44},
    {"video game genre": "Simluation", "food": "Dumpling", "tiredness": 67, "one piece": 6, "taylor swift": 7, "marvel movies": 6, "screen time": 67, "phone battery": 67},
    {"video game genre": "Adventure", "food": "Steak", "tiredness": 50, "one piece": 1, "taylor swift": 4, "marvel movies": 1, "screen time": 102, "phone battery": 50},
    {"video game genre": "Shooter", "food": "Steak", "tiredness": 70, "one piece": 7, "taylor swift": 7, "marvel movies": 8, "screen time": 234, "phone battery": 68},
    {"video game genre": "Strategy", "food": "Chicken Curry", "tiredness": 90, "one piece": 3, "taylor swift": 7, "marvel movies": 2, "screen time": 108, "phone battery": 34},
    {"video game genre": "Shooter", "food": "Hamburger", "tiredness": 60, "one piece": 5, "taylor swift": 5, "marvel movies": 5, "screen time": 384, "phone battery": 22},
    {"video game genre": "Action-adventure", "food": "Steak", "tiredness": 20, "one piece": 5, "taylor swift": 5, "marvel movies": 7, "screen time": 720, "phone battery": 61},
    {"video game genre": "Shooter", "food": "Dumpling", "tiredness": 100, "one piece": 3, "taylor swift": 2, "marvel movies": 1, "screen time": 500, "phone battery": 40},
    {"video game genre": "Adventure", "food": "Sushi", "tiredness": 70, "one piece": 3, "taylor swift": 9, "marvel movies": 7, "screen time": 120, "phone battery": 38},
    {"video game genre": "Action-adventure", "food": "Biryani", "tiredness": 100, "one piece": 1, "taylor swift": 5, "marvel movies": 7, "screen time": 200, "phone battery": 99},
    {"video game genre": "Adventure", "food": "Sushi", "tiredness": 62, "one piece": 5, "taylor swift": 5, "marvel movies": 6, "screen time": 192, "phone battery": 66},
    {"video game genre": "Action-adventure", "food": "Biryani", "tiredness": 60, "one piece": 5, "taylor swift": 3, "marvel movies": 3, "screen time": 314, "phone battery": 76},
    {"video game genre": "Sports", "food": "Fried Rice", "tiredness": 100, "one piece": 1, "taylor swift": 3, "marvel movies": 1, "screen time": 378, "phone battery": 62},
    {"video game genre": "Adventure", "food": "Fried Chicken", "tiredness": 99, "one piece": 8, "taylor swift": 6, "marvel movies": 9, "screen time": 800, "phone battery": 4},
    {"video game genre": "RPG", "food": "Steak", "tiredness": 100, "one piece": 5, "taylor swift": 5, "marvel movies": 5, "screen time": 1000, "phone battery": 100},
    {"video game genre": "RPG", "food": "Lasagna", "tiredness": 80, "one piece": 6, "taylor swift": 2, "marvel movies": 2, "screen time": 120, "phone battery": 85},
    {"video game genre": "Action", "food": "Buffalo Wings", "tiredness": 50, "one piece": 5, "taylor swift": 5, "marvel movies": 7, "screen time": 176, "phone battery": 74},
    {"video game genre": "Shooter", "food": "Pizza", "tiredness": 80, "one piece": 6, "taylor swift": 6, "marvel movies": 7, "screen time": 483, "phone battery": 100},
    {"video game genre": "Strategy", "food": "Steak", "tiredness": 99, "one piece": 9, "taylor swift": 1, "marvel movies": 7, "screen time": 197, "phone battery": 43}
];

console.log('Survey data loaded:', surveyData.length, 'records');

// Check if Vega libraries are loaded
function checkLibraries() {
    if (typeof vega === 'undefined') {
        console.error('ERROR: Vega library not loaded');
        return false;
    }
    if (typeof vegaLite === 'undefined') {
        console.error('ERROR: Vega-Lite library not loaded');
        return false;
    }
    if (typeof vegaEmbed === 'undefined') {
        console.error('ERROR: Vega-Embed library not loaded');
        return false;
    }
    console.log('✓ All Vega libraries loaded successfully');
    return true;
}

// Visualization 1: Genre Distribution
function createVis1() {
    return {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "title": "Distribution of Video Game Genre Preferences",
        "width": 700,
        "height": 400,
        "data": {"values": surveyData},
        "mark": {"type": "bar", "tooltip": true},
        "encoding": {
            "x": {
                "field": "video game genre",
                "type": "nominal",
                "title": "Video Game Genre",
                "axis": {"labelAngle": -45},
                "sort": "-y"
            },
            "y": {
                "aggregate": "count",
                "type": "quantitative",
                "title": "Number of Respondents"
            },
            "color": {
                "field": "video game genre",
                "type": "nominal",
                "scale": {"scheme": "category20"},
                "legend": null
            }
        }
    };
}

// Visualization 2: Screen Time vs Battery
function createVis2() {
    return {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "title": "Screen Time vs Phone Battery Level",
        "width": 700,
        "height": 400,
        "data": {"values": surveyData},
        "mark": {"type": "circle", "size": 100, "opacity": 0.7, "tooltip": true},
        "encoding": {
            "x": {
                "field": "screen time",
                "type": "quantitative",
                "title": "Daily Screen Time (minutes)",
                "scale": {"domain": [0, 1200]}
            },
            "y": {
                "field": "phone battery",
                "type": "quantitative",
                "title": "Phone Battery (%)",
                "scale": {"domain": [0, 100]}
            },
            "color": {
                "field": "tiredness",
                "type": "quantitative",
                "title": "Tiredness",
                "scale": {"scheme": "redyellowgreen", "reverse": true}
            }
        }
    };
}

// Visualization 3: Entertainment Ratings
function createVis3() {
    return {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "title": "Distribution of Entertainment Ratings",
        "width": 700,
        "height": 400,
        "data": {"values": surveyData},
        "transform": [
            {"fold": ["one piece", "taylor swift", "marvel movies"], "as": ["Category", "Rating"]}
        ],
        "mark": {"type": "boxplot", "extent": "min-max"},
        "encoding": {
            "x": {"field": "Category", "type": "nominal", "title": "Entertainment Category"},
            "y": {
                "field": "Rating",
                "type": "quantitative",
                "title": "Rating (1-10)",
                "scale": {"domain": [0, 10]}
            },
            "color": {
                "field": "Category",
                "type": "nominal",
                "scale": {
                    "domain": ["one piece", "taylor swift", "marvel movies"],
                    "range": ["#1a1a1a", "#666666", "#999999"]
                }
            }
        }
    };
}

// Visualization 4: Tiredness by Food
function createVis4() {
    return {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "title": "Average Tiredness Level by Favorite Food",
        "width": 700,
        "height": 400,
        "data": {"values": surveyData},
        "mark": {"type": "bar", "tooltip": true},
        "encoding": {
            "x": {
                "field": "food",
                "type": "nominal",
                "title": "Favorite Food",
                "axis": {"labelAngle": -45},
                "sort": "-y"
            },
            "y": {
                "field": "tiredness",
                "type": "quantitative",
                "aggregate": "mean",
                "title": "Average Tiredness Level",
                "scale": {"domain": [0, 100]}
            },
            "color": {
                "field": "tiredness",
                "type": "quantitative",
                "aggregate": "mean",
                "scale": {"range": ["#f5f5f5", "#1a1a1a"]},
                "legend": {"title": "Avg Tiredness"}
            }
        }
    };
}

// Render a single visualization with error handling
async function renderVisualization(containerId, spec, name) {
    try {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container ${containerId} not found`);
            return;
        }
        
        console.log(`Rendering ${name}...`);
        await vegaEmbed(`#${containerId}`, spec, {
            actions: {export: true, source: false, compiled: false, editor: false},
            theme: 'latimes'
        });
        console.log(`✓ ${name} rendered successfully`);
    } catch (error) {
        console.error(`✗ Error rendering ${name}:`, error);
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `<p style="color: red; padding: 20px;">Error loading chart: ${error.message}</p>`;
        }
    }
}

// Main render function
async function renderAllVisualizations() {
    console.log('=== Starting visualization rendering ===');
    
    // Check if libraries are loaded
    if (!checkLibraries()) {
        console.error('Cannot render: Vega libraries not loaded');
        return;
    }
    
    // Small delay to ensure DOM is fully ready
    await new Promise(resolve => setTimeout(resolve, 100));
    
    try {
        await renderVisualization('vis1', createVis1(), 'Visualization 1 (Genre Distribution)');
        await renderVisualization('vis2', createVis2(), 'Visualization 2 (Screen Time vs Battery)');
        await renderVisualization('vis3', createVis3(), 'Visualization 3 (Entertainment Ratings)');
        await renderVisualization('vis4', createVis4(), 'Visualization 4 (Tiredness by Food)');
        
        console.log('=== All visualizations rendered ===');
    } catch (error) {
        console.error('Fatal error during rendering:', error);
    }
}

// Initialize - try multiple approaches
function initializeVisualizations() {
    console.log('Initializing visualizations...');
    console.log('Document ready state:', document.readyState);
    
    if (document.readyState === 'loading') {
        console.log('Waiting for DOMContentLoaded...');
        document.addEventListener('DOMContentLoaded', renderAllVisualizations);
    } else {
        console.log('DOM already loaded, rendering immediately...');
        renderAllVisualizations();
    }
}

// Start initialization
initializeVisualizations();
