"use client"

import ButtonUniversal from "@/components/button";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()


  const handleLogin = () => {
    router.push('/login')
  }

  return (
    <>
    <div className="relative">
  <BackgroundGradientAnimation>
    <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-8xl">
      <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
        Makan Siang Gratis
      </p>
      <p className="mt-5 text-sm md:text-base lg:text-lg bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">Lorem ipsum dolor sit amet consectetur adipisicing elit . <br /> Iure atque nemo velit incidunt ab harum laborum delectus, repellat porro numquam aut dolorum <br />? Aperiam suscipit , minus eveniet omnis iusto facilis ut!</p>
      <div className="mt-10 md:mt-5 lg:mt-0 pointer-events-auto">
        <ButtonUniversal 
              onClick={handleLogin} 
              label="Login Now"
            />
      </div>
    </div>
  </BackgroundGradientAnimation>
</div>
</>

  );
}
