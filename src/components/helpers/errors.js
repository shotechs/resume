export function HandleErrors(response) {
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(response.status + " Failed Fetch ");
    }

    if (response.status === 400) {
      throw new Error(response.status);
    }
    throw Error(response.statusText);
  }
  return response;
}
