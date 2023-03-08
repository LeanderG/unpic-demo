let id = 1;
export function getId() {
  return id++;
}

export function resetId() {
  id = 0;
}
