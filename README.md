# Lootkeyy

A digital game-key and gift-card shop. It's a learning project built by hand to practise the full stack, from the database to the UI.

## Tech stack

| Layer      | Tech                                   |
| ---------- | -------------------------------------- |
| Backend    | Laravel 13, PHP 8.5                    |
| Frontend   | React + TypeScript via Inertia v3      |
| Styling    | Tailwind CSS v4                        |
| Routing    | Laravel routes + Wayfinder (typed TS)  |
| Database   | MySQL 8.4 (Docker)                     |
| Local host | Laravel Herd (`lootkeyy.test`)         |

## Getting started

```bash
# 1. Start MySQL
docker compose up -d

# 2. Install dependencies
composer install
npm install

# 3. Environment
cp .env.example .env
php artisan key:generate
# set DB_CONNECTION=mysql, DB_DATABASE, DB_USERNAME, DB_PASSWORD to match docker-compose.yml

# 4. Database
php artisan migrate

# 5. Frontend
npm run dev
```

Open `http://lootkeyy.test`.

> **Docker note:** the `MYSQL_*` variables are only read the **first** time the volume is created. If you change them, reset the volume with `docker compose down -v` and then `docker compose up -d`.

## What's done so far

### 1. Layouts (Inertia persistent layouts)
Layouts live in `resources/js/layouts/` and are picked per page in `resources/js/app.tsx`:

| Layout              | Pages                    |
| ------------------- | ------------------------ |
| `shop-layout`       | `store`, `wishlist`      |
| `account-layout`    | `account`, `login-log`   |
| `checkout-layout`   | `checkout`               |
| home layout         | `home`                   |

### 2. Pages and components
Pages are in `resources/js/pages/`, and each page's UI pieces are in `resources/js/components/<area>/`:

- **home**: platform carousel, categories, sections, sidebar
- **store**: sidebar filters (platforms, genres, region, price range, product type), product grid
- **wishlist**: favourites list and sidebar
- **account**: profile, balance, add funds, recent purchases
- **checkout**: cart, empty cart, logged-in and guest views
- **login**: login page with brand icons (Google, Facebook, Apple, Steam, Discord, Twitch, X)
- **layout-all** (shared): `Header`, `Footer`, `Navigation`, `Item` (product card), `Pagination`, `ProductsCounter`

### 3. Authentication (removed on purpose)
Laravel Fortify and the starter-kit auth pages were removed so auth can be **written by hand**: email + password, plus magic links later.

### 4. Database schema
Migrations are in `database/migrations/`:

| Table          | Key columns                                                                  |
| -------------- | ---------------------------------------------------------------------------- |
| `users`        | standard Laravel columns + `is_admin` (boolean, default `false`)             |
| `products`     | `name`, `slug` (unique), `image`, `type`, `platform`, `region`, `price`, `cashback` |
| `cart_items`   | `user_id`, `product_id` (cascade on delete), `quantity`, unique per user+product |
| `login_events` | `user_id`, `ip_address`, `user_agent`, `country`, `created_at`               |
| Laravel base   | `sessions`, `password_reset_tokens`, `cache`, `jobs`                         |

`type`, `platform` and `region` are indexed because the store filters on them.

### 5. Store page (backend → frontend)
The data flow, in order:

1. **Route:** `GET /store` → `StoreController@getStore` (named `store`)
2. **Controller:** reads the query string (`?type=`, `?platform=`, `?sort=`, with `sort` defaulting to `newest`)
3. **Model:** `Product::storePageCards($type, $platform, $sort)` builds the query with `when()` for the optional filters, then `paginate(24)->withQueryString()`
4. **Inertia:** renders the `store` page with `products` (paginated) and `filters`
5. **React:** `store.tsx` → `Store` → `StoreProducts` → `Item` cards + `Pagination` + `ProductsCounter`

The home carousel links into the store with query params, e.g. `/store?type=game` or `/store?platform=steam`.

Types for the props are in `resources/js/types/product.ts` (`Product`, `LinkUrl`, `Paginated<T>`).

## In progress

- [ ] **Sorting:** the `<select>` in `ProductsCounter` calls `router.get('/store', { ...filters, sort })`
  - [ ] pass `filters` down `store.tsx` → `Store` → `StoreProducts` → `ProductsCounter`
  - [ ] handle `$sort` in `Product::storePageCards` (`match` → `orderBy`, plus `id` as a tiebreaker)
- [ ] Product factory and seeder (games + gift cards)

## Roadmap

- [ ] Clean up `Item` (real image, alt text, price formatting) and the store types
- [ ] Hand-written auth: register, login, logout, magic links
- [ ] Login history (`login_events`)
- [ ] Cart (`cart_items`)
- [ ] Wishlist backend
- [ ] Checkout
- [ ] Tests (Pest)
