import { Routes } from '@angular/router';
import { AdminChatComponent } from './admin-chat/admin-chat.component';
import { TestComponent } from './test/test.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { ConversationComponent } from './conversation/conversation.component';
export const routes: Routes = [
  {
    path: 'admin',
    component: AdminChatComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'collaborator',
    component: CollaboratorComponent,
  },
  {
    path: 'admin/conversation/:id',
    component: ConversationComponent,
  },
];
