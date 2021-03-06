# Custom Code Blocks

## JS Code Block

```js
const a = 5;
```

## Vue Code Block

```vue
<template>
  <input v-model.lazy="message" />
</template>

<script setup>
import { watch, ref } from "vue";

const message = ref("");

const saveMessage = () => {
  // do anything with the message
};

watch(message, (newMessage) => {
  saveMessage(newMessage); // only called on change events
});
</script>
```

## Vue Code Block With Line Highlighting

```vue {2,6-10}
<template>
  <input v-model.lazy="message" />
</template>

<script setup>
import { watch, ref } from "vue";

const message = ref("");

const saveMessage = () => {
  // do anything with the message
};

watch(message, (newMessage) => {
  saveMessage(newMessage); // only called on change events
});
</script>
```

## Vue Code Block With Filename

```vue [components/content/MyComponent.vue]
<template>
  <input v-model.lazy="message" />
</template>
```
