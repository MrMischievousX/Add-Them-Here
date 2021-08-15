import { useState } from "react";
import { Props } from "../App";

interface AddToListProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<AddToListProps> = ({
  setPeople,
  people,
}): JSX.Element => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    email: "",
    url: `https://source.unsplash.com/500x500/?face`,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (!input.name || !input.age || !input.email || !input.url) return;
    const temp = Math.floor(Math.random() * 1 + 500);

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: `https://source.unsplash.com/${temp}x${temp}/?face`,
        email: input.email,
      },
    ]);

    setInput({
      name: "",
      age: "",
      url: "https://source.unsplash.com/500x500/?face",
      email: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="name"
        value={input.name}
        placeholder="Name"
      />
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="age"
        value={input.age}
        placeholder="Age"
      />
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="url"
        value={input.url}
        placeholder="Image Url"
      />
      <textarea
        onChange={handleChange}
        className="AddToList-input"
        name="email"
        value={input.email}
        placeholder="Email"
      />
      <button onClick={handleClick} className="AddToList-btn">
        Add to List
      </button>
    </div>
  );
};

export default AddToList;

// https://source.unsplash.com/500x500/?face
