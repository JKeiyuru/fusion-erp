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
    { 
      code: 'accounting.view', 
      name: 'View Accounting',
      module: 'accounting', 
      description: 'View accounting data' 
    },
    { 
      code: 'accounting.create', 
      name: 'Create Accounting Entries',
      module: 'accounting', 
      description: 'Create accounting entries' 
    },
    { 
      code: 'accounting.edit', 
      name: 'Edit Accounting Entries',
      module: 'accounting', 
      description: 'Edit accounting entries' 
    },
    { 
      code: 'accounting.delete', 
      name: 'Delete Accounting Entries',
      module: 'accounting', 
      description: 'Delete accounting entries' 
    },
    
    // Sales
    { 
      code: 'sales.view', 
      name: 'View Sales',
      module: 'sales', 
      description: 'View sales data' 
    },
    { 
      code: 'sales.create', 
      name: 'Create Sales Documents',
      module: 'sales', 
      description: 'Create sales documents' 
    },
    { 
      code: 'sales.edit', 
      name: 'Edit Sales Documents',
      module: 'sales', 
      description: 'Edit sales documents' 
    },
    { 
      code: 'sales.delete', 
      name: 'Delete Sales Documents',
      module: 'sales', 
      description: 'Delete sales documents' 
    },
    
    // Inventory
    { 
      code: 'inventory.view', 
      name: 'View Inventory',
      module: 'inventory', 
      description: 'View inventory data' 
    },
    { 
      code: 'inventory.create', 
      name: 'Create Inventory Items',
      module: 'inventory', 
      description: 'Create inventory items' 
    },
    { 
      code: 'inventory.edit', 
      name: 'Edit Inventory Items',
      module: 'inventory', 
      description: 'Edit inventory items' 
    },
    { 
      code: 'inventory.delete', 
      name: 'Delete Inventory Items',
      module: 'inventory', 
      description: 'Delete inventory items' 
    },
    
    // HR
    { 
      code: 'hr.view', 
      name: 'View HR',
      module: 'hr', 
      description: 'View HR data' 
    },
    { 
      code: 'hr.create', 
      name: 'Create HR Records',
      module: 'hr', 
      description: 'Create HR records' 
    },
    { 
      code: 'hr.edit', 
      name: 'Edit HR Records',
      module: 'hr', 
      description: 'Edit HR records' 
    },
    { 
      code: 'hr.delete', 
      name: 'Delete HR Records',
      module: 'hr', 
      description: 'Delete HR records' 
    },
    
    // Users & Roles
    { 
      code: 'users.view', 
      name: 'View Users',
      module: 'users', 
      description: 'View users' 
    },
    { 
      code: 'users.create', 
      name: 'Create Users',
      module: 'users', 
      description: 'Create users' 
    },
    { 
      code: 'users.edit', 
      name: 'Edit Users',
      module: 'users', 
      description: 'Edit users' 
    },
    { 
      code: 'users.delete', 
      name: 'Delete Users',
      module: 'users', 
      description: 'Delete users' 
    },
    
    // Reports
    { 
      code: 'reports.view', 
      name: 'View Reports',
      module: 'reports', 
      description: 'View reports' 
    },

    // Add more permissions for other modules
    { 
      code: 'procurement.view', 
      name: 'View Procurement',
      module: 'procurement', 
      description: 'View procurement data' 
    },
    { 
      code: 'procurement.create', 
      name: 'Create Procurement Documents',
      module: 'procurement', 
      description: 'Create procurement documents' 
    },
    { 
      code: 'manufacturing.view', 
      name: 'View Manufacturing',
      module: 'manufacturing', 
      description: 'View manufacturing data' 
    },
    { 
      code: 'manufacturing.create', 
      name: 'Create Manufacturing Orders',
      module: 'manufacturing', 
      description: 'Create manufacturing orders' 
    },
    { 
      code: 'pos.view', 
      name: 'View POS',
      module: 'pos', 
      description: 'View POS data' 
    },
    { 
      code: 'pos.create', 
      name: 'Create POS Sales',
      module: 'pos', 
      description: 'Create POS sales' 
    },
    { 
      code: 'tenancy.view', 
      name: 'View Tenancy',
      module: 'tenancy', 
      description: 'View tenancy data' 
    },
    { 
      code: 'tenancy.manage', 
      name: 'Manage Tenancy',
      module: 'tenancy', 
      description: 'Manage tenancy settings' 
    },
  ];

  console.log(`Creating ${permissions.length} permissions...`);
  
  for (const permission of permissions) {
    await prisma.permission.upsert({
      where: { code: permission.code },
      update: {},
      create: {
        code: permission.code,
        name: permission.name,
        module: permission.module,
        description: permission.description,
      },
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