import React from "react";

export interface Props {
  person: {
    name: string;
    age: number;
    url: string;
    email?: string;
  };
}

const List: React.FC<Props> = ({ person }) => {
  const renderList = (): JSX.Element => {
    return (
      <li className="List">
        <div className="List-header">
          <img className="List-img" src={person.url} alt={person.name} />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className="List-email">{person.email}</p>
      </li>
    );
  };

  return <div>{renderList()}</div>;
};

export default List;
