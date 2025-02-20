import { useState } from "react";


const Sidebar: React.FC = () => {
    const [selectedChats, setSelectedChats] = useState<string[]>([])
    const [loading,setLoading] = useState(false)
    const chats = [
        { id: "1", name: "John Doe" },
        { id: "2", name: "Jane Smith" },
        { id: "3", name: "Tech Support" },
      ];
    return (
        <div>
            
        </div>
    );
};

export default Sidebar;