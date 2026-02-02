// ============================================
// FILE: backend/src/events/events.module.ts
// Location: backend/src/events/events.module.ts
// ============================================
import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventsService } from './events.service';

@Module({
  imports: [
    EventEmitterModule.forRoot({
      wildcard: false,
      delimiter: '.',
      newListener: false,
      removeListener: false,
      maxListeners: 10,
      verboseMemoryLeak: false,
      ignoreErrors: false,
    }),
  ],
  providers: [EventsService],
  exports: [EventsService],
})
export class EventsModule {}