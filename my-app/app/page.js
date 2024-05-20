import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-4">
        <h1>Welcome to ChatGPT Clone</h1>
        <p>Select a chat from the sidebar or create a new one.</p>
      </div>
    </div>
  );
}
