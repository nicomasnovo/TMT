export default function LoginForm() {
  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nombre" />
      <input type="email" name="mail" placeholder="Email" />
      <input type="password" name="password" placeholder="Contraseña" />
      <button type="submit">Crear Usuario</button>
    </form>
  );
}
