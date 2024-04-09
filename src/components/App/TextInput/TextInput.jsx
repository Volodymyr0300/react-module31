export default function TextInput({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
        console.log(e.target.value);
      }}
    />
  );
}
