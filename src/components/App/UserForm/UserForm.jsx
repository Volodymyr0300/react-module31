import { useId } from "react";

export default function UserForm({ onSubmit }) {
  const usernameFieldId = useId();
  const roleFieldId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(e.target.elements.username.value);
    // console.log(e.target.elements.role.value);

    onSubmit({
      username: e.target.elements.username.value,
      role: e.target.elements.role.value,
    });

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={usernameFieldId}>Name label:</label>
        <input type="text" name="username" id={usernameFieldId} />
      </div>

      <div>
        <label htmlFor={roleFieldId}>Role label:</label>
        <select name="role" id={roleFieldId}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="guest">Guest</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
