<template>
    <div :class="class">
        <slot />
    </div>
</template>

<script setup lang="ts">

    const props = defineProps(['class'])

</script>