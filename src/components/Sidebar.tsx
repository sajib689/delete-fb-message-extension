import { useState } from "react";


const Sidebar: React.FC = () => {
    const [selectedChats, setSelectedChats] = useState<string[]>([])
    const [loading,setLoading] = useState(false)
    const chats = [
        { id: "1", name: "John Doe" },
        { id: "2", name: "Jane Smith" },
        { id: "3", name: "Tech Support" },
      ];
      const handleDelete=() => {
        setLoading(true)
        
      }
      const handleSelect =(id: string) => {
        setSelectedChats((prev) => prev.includes(id) ? prev.filter(chat => chat !== id) : [...prev, id]);
      }
    return (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-4 border-l border-gray-300">
        <h2 className="text-lg font-semibold text-gray-800">Delete Messages</h2>
  
        <ul className="mt-4 space-y-2">
          {chats.map((chat) => (
            <li
              key={chat.id}
              className="flex items-center justify-between p-2 border rounded-md hover:bg-gray-100"
            >
              <span className="text-gray-700">{chat.name}</span>
              <input
                type="checkbox"
                className="w-5 h-5 accent-red-500"
                checked={selectedChats.includes(chat.id)}
                onChange={() => handleSelect(chat?.id)}
              />
            </li>
          ))}
        </ul>
  
        <div className="mt-4 flex gap-2">
          <button
            onClick={handleDelete}
            disabled={loading}
            className={`w-1/2 px-4 py-2 rounded-md text-white ${
              loading ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {loading ? "Deleting..." : "Delete Selected"}
          </button>
          <button className="w-1/2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Archive Selected
          </button>
        </div>
      </div>
    );
};

export default Sidebar;