# My Coursework Portfolio

This repository is my **MigraCode Coursework Portfolio**, containing all my project work and activities organized by module.

Each folder is a Git submodule linked to my personal fork of the MigraCode coursework templates.

## Structure

| Module | Folder | Description |
| --- | --- | --- |
| Onboarding | [`Module-Onboarding`](./Module-Onboarding/) | Introductory phase — course workflow, wireframes, form controls |
| Structuring and Testing Data | [`Module-Structuring-and-Testing-Data`](./Module-Structuring-and-Testing-Data/) | Data structuring, testing, JavaScript and Python intro |
| Data Groups | [`Module-Data-Groups`](./Module-Data-Groups/) | Arrays, objects, higher-order functions (3 sprints) |
| Data Flows | [`Module-Data-Flows`](./Module-Data-Flows/) | Async, fetch, EJS, debugging, unit testing |
| Tools | [`Module-Tools`](./Module-Tools/) | Shell tools, jq, pipelines, number systems, Python prep |
| Decomposition | [`Module-Decomposition`](./Module-Decomposition/) | Middleware, server decomposition, chat app |
| Legacy Code | [`Module-Legacy-Code`](./Module-Legacy-Code/) | Reading and working with existing codebases |
| Bikes for Refugees | [`bikes-for-refugees`](./bikes-for-refugees/) | HTML/CSS project — charity website rebuild |
| Bio Page Homework | [`bio-page-homework`](./bio-page-homework/) | Git workflow homework |
| Fix Errors Homework | [`fix-errors-homework`](./fix-errors-homework/) | Git workflow homework |
| Course Notes | [`course-notes`](./course-notes/) | Personal notes per module |

---

### 🧭 How to Clone

To clone this repo with all submodules:

### Course Repository Description

Welcome to the repository for the [Course Name] hosted on Migracode! This repository is designed to centralize all the course materials and activities in a GitHub project.

**Repository Structure:**

- **Main Repository**: This central repository serves as the hub for the course, containing links to all submodules and resources.
- **Submodules**: Each activity, project, or lesson from the course is organized as a separate Git submodule. These submodules represent different stages of the course and contain all necessary resources for each section. You can easily check out individual submodules to work on specific activities.

**How to Use This Repository:**

1. **Clone the Repository**:
   To get started, clone this central repository to your local machine using the following command:

   ```bash
   git clone --recurse-submodules https://github.com/japostadan/Migracode.git
   ```

   The `--recursive` flag ensures that all submodules are also cloned along with the main repository.

2. **Navigating Submodules**:
   Each submodule is structured as its own directory within the main repository. To explore or work on a specific activity, navigate to the relevant submodule folder. You can update the submodules using:

   ```bash
   git submodule update --remote
   ```

3. **Course Activities**:
   As you progress through the course, you'll find corresponding activities and challenges in each submodule. Follow the instructions within each submodule’s README file for step-by-step guidance.

4. **Collaboration**:
   If you're working on group projects or assignments, you can also use Git branches and pull requests within each submodule to track your work and collaborate effectively with other students.

**Why Use Submodules?**

- **Organization**: Submodules allow for a clean separation of each module, making it easier to manage different activities and projects.
- **Version Control**: Since each submodule is a separate Git repository, it allows for granular version control and easy updates for each section of the course.

**Contributing**:
Feel free to submit issues or pull requests for any changes or improvements. If you're working on a specific activity and would like to share your progress or solutions, please make sure to commit them to the respective submodule.

Happy coding, and enjoy the course!
