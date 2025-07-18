# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Initial Laravel 11 project setup.
- Installed JWT authentication using `php-open-source-saver/jwt-auth`.
- Generated application key with `php artisan key:generate`.
- Connected Laravel to a SQL Server database (`sqlsrv` driver).
- Created `AspNetUsers` Eloquent model manually from SQL Server `AspNetUsers` table schema.
- Developed a custom command `app:generate-sql-server-models` to generate models for SQL Server tables.
- Created `AuthController` with the following endpoints:
  - `register`: Registers a user with validation and password hashing.
  - `login`: Authenticates user with `UserName` and `Password`, returns JWT.
  - `updateUser`: Endpoint (assumed) to update user details.
  - `refresh`: Refreshes JWT token.
- JWT properly integrated and working with the custom user table.
- Postman test data documented for login and registration endpoints.

### Fixed
- Issue where Laravel default homepage was shown after login by correcting route setup and returning JSON.
- JWTAuth storage conflict by aligning version with `php-open-source-saver/jwt-auth`.
- Command namespace issue by properly registering custom Artisan command in `app/Console/Kernel.php`.

### Known Issues
- Still relying on manual model creation due to schema mapper limitation with `Illuminate\Database\SqlServerConnection` in `reliese/laravel`.
- `Blacklist` storage mismatch observed if `tymon/jwt-auth` and `php-open-source-saver/jwt-auth` conflict.

### Next Steps
- Build role-based access control (RBAC).
- Add endpoints for user logout and password reset.
- Add middleware to protect authenticated routes.
- Expand model generation support or explore alternative packages for full SQL Server scaffolding.

---

