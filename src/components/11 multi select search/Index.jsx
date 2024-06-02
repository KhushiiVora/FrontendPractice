import { useEffect, useRef, useState } from "react";
import "./index.css";
import Pill from "./Pill";

const Index = () => {
  const [debounceTimeoutId, setDebounceTimeoutId] = useState(null);
  const [searchInputText, setSearchInputText] = useState("");
  const [userSuggestions, setUserSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUsersSet, setSelectedUsersSet] = useState(new Set());
  const inputRef = useRef();

  useEffect(() => {
    const fetchUsers = () => {
      fetch(`http://dummyjson.com/users/search?q=${searchInputText}`)
        .then((respose) => respose.json())
        .then((data) => {
          setUserSuggestions(data.users);
        })
        .catch((error) => console.log(error));
    };
    if (searchInputText) {
      clearTimeout(debounceTimeoutId);
      const id = setTimeout(fetchUsers, 500);
      setDebounceTimeoutId(id);
    }
  }, [searchInputText]);

  const handleClick = (user) => {
    const newUsers = [...selectedUsers, user];
    setSelectedUsers(newUsers);
    setSelectedUsersSet(new Set(newUsers.map((user) => user.email)));
    setSearchInputText("");
    setUserSuggestions([]);
    inputRef.current.focus();
  };

  const handleRemove = (user) => {
    const newUsers = selectedUsers.filter(
      (selectedUser) => selectedUser.id != user.id
    );
    setSelectedUsers(newUsers);
    setSelectedUsersSet(new Set(newUsers.map((user) => user.email)));
    inputRef.current.focus();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Backspace" && selectedUsers.length && !searchInputText) {
      const lastUser = selectedUsers[selectedUsers.length - 1];
      handleRemove(lastUser);
    }
  };

  return (
    <div className="search_container">
      <div className="search_container__searchbox">
        {selectedUsers.map((user) => {
          return (
            <Pill
              key={user.email}
              className="search_container__pill"
              name={`${user.firstName} ${user.lastName}`}
              image={user.image}
              onClick={() => handleRemove(user)}
            />
          );
        })}
        <input
          ref={inputRef}
          value={searchInputText}
          type="text"
          placeholder="Search the user"
          onChange={(e) => setSearchInputText(e.target.value)}
          className="search_container--input"
          onKeyDown={(e) => handleKeyDown(e)}
          autoFocus
        />
      </div>
      <div
        className={`search_container__suggestions ${
          userSuggestions.length ? "show" : ""
        }`}
      >
        <ul className="search_container__suggestions--list">
          {userSuggestions?.map((user) => {
            return !selectedUsersSet.has(user.email) ? (
              <li
                key={user.email}
                className="search_container__suggestions--item"
                onClick={() => {
                  handleClick(user);
                }}
              >
                <img src={user.image} alt={user.username} />
                <span>{`${user.firstName} ${user.lastName}`}</span>
              </li>
            ) : (
              <></>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Index;
