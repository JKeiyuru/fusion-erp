// ============================================
// FILE: backend/src/modules/pos/services/sessions.service.ts
// Location: backend/src/modules/pos/services/sessions.service.ts
// ============================================
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { OpenSessionDto } from '../dto/open-session.dto';
import { CloseSessionDto } from '../dto/close-session.dto';

@Injectable()
export class SessionsService {
  constructor(private prisma: PrismaService) {}

  async open(tenantId: string, userId: string, openDto: OpenSessionDto) {
    // Check if user has an active session
    const activeSession = await this.prisma.posSession.findFirst({
      where: {
        companyId: tenantId,
        userId,
        status: 'OPEN',
      },
    });

    if (activeSession) {
      throw new BadRequestException('User already has an active session');
    }

    // Generate session number
    const count = await this.prisma.posSession.count({
      where: { companyId: tenantId },
    });
    const sessionNumber = `POS-${String(count + 1).padStart(6, '0')}`;

    return this.prisma.posSession.create({
      data: {
        companyId: tenantId,
        sessionNumber,
        userId,
        openedAt: new Date(),
        openingCash: openDto.openingCash,
        status: 'OPEN',
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    });
  }

  async close(tenantId: string, sessionId: string, closeDto: CloseSessionDto) {
    const session = await this.findOne(tenantId, sessionId);

    if (session.status !== 'OPEN') {
      throw new BadRequestException('Session is not open');
    }

    // Calculate total sales
    const sales = await this.prisma.posSale.findMany({
      where: { sessionId },
    });

    const totalSales = sales.reduce(
      (sum, sale) => sum + sale.total.toNumber(),
      0,
    );

    return this.prisma.posSession.update({
      where: { id: sessionId },
      data: {
        closedAt: new Date(),
        closingCash: closeDto.closingCash,
        totalSales,
        status: 'CLOSED',
      },
      include: {
        _count: {
          select: {
            sales: true,
          },
        },
      },
    });
  }

  async getActive(tenantId: string, userId: string) {
    const session = await this.prisma.posSession.findFirst({
      where: {
        companyId: tenantId,
        userId,
        status: 'OPEN',
      },
      include: {
        sales: {
          orderBy: { date: 'desc' },
          take: 20,
        },
        _count: {
          select: {
            sales: true,
          },
        },
      },
    });

    if (!session) {
      return null;
    }

    return {
      ...session,
      currentSales: session.sales.reduce(
        (sum, sale) => sum + sale.total.toNumber(),
        0,
      ),
    };
  }

  async findAll(tenantId: string) {
    return this.prisma.posSession.findMany({
      where: { companyId: tenantId },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
        _count: {
          select: {
            sales: true,
          },
        },
      },
      orderBy: { openedAt: 'desc' },
    });
  }

  async findOne(tenantId: string, id: string) {
    const session = await this.prisma.posSession.findFirst({
      where: { id, companyId: tenantId },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
        sales: {
          include: {
            customer: true,
            lines: {
              include: {
                product: true,
              },
            },
          },
        },
      },
    });

    if (!session) {
      throw new NotFoundException('Session not found');
    }

    return session;
  }
}
