import ReactDOM from "react-dom";
import Sidebar from "./components/Sidebar";

const container = document.createElement('div');
container.id = 'fb-delete-sidebar';
document.body.appendChild(container);

ReactDOM.render(<Sidebar/>,container)