Here is an updated version of the README file that incorporates all the recent changes and updates we have discussed:
# Next.js Portfolio Site for Muhammad Hamza

This is a Next.js-based portfolio website showcasing the professional journey, skills, and projects of Muhammad Hamza. The website features a dynamic portfolio with React and Next.js, focusing on maintainability, scalability, and ease of customization.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourgithubusername/nextjs-portfolio.git
   cd nextjs-portfolio
   ```
   
2. Install the dependencies:
   ```bash
   npm install
   ```
   or if you're using Yarn:
   ```bash
   yarn install
   ```

### Running the Project

- Development:
  ```bash
  npm run dev
  ```
  Visit `http://localhost:3000` to view your portfolio.

- Build for Production:
  ```bash
  npm run build
  npm start
  ```

## ✨ Features

- **React and Next.js**: Built with React and Next.js for SSR and SEO optimization.
- **Responsive Design**: Fully responsive design to look great on all devices.
- **Dynamic Content**: Easy-to-manage JSON data for projects, experience, and skills.
- **Dark Mode**: Integrated dark/light mode for user preference.
- **Portfolio and Case Studies**: Dedicated pages for project showcases.
- **Integration Ready**: Plans for integrating Sanity.io for CMS and MongoDB.

## 📌 Recent Updates

### **Dev Update — Current Progress**
#### **New Sections Added**
- **About Page**: 
  - Added new sections like "Skills that Pay the Bills" and "Polymath Foundations."
  - Each section now displays additional details about skills, programming languages, frameworks, data engineering tools, and favorite technologies, creating a more comprehensive profile.

- **Technical Page**: 
  - Integrated an additional image to the right side of the technical section for improved visual representation.
  - The image now dynamically expands/shrinks based on the number of left-side sections.

#### **Project Page Enhancements**
- **New Categories Added**: 
  - Introduced 4 primary categories: `Web`, `Python`, `Data Science`, and `AI&ML`.
  - Integrated category-based routing for filtering projects, and each project now correctly displays under its relevant category.
  - **Upcoming**: Support for multiple categories per project for enhanced filtering and representation.

- **Styling and Structure**: 
  - Adjusted styling for project cards to ensure uniform display across different screen sizes.
  - Enhanced the project thumbnails and ensured all images maintain consistent aspect ratios for a clean layout.

#### **GitHub and LinkedIn Buttons**
- **GitHub Integration**: 
  - Added GitHub links for each project, allowing direct access to source code or repositories.
- **LinkedIn Integration**: 
  - Integrated a "View on LinkedIn" button for projects with detailed case studies or publications available on LinkedIn.

#### **Articles Page Updates**
- **Image Updates**: 
  - Added relevant images to each article to improve engagement and provide visual context.
- **New Categories**: 
  - Organized articles into specific categories for easier navigation and access.

### **Dev Update — Upcoming Features**
- **TypeScript Integration**: 
  - Planning to migrate codebase to TypeScript for better type safety and development experience.
- **Sanity Integration**: 
  - Future integration with Sanity.io for easy CMS-based content management.

## 🛠️ Tech Stack

- **Frontend**: React, Next.js, SCSS
- **Backend**: Node.js
- **Styling**: TailwindCSS, SCSS
- **Database**: Planned integration with MongoDB
- **CMS**: Planned integration with Sanity.io
- **Testing**: Jest (setup in progress)

## 🔍 Pages Overview

| Page          | Description                                          |
|---------------|------------------------------------------------------|
| **About**     | Overview of professional journey and skills. Includes newly added sections with images and skill showcases.|
| **Projects**  | Showcases multiple projects with detailed pages, now includes routing for 4 main categories.|
| **Articles**  | Integration with Medium, Dev.to, and HackerNoon APIs with categorized images.|
| **Case Studies** | Detailed pages for specific projects and experiences.|

## 💻 How to Contribute

Contributions are welcome! Please fork the repo and create a pull request. Here’s how:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## 🧪 Testing

Jest has been set up, but test cases are still in development. If you want to contribute, feel free to add your own test cases!

To run tests, use:
```bash
npm test
```

## 🗺️ Roadmap

- [x] Completed: Added categories and routing on the Projects page
- [x] Completed: Improved image handling on the About and Technical pages
- [x] Integrated GitHub and LinkedIn buttons
- [ ] Integration with MongoDB for dynamic data
- [ ] Set up Sanity.io for CMS
- [ ] Complete Jest test coverage
- [ ] Full migration to Next.js v13 with `/app` folder architecture
- [ ] TypeScript integration

## 🌐 Deployment

To deploy this project, connect your GitHub repository to your hosting provider (e.g., Vercel or Netlify), and it will automatically deploy upon pushing changes to the main branch.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 💼 License

This project is licensed under the MIT License.

## 🤝 Acknowledgements

- Thanks to [Webflow](https://webflow.com) for the integration tools.
- Shoutout to the Next.js community for making development fun!

## 📣 Final Thoughts

This is my first open-source contribution, and I had a blast building this portfolio! I hope it helps others learn about React, Next.js, and building a personal portfolio. Happy coding!