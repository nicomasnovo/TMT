export default function LoginForm() {
  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="mail" placeholder="Email" />
      <input type="password" name="password" placeholder="Contraseña" />
      <button type="submit">Ingresar</button>
    </form>
  );
}
