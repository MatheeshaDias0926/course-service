# Course Service — Smart Campus Services

Course Management microservice for the Smart Campus Services platform (CTSE Cloud Computing Assignment).

## Features

- **Course Catalog** — List, search, filter courses by department/semester
- **Course CRUD** — Create, read, update, soft-delete courses
- **Enrollment** — Enroll/drop courses with capacity management
- **Inter-Service Auth** — JWT validation via Auth Service (`/auth/validate`)
- **Swagger API Docs** — Auto-generated OpenAPI documentation
- **Security** — Helmet, CORS, rate limiting, input validation

## Tech Stack

- Node.js 18 + Express
- MongoDB (Mongoose ODM)
- Axios (for inter-service communication with Auth Service)
- Docker (multi-stage build)
- GitHub Actions CI/CD
- SonarCloud + Snyk (DevSecOps)

## Quick Start

### Local Development

```bash
npm install
cp .env.example .env
# Edit .env with your MongoDB URI, JWT secret, and Auth Service URL
npm run dev
```

### Docker

```bash
docker-compose up --build
```

## API Endpoints

| Method | Endpoint                    | Auth | Description                 |
| ------ | --------------------------- | ---- | --------------------------- |
| GET    | `/courses`                  | No   | List courses (with filters) |
| GET    | `/courses/:id`              | No   | Get course by ID            |
| POST   | `/courses`                  | JWT  | Create a course             |
| PUT    | `/courses/:id`              | JWT  | Update a course             |
| DELETE | `/courses/:id`              | JWT  | Soft-delete a course        |
| POST   | `/courses/enroll`           | JWT  | Enroll in a course          |
| GET    | `/courses/my`               | JWT  | Get my enrollments          |
| DELETE | `/courses/enroll/:courseId` | JWT  | Drop a course               |
| GET    | `/health`                   | No   | Health check                |

## Production Deployment

- **Deployed URL:** https://course-service-5bk1.onrender.com
- **API Gateway URL:** https://api-gateway-5vao.onrender.com

> For all production API calls, use the API Gateway URL above. Direct service URLs are for internal use and debugging only.

## CI/CD & Security

- Automated build, test, and deploy via GitHub Actions
- Static analysis: SonarCloud
- Dependency scanning: Snyk

---

### API Documentation

Once running: `http://localhost:3002/api-docs` (local) or `https://course-service-5bk1.onrender.com/api-docs` (production)

## Inter-Service Communication

1. **Auth Service → Course Service**: Course Service validates JWTs by calling the Auth Service's `GET /auth/validate` endpoint
2. **Timetable Service → Course Service**: Timetable Service fetches enrolled courses via `GET /courses/my?studentId=...`
3. **Course Service → Notification Service**: Enrollment events published to SNS for notification delivery

## Testing

```bash
npm test
```

## License

MIT
