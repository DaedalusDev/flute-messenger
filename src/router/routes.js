import Home from '@/views/Home'
import FluteConversations from '@/views/FluteConversations'
import FluteConversation from '@/views/FluteConversations/FluteConversation'
import FluteConversationDetail from '@/views/FluteConversations/FluteConversationDetail'
import FluteProfil from '@/views/FluteProfil'
import FluteContacts from '@/views/FluteContacts'
import FluteConversationsListe from '@/views/FluteConversations/FluteConversationsListe'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      label: 'Accueil',
      icon: 'fa fa-home'
    }
  },
  {
    path: '/conversations',
    component: FluteConversations,
    meta: {
      label: 'Conversations',
      icon: 'fa fa-comments'
    },
    children: [
      {
        path: '/',
        name: 'conversations',
        component: FluteConversationsListe
      },
      {
        path: 'conversation/new',
        name: 'conversationNew',
        component: FluteConversationDetail
      },
      {
        path: 'conversation/:id',
        name: 'conversation',
        component: FluteConversation,
        props: true
      }
    ]
  },
  {
    path: '/profil',
    name: 'profil',
    component: FluteProfil,
    meta: {
      label: 'Mon profil',
      icon: 'fas fa-user'
    }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: FluteContacts,
    meta: {
      label: 'Mes contacts',
      icon: 'fas fa-envelope'
    }
  }
]
