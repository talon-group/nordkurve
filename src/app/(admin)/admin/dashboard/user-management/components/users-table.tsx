import { getUsersAction } from "../actions";
import { SelectRole } from "./select-role";
interface User {
  isActive: boolean;
  email: string;
  name: string;
  role: {
    name: string;
  };
  createdAt: Date;
}

// Define the table headers
const tableHeaders = [
  "Status",
  "Email",
  "Name",
  "Role",
  "Created at (YYYY-MM-DD)",
];

// Export the UsersTable component
export const UsersTable = async () => {
  // Fetch users using the getUsersAction
  const users: User[] = await getUsersAction();

  // Return a message if no users are found
  if (!users || users.length === 0) {
    return <p>No users found</p>;
  }

  // Render the table
  return (
    <div className="overflow-x-auto">
      <table aria-label="users list" className="table table-md">
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Map through the users array and render each user */}
          {users.map((user: User) => (
            <tr key={user.email} className="hover" aria-label={user.email}>
              <td>{user.isActive ? "Active" : "Inactive"}</td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td aria-label={user.role.name}>
                {/* Render the SelectRole component */}
                <SelectRole userRoleName={user.role.name} email={user.email} />
              </td>
              <td>
                {/* Format the date */}
                {user.createdAt.toLocaleString("eu", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};