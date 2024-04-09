import { useState } from "react";

import UserForm from "./UserForm/UserForm";
import TextInput from "./TextInput/TextInput";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import Form from "./Form/Form";

export default function App() {
  const [text, setText] = useState("qwerty");
  const [lang, setLang] = useState("en");
  const [user, setUser] = useState(null);

  const saveUser = (user) => {
    console.log(user);
    setUser(user);
  };

  return (
    <div>
      <h1>Form in React</h1>

      {user && (
        <div>
          <p>User: {user.username}</p>
          <p>Role: {user.role}</p>
        </div>
      )}

      <UserForm onSubmit={saveUser} />

      <hr />

      <TextInput value={text} onChange={setText} />
      <p>{text}</p>

      <hr />

      <LangSwitcher lang={lang} onSelect={setLang} />
      <p>Current lang: {lang}</p>

      <hr />

      <Form />
    </div>
  );
}
