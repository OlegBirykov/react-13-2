export const listRequestAPI = async () => {
  const response = await fetch(process.env.REACT_APP_SERVICES_URL);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export const detailsRequestAPI = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_SERVICES_URL}/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}