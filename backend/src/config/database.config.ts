// ============================================
// FILE: backend/src/config/database.config.ts
// Location: backend/src/config/database.config.ts
// ============================================
export default () => ({
  database: {
    url: process.env.DATABASE_URL,
  },
});