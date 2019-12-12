<template>
  <q-item
    :to="{
      name: 'conversation',
      params: { id: conversation.id }
    }">
    <q-item-section avatar>
      <q-icon name="fas fa-envelope" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ conversation.libelle }}</q-item-label>
      <q-item-label caption>
        {{ _.get(conversation, ['lastMessage', 'texte'], 'Aucun message')}}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'FluteConversationsListeItem',
  props: {
    conversation: {
      type: Object
    }
  }
}
</script>
