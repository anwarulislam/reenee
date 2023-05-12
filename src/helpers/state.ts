export const getReeneeState = () => {
  const groups = localStorage.getItem("__reenee_state");
  if (groups) {
    return JSON.parse(groups);
  }
  return {};
};

export const setReeneeState = (state: any) => {
  localStorage.setItem("__reenee_state", JSON.stringify(state));
};
