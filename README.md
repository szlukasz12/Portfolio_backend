# 🚀 Portfolio Backend

High-performance and scalable API built on the **NestJS** framework. This project serves as a connection between the portfolio website and the database to ensure up-to-date data and, in the future, the ability to easily publish new content (e.g., skills) on the site.

### 🌟 Key Features and Technologies Used

This project was created to demonstrate my skills in:

* **NestJS Architecture:** Modules pattern, DI (Dependency Injection), Pipes, Guards, Interceptors.
* **Design Patterns:** Implementation of **Repository Pattern** with TypeORM.
* **Security:** Implementation of [**JWT/Session**] authentication using **Passport.js**.
* **Database:** Asynchronous communication and Object-Relational Mapping (ORM) using **TypeORM** (asynchronous configuration with ConfigModule).

---

## 🛠️ Technology Stack

### 💻 Backend
* **Framework:** [**NestJS**](https://nestjs.com/)
* **Language:** **TypeScript**
* **Database:** [**MySQL**]
* **ORM/ODM:** [**TypeORM**]
* **Environment Variables:** @nestjs/config (managing secrets and keys via .env)

---

## ⚙️ Local Project Setup

The following steps will allow you to run the project in development mode.

### 📥 Prerequisites
* Node.js (v18+ LTS)
* Installed and running MySQL server
* npm or yarn

### 🚀 Installation and Configuration

1.  **Clone the repository:**
    ```bash
    git clone [[https://github.com/szlukasz12/Portfolio_backend.git](https://github.com/szlukasz12/Portfolio_backend.git)]
    cd Portfolio_backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn
    ```

3.  **Environment Variables Configuration (.env):**
    Create a **`.env`** file in the project root directory. You must fill in the key variables:
    * **MySQL database connection** (`DATABASE_HOST`, `DATABASE_USERNAME`, `DATABASE_PASSWORD`, `DATABASE_NAME`).
    * **JWT Key** (`JWT_SECRET`).

3.  **Run the Server (in development mode):**
    ```bash
    npm run start:dev
    # or
    yarn start:dev
    ```

The application will be available at: `http://localhost:3000`.

---

## 📚 API Endpoints

### API Documentation

| Method | Path | Description | Requires Token (JWT) |
| :--- | :--- | :--- | :--- |
| `POST` | `/auth/login` | Login and JWT token generation. | NO |
| `GET` | `/auth/status` | Check token authenticity and validity. | YES |
| `POST` | `/auth/refreshToken` | Ability to refresh the token, e.g., after changing the default account language. | YES |
| `GET` | `/apps/list` | Retrieve a list of available applications. | NO |
| `POST` | `/apps/acces` | Check application access based on the token. | YES |
| `GET` | `/contacts/list` | Retrieve a list of available contacts. | YES |
| `GET` | `/contacts/contact/:id` | Retrieve data for a specific contact. | YES |
| `POST` | `/contacts/add` | Add a new contact. | YES |
| `POST` | `/contacts/edit/:id` | Edit a specific contact. | YES |
| `DELETE` | `/contacts/delete/:id` | Delete a contact. | YES |
| `GET` | `/skills/list` | Retrieve a list of available skills. | NO |
| `POST` | `/user/setLang` | Edit the language assigned to the account. | YES |


---

## 👨‍💻 Author

* **Name and Surname:** [Łukasz Szostek]

---

## 📜 License

This project is released under the **MIT License**.