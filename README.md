# React GitHub Popular Repos

## 📝 About the Project
**GitHub Popular Repos** is a dynamic React application that connects with GitHub's API to fetch and display trending repositories. Users can explore popular open-source projects, search for specific technologies, and view key repository metrics like stars, forks, and descriptions. The app features responsive design, real-time data fetching, and intuitive error handling - making it a perfect tool for developers to discover trending projects on GitHub.

## 🚀 Live Demo
[Click here to view the demo](https://Darshanas17.github.io/react-github-popular-repos/)

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/github-popular-repos-output.gif" alt="github popular repos output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>



### 📌 Overview
The application provides a clean interface to:
- Browse GitHub's most popular repositories
- Search for repositories by name or technology
- View essential repository details at a glance
- Understand project popularity through star ratings

### ✨ Features
- **Real-time GitHub API Integration:** Fetches live repository data directly from GitHub
- **Interactive Search:** Filter repositories by name, language, or keywords
- **Responsive UI:** Works seamlessly across devices
- **Visual Feedback:** 
  - Loading animations during data fetch
  - Error messages for failed requests
  - Success states with repository cards
- **Repository Details Display:**
  - Project name and owner
  - Star and fork counts
  - Description and primary language
  - Last updated timestamp

### 🛠️ Tech Stack
- **Frontend:** React.js (Functional Components with Hooks)
- **Styling:** CSS3 (Flexbox and Grid Layouts)
- **State Management:** React useState and useEffect
- **API Integration:** GitHub REST API
- **Build Tool:** Create React App
- **Deployment:** GitHub Pages

### ⚙️ Installation & Setup
```bash
# Clone the repository
git clone https://github.com/Darshanas17/react-github-popular-repos.git

# Navigate to project directory
cd react-github-popular-repos

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### 📁 Project Structure
```
src/
├── components/
│   ├── GitHubRepos/       # Main container component
│   │   ├── index.js       # API fetching logic
│   │   └── styles.css     # Component styles
│   └── RepoItem/          # Individual repo card
│       ├── index.js       # Card rendering
│       └── styles.css     # Card styles
├── App.js                 # Root component
└── index.js               # Entry point
```

### 📷 Application States
| State | Preview |
|-------|---------|
| **Success** | ![Success](https://assets.ccbp.in/frontend/content/react-js/github-repos-lg-success-output.png) |
| **Loading** | ![Loading](https://assets.ccbp.in/frontend/content/react-js/github-repos-lg-loading-output.png) |
| **Error** | ![Failure](https://assets.ccbp.in/frontend/content/react-js/github-repos-error-view-lg-output.png) |

### 👨‍💻 Author
**Darshan A S**  
- [GitHub Profile](https://github.com/Darshanas17)  
- [LinkedIn](https://www.linkedin.com/in/darshan-a-s/)  
- [Portfolio](https://darshanas17.github.io/darshan-as-17-portfolio/)  

### 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<br/>
<div style="text-align: center; margin-top: 20px;">
    <sub>Built with ❤️ and React</sub>
</div>
