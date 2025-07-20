<template>
  <div class="chat-container">
    <!-- Floating Chat Button -->
    <div v-if="!isOpen" class="chat-bubble" @click="openChat">
      <q-icon name="chat" size="1.5rem" />
      <span class="chat-label">{{ $t("footer.floating.chat") }}</span>
    </div>

    <!-- Chat Window -->
    <div
      v-if="isOpen"
      class="chat-window"
      :class="{ 'chat-window--open': isOpen }"
    >
      <!-- Chat Header -->
      <div class="chat-header">
        <div class="chat-header-content">
          <h3 class="chat-title">{{ $t("chat.title") }}</h3>
          <div class="chat-actions">
            <q-btn
              flat
              round
              icon="add"
              color="white"
              size="sm"
              @click="startNewChat"
              class="new-chat-btn"
            />
            <q-btn
              flat
              round
              icon="close"
              color="white"
              size="sm"
              @click="closeChat"
              class="close-chat-btn"
            />
          </div>
        </div>
      </div>

      <!-- Chat History List -->
      <div v-if="!currentChat" class="chat-history">
        <div class="chat-history-list">
          <div
            v-for="(chat, index) in chatHistory"
            :key="index"
            class="chat-history-item"
            @click="openChatHistory(chat)"
          >
            <div class="chat-history-avatar">
              <q-icon name="support_agent" size="1.5rem" color="primary" />
            </div>
            <div class="chat-history-content">
              <div class="chat-history-title">{{ chat.title }}</div>
              <div class="chat-history-status">{{ chat.status }}</div>
            </div>
            <div class="chat-history-time">
              {{ formatTime(chat.lastActivity) }}
            </div>
          </div>
        </div>
      </div>

      <!-- Active Chat -->
      <div v-else class="chat-active">
        <!-- Chat Messages -->
        <div class="chat-messages" ref="messagesContainer">
          <div
            v-for="(message, index) in currentChat.messages"
            :key="index"
            class="chat-message"
            :class="{
              'chat-message--user': message.sender === 'user',
              'chat-message--bot': message.sender === 'bot',
            }"
          >
            <div class="chat-message-avatar">
              <q-icon
                :name="message.sender === 'user' ? 'person' : 'support_agent'"
                size="1.5rem"
                :color="message.sender === 'user' ? 'grey-6' : 'primary'"
              />
            </div>
            <div class="chat-message-content">
              <div class="chat-message-text">{{ message.text }}</div>
              <div class="chat-message-time">
                {{ formatTime(message.timestamp) }}
              </div>
              <!-- Quick reply buttons for bot messages -->
              <div
                v-if="message.sender === 'bot' && message.showQuickReplies"
                class="quick-replies"
              >
                <q-btn
                  v-for="reply in quickReplies"
                  :key="reply.text"
                  :label="reply.text"
                  size="sm"
                  outline
                  color="primary"
                  class="quick-reply-btn"
                  @click="sendQuickReply(reply.text)"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Chat Input -->
        <div class="chat-input-container">
          <q-input
            v-model="newMessage"
            :placeholder="$t('chat.inputPlaceholder')"
            outlined
            dense
            class="chat-input"
            @keyup.enter="sendMessage"
            :loading="isTyping"
          >
            <template v-slot:append>
              <q-btn
                round
                dense
                flat
                icon="send"
                color="primary"
                @click="sendMessage"
                :disable="!newMessage.trim() || isTyping"
              />
            </template>
          </q-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted } from "vue";
import { useI18n } from "vue-i18n";

// Define component name for linter
defineOptions({
  name: "ChatWidget",
});

const { t } = useI18n();

// Reactive data
const isOpen = ref(false);
const currentChat = ref(null);
const newMessage = ref("");
const isTyping = ref(false);
const messagesContainer = ref(null);

// Quick replies
const quickReplies = ref([
  { text: "Track my shipment", action: "track" },
  { text: "Get a quote", action: "quote" },
  { text: "Contact support", action: "contact" },
  { text: "View services", action: "services" },
]);

// Chat history
const chatHistory = ref([
  {
    id: 1,
    title: "Emi's Nest Support",
    status: t("chat.status.ended"),
    lastActivity: new Date(Date.now() - 41 * 60 * 1000), // 41 minutes ago
    messages: [
      {
        sender: "bot",
        text: t("chat.welcomeMessage"),
        timestamp: new Date(Date.now() - 45 * 60 * 1000),
        showQuickReplies: true,
      },
      {
        sender: "user",
        text: "How do I track my shipment?",
        timestamp: new Date(Date.now() - 44 * 60 * 1000),
      },
      {
        sender: "bot",
        text: t("chat.responses.tracking"),
        timestamp: new Date(Date.now() - 43 * 60 * 1000),
      },
    ],
  },
  {
    id: 2,
    title: "Emi's Nest Support",
    status: t("chat.status.ended"),
    lastActivity: new Date(Date.now() - 17 * 60 * 60 * 1000), // 17 hours ago
    messages: [
      {
        sender: "bot",
        text: t("chat.welcomeMessage"),
        timestamp: new Date(Date.now() - 17 * 60 * 60 * 1000 - 5 * 60 * 1000),
        showQuickReplies: true,
      },
      {
        sender: "user",
        text: "What are your shipping rates?",
        timestamp: new Date(Date.now() - 17 * 60 * 60 * 1000 - 4 * 60 * 1000),
      },
      {
        sender: "bot",
        text: t("chat.responses.rates"),
        timestamp: new Date(Date.now() - 17 * 60 * 60 * 1000 - 3 * 60 * 1000),
      },
    ],
  },
]);

// Computed properties
const hasUnreadMessages = computed(() => {
  return chatHistory.value.some((chat) => chat.unread);
});

// Methods
const openChat = () => {
  isOpen.value = true;
  currentChat.value = null;
};

const closeChat = () => {
  isOpen.value = false;
  currentChat.value = null;
  newMessage.value = "";
};

const startNewChat = () => {
  const newChat = {
    id: Date.now(),
    title: "Emi's Nest Support",
    status: t("chat.status.active"),
    lastActivity: new Date(),
    messages: [
      {
        sender: "bot",
        text: t("chat.welcomeMessage"),
        timestamp: new Date(),
        showQuickReplies: true,
      },
    ],
  };

  chatHistory.value.unshift(newChat);
  currentChat.value = newChat;
  scrollToBottom();
};

const openChatHistory = (chat) => {
  currentChat.value = chat;
  scrollToBottom();
};

const sendMessage = async () => {
  if (!newMessage.value.trim() || isTyping.value) return;

  const userMessage = {
    sender: "user",
    text: newMessage.value,
    timestamp: new Date(),
  };

  // Add user message
  currentChat.value.messages.push(userMessage);
  currentChat.value.lastActivity = new Date();

  const userText = newMessage.value;
  newMessage.value = "";

  scrollToBottom();

  // Simulate typing
  isTyping.value = true;
  await new Promise((resolve) =>
    setTimeout(resolve, 1000 + Math.random() * 2000)
  );

  // Generate bot response
  const botResponse = generateBotResponse(userText);
  const botMessage = {
    sender: "bot",
    text: botResponse,
    timestamp: new Date(),
  };

  currentChat.value.messages.push(botMessage);
  currentChat.value.lastActivity = new Date();
  isTyping.value = false;

  scrollToBottom();
};

const sendQuickReply = (replyText) => {
  newMessage.value = replyText;
  sendMessage();
};

const generateBotResponse = (userMessage) => {
  const message = userMessage.toLowerCase();

  // Predefined responses based on keywords
  if (
    message.includes("track") ||
    message.includes("shipment") ||
    message.includes("delivery")
  ) {
    return t("chat.responses.tracking");
  }

  if (
    message.includes("rate") ||
    message.includes("price") ||
    message.includes("cost") ||
    message.includes("fee")
  ) {
    return t("chat.responses.rates");
  }

  if (
    message.includes("time") ||
    message.includes("duration") ||
    message.includes("how long")
  ) {
    return t("chat.responses.deliveryTime");
  }

  if (
    message.includes("service") ||
    message.includes("what do you") ||
    message.includes("offer")
  ) {
    return t("chat.responses.services");
  }

  if (
    message.includes("contact") ||
    message.includes("phone") ||
    message.includes("email")
  ) {
    return t("chat.responses.contact");
  }

  if (
    message.includes("career") ||
    message.includes("job") ||
    message.includes("work")
  ) {
    return t("chat.responses.careers");
  }

  if (message.includes("quote") || message.includes("estimate")) {
    return t("chat.responses.quote");
  }

  // Default response
  return t("chat.responses.default");
};

const scrollToBottom = async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

const formatTime = (timestamp) => {
  const now = new Date();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (minutes < 60) {
    return `${minutes} min. ago`;
  } else if (hours < 24) {
    return `${hours} hr. ago`;
  } else {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }
};

// Initialize
onMounted(() => {
  // Auto-open chat after 30 seconds if user hasn't interacted
  setTimeout(() => {
    if (!isOpen.value) {
      // You can add a notification here instead of auto-opening
    }
  }, 30000);
});
</script>

<style scoped>
.chat-container {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  font-family: "Inter", "Roboto", sans-serif;
}

/* Floating Chat Button */
.chat-bubble {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(
    135deg,
    var(--dermiqt-yellow),
    var(--dermiqt-orange)
  );
  color: var(--dermiqt-dark-brown);
  padding: 1rem 1.5rem;
  border-radius: 50px;
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 0.9rem;
}

.chat-bubble:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
}

.chat-label {
  white-space: nowrap;
}

/* Chat Window */
.chat-window {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 400px;
  height: 600px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Chat Header */
.chat-header {
  background: linear-gradient(
    135deg,
    var(--dermiqt-dark-brown),
    var(--dermiqt-brown)
  );
  color: white;
  padding: 1rem;
}

.chat-header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.chat-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.chat-actions {
  display: flex;
  gap: 0.5rem;
}

.new-chat-btn,
.close-chat-btn {
  color: white !important;
}

/* Chat History */
.chat-history {
  flex: 1;
  overflow-y: auto;
}

.chat-history-list {
  padding: 1rem;
}

.chat-history-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid #f0f0f0;
}

.chat-history-item:hover {
  background: #f8f9fa;
}

.chat-history-item:last-child {
  border-bottom: none;
}

.chat-history-avatar {
  flex-shrink: 0;
}

.chat-history-content {
  flex: 1;
  min-width: 0;
}

.chat-history-title {
  font-weight: 600;
  color: var(--dermiqt-dark-brown);
  margin-bottom: 0.25rem;
}

.chat-history-status {
  font-size: 0.875rem;
  color: #6c757d;
}

.chat-history-time {
  font-size: 0.75rem;
  color: #6c757d;
  white-space: nowrap;
}

/* Active Chat */
.chat-active {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.chat-message {
  display: flex;
  gap: 0.75rem;
  max-width: 80%;
}

.chat-message--user {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.chat-message--bot {
  align-self: flex-start;
}

.chat-message-avatar {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
}

.chat-message-content {
  flex: 1;
  min-width: 0;
}

.chat-message-text {
  padding: 0.75rem 1rem;
  border-radius: 12px;
  background: #f8f9fa;
  color: var(--dermiqt-dark-brown);
  line-height: 1.4;
  word-wrap: break-word;
}

.chat-message--user .chat-message-text {
  background: linear-gradient(
    135deg,
    var(--dermiqt-yellow),
    var(--dermiqt-orange)
  );
  color: var(--dermiqt-dark-brown);
}

.chat-message-time {
  font-size: 0.75rem;
  color: #6c757d;
  margin-top: 0.25rem;
  text-align: right;
}

.chat-message--bot .chat-message-time {
  text-align: left;
}

/* Quick Replies */
.quick-replies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.quick-reply-btn {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  transition: all 0.2s ease;
}

.quick-reply-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Chat Input */
.chat-input-container {
  padding: 1rem;
  border-top: 1px solid #f0f0f0;
  background: white;
}

.chat-input {
  width: 100%;
}

.chat-input :deep(.q-field__control) {
  border-radius: 25px;
  background: #f8f9fa;
}

.chat-input :deep(.q-field__native) {
  padding: 0.75rem 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .chat-window {
    width: calc(100vw - 2rem);
    height: calc(100vh - 4rem);
    bottom: 1rem;
    right: 1rem;
    left: 1rem;
  }

  .chat-bubble {
    bottom: 1rem;
    right: 1rem;
  }
}

@media (max-width: 480px) {
  .chat-window {
    width: calc(100vw - 1rem);
    height: calc(100vh - 2rem);
    bottom: 0.5rem;
    right: 0.5rem;
    left: 0.5rem;
  }

  .chat-bubble {
    bottom: 0.5rem;
    right: 0.5rem;
    padding: 0.75rem 1rem;
  }

  .chat-label {
    display: none;
  }
}
</style>
