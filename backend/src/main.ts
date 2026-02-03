import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3001',
    credentials: true,
  });

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // API prefix
  app.setGlobalPrefix('api/v1');

  // Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Fusion ERP API')
    .setDescription('Complete ERP System for Kenyan Businesses')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('auth', 'Authentication & Registration')
    .addTag('sales', 'Sales Management')
    .addTag('accounting', 'Accounting & Finance')
    .addTag('pos', 'Point of Sale')
    .addTag('procurement', 'Procurement & Purchasing')
    .addTag('inventory', 'Inventory Management')
    .addTag('manufacturing', 'Manufacturing & Production')
    .addTag('hr', 'Human Resources & Payroll')
    .addTag('audit', 'Audit Logs')
    .addTag('integrations', 'M-Pesa, eTIMS, Notifications')
    .addTag('reporting', 'Financial & Operational Reports')
    .addTag('roles', 'Roles & Permissions')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  console.log(`
    🚀 Fusion ERP Backend is running!
    
    📡 API: http://localhost:${port}/api/v1
    📚 Docs: http://localhost:${port}/api/docs
    🌍 Environment: ${process.env.NODE_ENV || 'development'}
    
    Modules loaded:
    ✅ Auth & Multi-tenancy
    ✅ Sales Management
    ✅ Accounting (Double-entry)
    ✅ Point of Sale
    ✅ Procurement
    ✅ Inventory (Multi-warehouse)
    ✅ Manufacturing (BOM & Production)
    ✅ HR & Payroll (Kenya: PAYE, NHIF, NSSF)
    ✅ Audit Logging
    ✅ Integrations (M-Pesa, eTIMS, Email, SMS)
    ✅ Reporting (Financial & Operational)
    ✅ Roles & Permissions
  `);
}
bootstrap();