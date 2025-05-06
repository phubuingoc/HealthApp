# Health Project
## 🚀 How to Run
```bash
npm install
npm start
```

## 📄 Overview
This is a React + Tailwind CSS frontend project that replicates the UI from a provided design. The project focuses on implementing two APIs: chartApi and foodApi.
Other APIs follow a similar implementation pattern.

 ## 📁 Project Structure
```bash
project-root/
├── public/                         # Static files
│   ├── images/                     # Static images
│   └── index.html                  # HTML template
│
├── src/                            # Source code root
│   ├── api/                        # API service functions
│   │   ├── chartApi.js             # Chart-related API functions
│   │   └── foodApi.js              # Food-related API functions
│
│   ├── assets/
│   │   └── styles/
│   │       └── styles.css          # Global CSS styling
│
│   ├── components/                 # Shared UI components used across multiple pages
│   │   ├── Card.jsx
│   │   ├── DiaryCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   └── ScrollToTop.jsx
│
│   ├── data/                       # Mock data used for development or testing
│   │   ├── mockBlogCards.js
│   │   ├── mockChartData.js
│   │   ├── mockChartDataTopPage.js
│   │   ├── mockDiaryData.js
│   │   ├── mockExerciseData.js
│   │   ├── mockFoods.js
│   │   ├── mockRecommendItems.js
│   │   └── mockRecordCards.js
│
│   ├── pages/                      # Main application pages
│   │
│   │   ├── ColumnPage/             # ColumnPage view
│   │   │   ├── components/         # Local components for ColumnPage
│   │   │   │   ├── BlogCard.jsx
│   │   │   │   ├── BlogGrid.jsx
│   │   │   │   ├── RecommendCard.jsx
│   │   │   │   └── RecommendGrid.jsx
│   │   │   ├── ColumnPage.jsx
│   │   │   └── index.js
│   │
│   │   ├── MyRecord/               # MyRecord page
│   │   │   ├── components/         # Local components for MyRecord
│   │   │   │   ├── BodyRecordChart.jsx
│   │   │   │   ├── DiaryList.jsx
│   │   │   │   ├── ExerciseList.jsx
│   │   │   │   └── RecordCard.jsx
│   │   │   ├── MyRecord.jsx
│   │   │   └── index.js
│   │
│   │   └── TopPage/                # Home or main landing page
│   │       ├── components/         # Local components for TopPage
│   │       │   ├── Banner.jsx
│   │       │   ├── CategoryTabs.jsx
│   │       │   ├── Chart.jsx
│   │       │   ├── FoodGrid.jsx
│   │       │   └── HeroSection.jsx
│   │       ├── TopPage.jsx
│   │       └── index.js
│
└── index.js                        # App entry point


```
 ## ⚙️ Features Implemented
✅ TopPage layout (Header, Chart, Tabs, Food Grid, Footer)

✅ MyRecord page (Chart, Exercise Log, Diary List)

✅ Responsive design using Tailwind CSS

✅ Scroll to top on route change

✅ API simulation with fallback to mock data

✅ Component-based architecture

✅ Folder structure consistent and maintainable


 ## 🧭 Developer Guidelines
Shared Components
Place reusable components used across multiple pages in the src/components/ directory.

Page-Specific Components
Place components that are only used within a specific page inside the components/ subfolder of that page’s directory.

Mock Data
All development and test data are stored in the src/data/ folder.

API Calls
Use src/api/ for organizing your network request logic.

Styling
Global CSS styles are in src/assets/styles/styles.css. Consider using CSS modules or styled-components for more scoped styles if needed.
