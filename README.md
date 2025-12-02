# 🚀 Portfolio backend

Wydajne i skalowalne API zbudowane w oparciu o framework NestJS. Projekt ten służy jako połączenie strony intrenetowej portfolio z bazą aby zapewnić aktualne dane oraz w przyszłości możliwość łatwego publikowania nowych (np. umiejętnośći) na stronie.

### 🌟 Najważniejsze Właściwości i Wykorzystane Technologie

Ten projekt został stworzony w celu zaprezentowania moich umiejętności w zakresie:

* **Architektura NestJS:** Wzorzec modułów, DI (Dependency Injection), Pipes, Guards, Interceptors.
* **Wzorce Projektowe:** Zastosowanie [np. **Repository Pattern** z TypeORM / **CQRS** (jeśli używasz)].
* **Bezpieczeństwo:** Implementacja uwierzytelniania [**JWT/Session**] za pomocą **Passport.js**.
* **Baza Danych:** Asynchroniczna komunikacja i mapowanie obiektowo-relacyjne (ORM) przy użyciu **TypeORM** / **Prisma**.
* **Testowanie:** Pisanie stabilnych testów jednostkowych (**Unit Tests**) i integracyjnych (**E2E Tests**) za pomocą **Jest**.
* **Gotowość Produkcyjna:** Konteneryzacja za pomocą **Docker** i **Docker Compose**.

---

## 🛠️ Stos Technologiczny

### 💻 Backend
* **Framework:** [**NestJS**](https://nestjs.com/)
* **Język:** **TypeScript**
* **Baza Danych:** [**MySQL**]
* **ORM/ODM:** [**TypeORM**]

---

## ⚙️ Uruchomienie Projektu Lokalnie

Poniższe kroki pozwolą Ci uruchomić projekt w trybie deweloperskim.

### 📥 Wymagania Wstępne
* Node.js (najlepiej LTSC)
* npm lub yarn

### 🚀 Instalacja i Konfiguracja

1.  **Sklonuj repozytorium:**
    ```bash
    git clone [https://github.com/szlukasz12/Portfolio_backend.git]
    cd Portfolio_backend
    ```

2.  **Instalacja zależności:**
    ```bash
    npm install
    # lub
    yarn
    ```

3.  **Uruchomienie Serwera (w trybie deweloperskim):**
    ```bash
    npm run start:dev
    # lub
    yarn start:dev
    ```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`.

---

## 📚 Endpointy API

### Dokumentacja API
Pełna dokumentacja jest dostępna automatycznie pod adresem: **`http://localhost:[PORT]/api`**

| Metoda | Ścieżka | Opis | Wymaga Tokenu (JWT) |
| :--- | :--- | :--- | :--- |
| `POST` | `/auth/login` | Logowanie i generowanie tokenu JWT 

---

## 👨‍💻 Autor

* **Imię i Nazwisko:** [Łukasz Szostek]

---

## 📜 Licencja

Ten projekt jest udostępniony na warunkach **MIT License**.