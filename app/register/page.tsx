import { registerUser } from "./actions";

const RegisterPage = () => {
  return (
    <form action={registerUser}>
      <input name="name" placeholder="Name..." required />
      <input type="email" name="email" required placeholder="Email..." />
      <input
        type="password"
        name="password"
        placeholder="Password..."
        required
      />
      <button type="submit">Register Account</button>
    </form>
  );
};

export default RegisterPage;
