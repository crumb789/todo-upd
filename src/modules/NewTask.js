export class NewTask{
    task
    notes
    constructor(task){
        this.task = task
        this.id = new Date()
        this.notes = []
    }

    get taskArr(){
        return [this.task, this.id]
    }

}