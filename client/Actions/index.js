const CHANGE_USER = 'CHANGE_USER';

export function changeUser(name) {
  return {
    type: CHANGE_USER,
    name
  }
}
