import React, { useEffect } from "react";
import { RootStore } from "../../stores/RootStore";
import { inject, observer } from "mobx-react";
import "./Users.css";
import { UserListItem } from "../../components";

interface IUsers {
  store?: RootStore;
}

const Users: React.FC<IUsers> = ({ store }) => {
  useEffect(() => {
    const { users } = store!.stores;
    users.getAllUsers();
  }, [false]);

  const { users } = store!.stores.users;
  return (
    <div className="users-list">
      Users Found: {users.length}
      <hr />
      {users.map((u) => (
        <UserListItem key={u.ID} user={u} />
      ))}
    </div>
  );
};

export default inject("store")(observer(Users));
