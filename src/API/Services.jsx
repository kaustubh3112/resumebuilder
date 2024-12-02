// Set Data to local storage
export const setDataToLocalStorage = (key, value) => {
  try {
    let data = JSON.stringify(value);
    localStorage.setItem(key, data);
  } catch (error) {
    console.error("Error while save the data", error);
  }
};

// Get Data from local storage
export const getDataFromLocalStorage = (key) => {
  try {
    let data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error while loading data from storage", error);
  }
};
