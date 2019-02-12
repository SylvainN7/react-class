export const UPDATE_TITLE = "UPDATE_TITLE";
export const UPDATE_CLOCK = "UPDATE_CLOCK";

export const updateTitle = newTitle => ({
  type: UPDATE_TITLE,
  payload: newTitle
});

export const updateClock = isDisplayed => ({
  type: UPDATE_CLOCK,
  payload: isDisplayed
});