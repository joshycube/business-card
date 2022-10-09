const API_URL = `https://reqres.in/api/users`;

export const getUsersQuery = async (queryParam: string) => {
  const response = await fetch(`${API_URL}?${queryParam}`, {
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  const userObject = await response.json();
  return userObject;
};

export const getOneUserQuery = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    const userObject = await response.json();
    if (!userObject?.data?.id) {
      throw new Error();
    }
    return userObject;
  } catch (error) {
    throw error;
  }
};

export const updateUserQuery = async (id: string, formData: any) => {
  const response = await fetch(`${API_URL}/${id}`, {
    body: JSON.stringify(formData),
    method: "PATCH",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  const userObject = await response.json();
  return userObject;
};

export const addUserQuery = async (formData: any) => {
  const response = await fetch(`${API_URL}`, {
    body: JSON.stringify(formData),
    method: "POST",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  const userObject = await response.json();
  return userObject;
};

export const deleteUserQuery = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  return response.status;
};
