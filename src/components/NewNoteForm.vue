<template>
    <div class="form">
        <form @submit.prevent="onSubmit">
            <input class="form-control" type="text" v-model="newTask">
            <button class="btn btn-outline-dark mt-3" 
            type="submit"
            :disabled="newTask === '' ">
                Добавить
            </button>
        </form>
    </div>
</template>

<script>

import {NewTask} from '@/modules/NewTask'


export default {
    name:'new-task-form',
    data() {
        return{
            newTask: ''
        }
    },
    methods:{
        onSubmit(){
            let task = new NewTask(this.newTask)
            this.$emit('newt-taks-submit', task)
            this.newTask = ''

            console.log(task)

        }
    }
}
</script>