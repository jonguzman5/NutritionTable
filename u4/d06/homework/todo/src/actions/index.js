export const ACTIVE_TASK = 'ACTIVE_TASK';

export const setActiveTask = (task) => {
  return{
    payload: task,
    type: ACTIVE_TASK
  }
}
