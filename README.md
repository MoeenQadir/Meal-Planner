# Meal Planner Project

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Installation](#installation)
5. [Running the Project](#running-the-project)
6. [Components](#components)
    - [Navbar](#navbar)
    - [LeftBar](#leftbar)
    - [DashBoard](#main)
    - [MealCard](#mealcard)
    - [EmptyCard](#emptycard)
    - [Sidebar](#sidebar)
7. [Redux Setup](#redux-setup)
    - [mealPlanSlice](#mealplanslice)
8. [Styling](#styling)
9. [Responsive Design](#responsive-design)
10. [Draggable Functionality](#draggable-functionality)
11. [API Integration](#api-integration)
12. [Deployment](#deployment)

## Project Overview
The Meal Planner project is a web application designed to help users plan their meals for a week. It allows users to drag and drop meal cards to different days and meal types, add new recipes from a sidebar, and generate a shopping list based on the planned meals.

## Tech Stack
- **Frontend:** React, Redux, Tailwind CSS
- **Libraries:** React-Beautiful-DnD, FontAwesome
- **Deployment:** Netlify

## Project Structure
meal-planner/
├── public/
│ ├── index.html
│ └── assets/
│ └── img/
│ └── bg.png
├── src/
│ ├── assets/
│ │ └── components/
│ │ ├── Navbar.js
│ │ ├── LeftBar.js
│ │ ├── DashBoard.js
│ │ ├── MealCard.js
│ │ ├── EmptyCard.js
│ │ └── Sidebar.js
│ ├── features/
│ │ └── mealPlan/
│ │ └── mealPlanSlice.js
│ ├── App.js
│ ├── index.js
│ └── index.css
├── package.json
└── README.md




## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/MoeenQadir/Meal-Planner.git
    cd meal-planner
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```

## Running the Project
To start the development server:
```bash
npm start
