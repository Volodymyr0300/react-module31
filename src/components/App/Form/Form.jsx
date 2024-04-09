import { FaTshirt } from "react-icons/fa";
import { useState } from "react";

const initialValue = {
  login: "",
  email: "",
  tech: "html",
  size: "s",
  color: "red",
};

export default function Form() {
  const [state, setState] = useState(initialValue);

  //   const changeLogin = (e) => {
  //     setState({
  //       ...state,
  //       login: e.target.value,
  //     });
  //   };

  //   const changeEmail = (e) => {
  //     setState({
  //       ...state,
  //       email: e.target.value,
  //     });
  //   };

  //   const changeTech = (e) => {
  //     setState({
  //       ...state,
  //       tech: e.target.value,
  //     });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(state);
    setState(initialValue);
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <FaTshirt size={16} color={state.color} />
      <input
        type="text"
        name="login"
        value={state.login}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={state.email}
        onChange={handleChange}
      ></input>

      <select name="tech" id="" value={state.tech} onChange={handleChange}>
        <option value="html">HTML</option>
        <option value="js">JavaScript</option>
        <option value="react">React</option>
      </select>

      <select name="size" value={state.size} onChange={handleChange}>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
      </select>
      <select name="color" value={state.color} onChange={handleChange}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
