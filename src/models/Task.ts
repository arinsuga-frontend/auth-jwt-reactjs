export default interface TaskModel {
    id: number, name: string, done: boolean
}

export type TaskAction = {
    type: 'create'|'update'|'delete'|'reset',
    task: { id: number, name: string, done: boolean }
}
