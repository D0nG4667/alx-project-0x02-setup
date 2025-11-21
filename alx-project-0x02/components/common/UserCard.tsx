import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-200">
      <h2 className="text-xl font-semibold text-blue-700 mb-2">{name}</h2>
      <p className="text-gray-700 mb-2">{email}</p>
      <p className="text-sm text-gray-600">
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
