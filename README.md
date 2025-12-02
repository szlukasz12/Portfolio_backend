# 🚀 Portfolio backend

Wydajne i skalowalne API zbudowane w oparciu o framework NestJS. Projekt ten służy jako połączenie strony intrenetowej portfolio z bazą aby zapewnić aktualne dane oraz w przyszłości możliwość łatwego publikowania nowych (np. umiejętnośći) na stronie.

### 🌟 Najważniejsze Właściwości i Wykorzystane Technologie

Ten projekt został stworzony w celu zaprezentowania moich umiejętności w zakresie:

* **Architektura NestJS:** Wzorzec modułów, DI (Dependency Injection), Pipes, Guards, Interceptors.
* **Wzorce Projektowe:** Zastosowanie Zastosowanie **Repository Pattern** z TypeORM.
* **Bezpieczeństwo:** Implementacja uwierzytelniania [**JWT/Session**] za pomocą **Passport.js**.
* **Baza Danych:** Asynchroniczna komunikacja i mapowanie obiektowo-relacyjne (ORM) przy użyciu **TypeORM** (konfiguracja asynchroniczna z użyciem ConfigModule).

---

## 🛠️ Stos Technologiczny

### 💻 Backend
* **Framework:** [**NestJS**](https://nestjs.com/)
* **Język:** **TypeScript**
* **Baza Danych:** [**MySQL**]
* **ORM/ODM:** [**TypeORM**]
* **Zmienne Środowiskowe:** @nestjs/config (zarządzanie kluczami i hasłami przez .env)

---

## ⚙️ Uruchomienie Projektu Lokalnie

Poniższe kroki pozwolą Ci uruchomić projekt w trybie deweloperskim.

### 📥 Wymagania Wstępne
* Node.js (v18+ LTS)
* Zainstalowany i uruchomiony serwer MySQL
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

3.  **Konfiguracja Zmiennych Środowiskowych (.env):**
    Utwórz plik **`.env`** w katalogu głównym projektu. Musisz uzupełnić kluczowe zmienne:
    * **Połączenie z bazą danych MySQL** (`DATABASE_HOST`, `DATABASE_USERNAME`, `DATABASE_PASSWORD`, `DATABASE_NAME`).
    * **Klucz JWT** (`JWT_SECRET`).

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

| Metoda | Ścieżka | Opis | Wymaga Tokenu (JWT) |
| :--- | :--- | :--- | :--- |
| `POST` | `/auth/login` | Logowanie i generowanie tokenu JWT | NIE
| `GET` | `/auth/status` | Sprawdzenie autentycznośći i ważności tokena. | TAK
| `POST` | `/auth/refreshToken` | Możliwość odświeżenia tokena np po zmianie domyślnego języka konta. | TAK
| `GET` | `/apps/list` | Pobranie listy dostępnych aplikacji. | NIE
| `POST` | `/apps/acces` | Sprawdzenie dostępu do aplikacji według tokenu. | TAK
| `GET` | `/contacts/list` | Pobranie listy dostępnych kontaktów. | TAK
| `GET` | `/contacts/contact/:id` | Pobranie danych konkretnego kontaktu. | TAK
| `POST` | `/contacts/add` | Dodanie nowego kontaktu. | TAK
| `POST` | `/contacts/edit/:id` | Edycja konkretnego kontaktu. | TAK
| `DELETE` | `/contacts/delete/:id` | Usunięcie kontaktu | TAK
| `GET` | `/skills/list` | Pobranie listy dostępnych umiejętnośći. | NIE
| `POST` | `/user/setLang` | Edycja języka przypisanego do konta. | TAK


---

## 👨‍💻 Autor

* **Imię i Nazwisko:** [Łukasz Szostek]

---

## 📜 Licencja

Ten projekt jest udostępniony na warunkach **MIT License**.