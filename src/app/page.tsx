import MainPage from "@/components/mainPage/main";
import Sidebar from "@/components/sidebar/sidebar";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <MainPage />
    </main>
  );
}
