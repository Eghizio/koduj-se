import { Logo } from "@/components/Logo/Logo";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Logo scale={2} />

      <Footer location="Kraków" />
    </main>
  );
}
