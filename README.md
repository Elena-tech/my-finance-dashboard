# Pulse Lite Dashboard (Work in Progress)

**Pulse Lite Dashboard** is a React + TypeScript project demonstrating an **Atomic Design** approach, **responsive layouts**, and **Recharts** for data visualization. The application includes:

1. **Hero Section**: A bold introductory section with a call-to-action button.  
2. **Single-Stat Sections**: Large, single-column blocks showcasing key metrics.  
3. **Charts Showcase**: A 2×2 grid of charts (using Recharts) that stack vertically on mobile.  
4. **Responsive NavBar**: A mobile-friendly hamburger menu.  
5. **Footer**: A simple footer at the bottom of each page.

## Features & Progress

- **Atomic Design Structure**: 
  - **Atoms** (e.g., `Button`, `Input`)  
  - **Molecules** (e.g., `StatsBox`)  
  - **Organisms** (e.g., `HeroSection`, `SingleStatSection`, `ChartsShowcaseSection`)  
  - **Templates** (e.g., `MainLayout`)  
  - **Pages** (e.g., `LandingPage`)

- **Responsive Design**: 
  - Fluid typography with `clamp()`  
  - Mobile nav toggles a hamburger menu  
  - Chart grids shift from 2×2 to 1×4 on smaller screens

- **Recharts Integration**: 
  - Placeholder data for line charts  
  - Ready for real/dynamic data integration

- **Work in Progress**: 
  - Additional sections (e.g., Resources, Subscribe) may be added  
  - Floating shapes/animations are not yet implemented  
  - Data fetching hooks (`useFetch`, etc.) can be integrated once real APIs are available

## Getting Started

1. **Clone the Repo**  
   ```bash
   git clone https://github.com/your-username/pulse-lite-dashboard.git
   cd pulse-lite-dashboard
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

3. **Run the Development Server**  
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

4. **View the Landing Page**  
   - You’ll see the **Hero** at the top, **Single-Stat** sections below, and the **Charts** section at the bottom.  
   - Resize the window to check responsive behavior (NavBar toggles, charts stack on mobile, etc.).

## Project Structure

```
src/
  components/
    atoms/         // e.g., Button, Input
    molecules/     // e.g., StatsBox
    organisms/     // e.g., HeroSection, SingleStatSection, ChartsShowcaseSection
    templates/     // e.g., MainLayout
    pages/         // e.g., LandingPage
  hooks/           // Custom hooks (useFetch, etc.) if needed
  styles/          // GlobalStyles.css + subfolders for each Atomic level
  App.tsx          // Routing & Main App
  index.tsx        // Entry point
```

## Next Steps

- **Add Additional Sections**: Resources or Subscribe forms.  
- **Integrate Real Data**: Replace placeholder arrays in chart components with live API data.  
- **Enhance Animations**: Possibly add floating shapes, parallax, or Framer Motion for transitions.

---

Feel free to open issues or pull requests if you have suggestions or find bugs. This project is a **work in progress**, so expect ongoing changes and new features!
