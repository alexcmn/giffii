import { User } from "../../stores/models";
import React from "react";

interface IUserListItem {
  user: User;
}

const UserListItem: React.FC<IUserListItem> = ({ user }) => {
  return (
    <div>
      {user.FirstName} {user.LastName}
    </div>
  );
};

export default UserListItem;
