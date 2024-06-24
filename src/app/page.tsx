import Hero from "./components/home/Hero"
import PromoISR from "./components/home/PromoISR"
import PromoCSR from "./components/home/PromoCSR"
import Divider from "./components/ui/Divider"

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <PromoISR />
      <Divider />
      <PromoCSR />
    </div>
  )
}
