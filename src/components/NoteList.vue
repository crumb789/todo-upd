<template>
    <div v-if="selectedTask === item" class="task-wrapper">
        <task-note v-for="(note, indexNote) in item.notes" :key="note" 
        :note='note'
        :item='item'
        :indexItem='index'
        :indexNote='indexNote'>
        
        </task-note>
    </div>
</template>


<script>
import TaskNote from '@/components/TaskNote.vue'

export default {
    name:'note-list',
    components:{
        TaskNote
    },
    props:{
        item:{
            type: Object
        },
        index:{
            type: Number
        }
    },
    data() {
        return{

        }
    },
    computed:{
        selectedTask(){
            return this.$store.state.selectedTask
        }
    }
}
</script>