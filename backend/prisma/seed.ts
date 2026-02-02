// ============================================
// FILE: backend/prisma/seed.ts
// Location: backend/prisma/seed.ts
// ============================================
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seeding...');

  // Create default permissions
  const permissions = [
    // Accounting
    { code: 'accounting.view', module: 'accounting', action: 'view', description: 'View accounting data' },
    { code: 'accounting.create', module: 'accounting', action: 'create', description: 'Create accounting entries' },
    { code: 'accounting.edit', module: 'accounting', action: 'edit', description: 'Edit accounting entries' },
    { code: 'accounting.delete', module: 'accounting', action: 'delete', description: 'Delete accounting entries' },
    
    // Sales
    { code: 'sales.view', module: 'sales', action: 'view', description: 'View sales data' },
    { code: 'sales.create', module: 'sales', action: 'create', description: 'Create sales documents' },
    { code: 'sales.edit', module: 'sales', action: 'edit', description: 'Edit sales documents' },
    { code: 'sales.delete', module: 'sales', action: 'delete', description: 'Delete sales documents' },
    
    // Inventory
    { code: 'inventory.view', module: 'inventory', action: 'view', description: 'View inventory data' },
    { code: 'inventory.create', module: 'inventory', action: 'create', description: 'Create inventory items' },
    { code: 'inventory.edit', module: 'inventory', action: 'edit', description: 'Edit inventory items' },
    { code: 'inventory.delete', module: 'inventory', action: 'delete', description: 'Delete inventory items' },
    
    // HR
    { code: 'hr.view', module: 'hr', action: 'view', description: 'View HR data' },
    { code: 'hr.create', module: 'hr', action: 'create', description: 'Create HR records' },
    { code: 'hr.edit', module: 'hr', action: 'edit', description: 'Edit HR records' },
    { code: 'hr.delete', module: 'hr', action: 'delete', description: 'Delete HR records' },
    
    // Users & Roles
    { code: 'users.view', module: 'users', action: 'view', description: 'View users' },
    { code: 'users.create', module: 'users', action: 'create', description: 'Create users' },
    { code: 'users.edit', module: 'users', action: 'edit', description: 'Edit users' },
    { code: 'users.delete', module: 'users', action: 'delete', description: 'Delete users' },
    
    // Reports
    { code: 'reports.view', module: 'reports', action: 'view', description: 'View reports' },
  ];

  for (const permission of permissions) {
    await prisma.permission.upsert({
      where: { code: permission.code },
      update: {},
      create: permission,
    });
  }

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });