import { execFetch } from "./fetchUtil";

async function login(credentials) {
  const response = await execFetch("api/auth/login", "post", credentials);
  return response;
}

const fetchAuth = {
  login,
};

export default fetchAuth;
