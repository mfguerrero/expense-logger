import store from "../redux/store";

export async function execFetch(path, method = "get", body = null) {
  try {
    const token = store.getState().auth.token;
    const response = await fetch(path, {
      method,
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: (body && JSON.stringify(body)) || null,
    });
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      const { message } = await response.json();
      let msg = "";
      if (Array.isArray(message)) msg = message.map((m) => m.msg).toString();
      else msg = message;
      return { success: false, message: msg };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
}
