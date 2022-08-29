<template>
    <div class="content d-flex justify-content-start flex-row">
        <div class="task-item  list-group-item animate__animated animate__fadeIn" :class="{active: item === selectedTaskActive}">
            <div @click="selectedTask(item)" class="task-name">
                {{item.task}} 
                <div class="icon" 
                    v-if="item === selectedTaskActive">
                        <i @click="addNote(item)" class="bi bi-window-plus" title="Новая заметка"></i>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import { NewNote } from '@/modules/NewNote'



export default {
    name:'task-item',
    components:{
        
    },
    props:{
        item:{
            type: Object
        }
    },
    data() {
        return{

        }
    },
    methods:{
        selectedTask(item){
            this.$store.commit('choiseTaskActive', item)
        },
        addNote(item){
            let note = new NewNote()
            note.title = ''
            note.textarea = ''
            item.notes.push(note)
            // this.$store.commit('addTaskNote', item)
        }
    },
    computed:{
        selectedTaskActive() {
            return this.$store.state.selectedTask
        }
    }

}
</script>

<style scoped>
.content{
        /* display: grid;
        min-height: 500px;
        grid-template-columns: 1fr 2fr;
        -moz-column-gap: 10px;
        column-gap: 10px;
        min-height: 1vh; */
    }
    .icon{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
        /* z-index: 2; */
    }
    .task-item{
        width: 294px;
        height: 42px;
        cursor: pointer;
    }
</style>