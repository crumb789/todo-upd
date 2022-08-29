<template>
    <div class="container">
        <ul class="list-group ">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
export default {
    name:'task-list',
    data() {
        return{

        }
    },
}
</script>

<style scoped>
    .card {
        /* max-width: 294px; */

    }
    .list-group{
        /* max-width: 294px; */
    }
</style>