import { createStore } from 'vuex'

export default createStore({
  state: {
    titleHeader: 'Заметки',
    tasks: [],
    selectedTask: null
  },
  getters: {
  },
  mutations: {
    addTask(state, task){
      state.tasks.push(task)
    },
    addTaskNote(state, task, note){
      state.tasks.task.notes.push(note)
    },
    choiseTaskActive(state, task){
      state.selectedTask = task
    },
    changeNoteTitleTextarea(state, arr){
      let indexItem = arr[0]
      let indexNote = arr[1]
      let title = arr[2]
      let text = arr[3]
      state.tasks[indexItem].notes[indexNote].title = title
      state.tasks[indexItem].notes[indexNote].textarea = text
    },

    agreePrivacyPolicy(state) {
      localStorage.setItem('agreedToPrivacy', state.tasks)
      state.tasks = JSON.parse(localStorage.tasks)
    },

    initialiseStore(state) {
      // console.log(state.tasks)
      if(localStorage.getItem('tasks')){
        state.tasks = JSON.parse(localStorage.tasks)
      }
    }

  },
  actions: { 
    
  },
  modules: {
  },

  mounted(state){
    if(localStorage.tasks){
     state.tasks = JSON.parse(localStorage.tasks)
    }

  },
  watch:{
    tasks:{
      handler(newCity){
          localStorage.tasks = JSON.stringify(newCity)
      },
      deep: true
    },

  }
})
