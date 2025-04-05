<script setup>

const props = defineProps(['active']);
const emit = defineEmits(['isModalActive']);

</script>

<template>
    <div class="modal" :class="{ 'is-active': props.active }">
        <div class="modal-background" @click="emit('isModalActive', false)"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <slot name="header"></slot>
            </header>

            <section class="modal-card-body has-text-centered">
                <slot name="body"></slot>
            </section>

            <footer class="modal-card-foot">
                <slot name="footer"></slot>
            </footer>
        </div>
    </div>
</template>

<style scoped></style>