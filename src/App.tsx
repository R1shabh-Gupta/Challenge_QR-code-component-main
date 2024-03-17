import Footer from "./components/Footer";
import QRCodeCard from "./components/QRCodeCard";

export default function App() {
  return (
    <div className="bg-[#D5E2EF] h-screen flex flex-col gap-4 items-center justify-center">
      <QRCodeCard />
      <Footer />
    </div>
  );
}
