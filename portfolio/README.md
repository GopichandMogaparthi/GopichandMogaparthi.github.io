# Gopichand Mogaparthi — Portfolio

React + Tailwind frontend + Spring Boot backend.

## Project Structure

```
portfolio/          ← React frontend (this repo → GitHub Pages)
portfolio-backend/  ← Spring Boot backend (deploy separately)
```

---

## 🚀 Frontend Setup (React + Tailwind)

### 1. Install dependencies
```bash
cd portfolio
npm install
```

### 2. Configure API URL
Create `.env` in the `portfolio/` root:
```
REACT_APP_API_URL=http://localhost:8080/api
```
For production (after deploying backend):
```
REACT_APP_API_URL=https://your-backend-server.com/api
```

### 3. Add your profile photo
Place your photo at `public/images/profile.jpg`, then in `src/components/Hero.jsx` replace the `<div>` placeholder with:
```jsx
<img src="/images/profile.jpg" alt="Gopichand" className="w-full h-full object-cover" />
```

### 4. Run locally
```bash
npm start
# Opens at http://localhost:3000
```

### 5. Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
npm run deploy
# Deploys to https://gopichandmogaparthi.github.io
```

---

## ☕ Backend Setup (Spring Boot)

### 1. Create MySQL database
```sql
CREATE DATABASE portfolio_db;
```

### 2. Configure credentials
Edit `src/main/resources/application.properties`:
```properties
spring.datasource.password=YOUR_MYSQL_PASSWORD
spring.mail.password=YOUR_GMAIL_APP_PASSWORD  # Gmail → Settings → App Passwords
```

> **Gmail App Password**: Go to myaccount.google.com → Security → 2-Step Verification → App passwords

### 3. Run the backend
```bash
cd portfolio-backend
./mvnw spring-boot:run
# Runs at http://localhost:8080
```

### 4. Seed initial data (run in MySQL)
```sql
USE portfolio_db;

INSERT INTO skill_categories (name) VALUES ('Backend Development'), ('Frontend Development'), ('Database & Cloud');

-- Get the IDs and insert skills
INSERT INTO skills (category_id, skill) VALUES
(1,'Java'),(1,'Spring Boot'),(1,'Spring MVC'),(1,'Spring Security'),(1,'Hibernate'),
(1,'JPA'),(1,'RESTful APIs'),(1,'Microservices'),(1,'JUnit'),(1,'Maven'),
(2,'JavaScript'),(2,'TypeScript'),(2,'React'),(2,'Angular'),(2,'HTML5'),
(2,'CSS3'),(2,'Tailwind CSS'),(2,'Redux'),
(3,'MySQL'),(3,'PostgreSQL'),(3,'MongoDB'),(3,'Redis'),(3,'AWS'),
(3,'Azure'),(3,'Docker'),(3,'Kubernetes'),(3,'CI/CD'),(3,'Git');

INSERT INTO projects (title, description, github_url, live_url) VALUES
('Enterprise Resource Planning System',
 'A comprehensive Java-based ERP solution with microservices architecture for a manufacturing company.',
 'https://github.com/GopichandMogaparthi/erp-system', '#'),
('Banking Management Platform',
 'Secure banking platform with real-time transaction processing and comprehensive reporting capabilities.',
 'https://github.com/GopichandMogaparthi/banking-platform', '#'),
('Healthcare Data Analytics Dashboard',
 'Real-time analytics dashboard for healthcare providers with data visualization and reporting.',
 'https://github.com/GopichandMogaparthi/healthcare-dashboard', '#');

INSERT INTO project_tags (project_id, tag) VALUES
(1,'Java'),(1,'Spring Boot'),(1,'Microservices'),(1,'React'),
(2,'Java'),(2,'Spring Security'),(2,'MySQL'),(2,'Angular'),
(3,'Java'),(3,'Spring Boot'),(3,'MongoDB'),(3,'React');
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/{id}` | Get single project |
| POST | `/api/projects` | Add a project |
| PUT | `/api/projects/{id}` | Update a project |
| DELETE | `/api/projects/{id}` | Delete a project |
| GET | `/api/skills/categories` | Get skill categories |
| POST | `/api/skills` | Add skill category |
| POST | `/api/contact` | Send contact email |

### Example POST /api/contact
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "subject": "Job Opportunity",
  "message": "Hi Gopichand, I'd like to discuss an opportunity..."
}
```

---

## 📁 Frontend Component Map

| Component | API used | Falls back to static? |
|-----------|----------|-----------------------|
| `Hero.jsx` | None | N/A |
| `About.jsx` | None | N/A |
| `Skills.jsx` | `GET /api/skills/categories` | ✅ Yes |
| `Projects.jsx` | `GET /api/projects` | ✅ Yes |
| `Contact.jsx` | `POST /api/contact` | Shows error message |

---

## 🌐 Deploying Backend to Production

Recommended: **Railway, Render, or AWS EC2**

### Railway (easiest)
1. Push `portfolio-backend` to a separate GitHub repo
2. Go to railway.app → New Project → Deploy from GitHub
3. Add environment variables (DB URL, mail password)
4. Copy the Railway URL to frontend `.env` as `REACT_APP_API_URL`

