"use client";

import { useActionState } from "react";
import { registerUser } from "./actions";

const RegisterPage = () => {
  const [state, formAction] = useActionState(registerUser, {
    success: false,
    user: null,
    message: "",
  });

  return (
    <form action={formAction}>
      <input name="name" placeholder="Name..." required />
      <input type="email" name="email" required placeholder="Email..." />
      <input
        type="password"
        name="password"
        placeholder="Password..."
        required
      />
      <button type="submit">Register Account</button>

      {state.success ? (
        <div>
          <p style={{ color: "green" }}>Account created successfully!</p>
        </div>
      ) : (
        <div>
          <p style={{ color: "red" }}>{state.message}</p>
        </div>
      )}
    </form>
  );
};

export default RegisterPage;
