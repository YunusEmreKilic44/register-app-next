const RegisterPage = () => {
  return (
    <form>
      <input name="name" placeholder="Name..." required />
      <input type="email" name="email" required placeholder="Email..." />
      <input
        type="password"
        name="password"
        placeholder="Password..."
        required
      />
      <button>Register Account</button>
    </form>
  );
};

export default RegisterPage;
