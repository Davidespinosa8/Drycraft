import Image from "next/image";
import { Transition } from "../Transition";

export function About() {
    return (
        <Transition className="grid gap-4 px-4 py-8 md:py-44 md:px-36 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center max-w-xl mb-7" id="about">
                <h4 className="text-secondary">Sobre nosotros</h4>
                <h2 className="my-4 text-3xl font-semibold">Drycraft para vos</h2>
                <p className="mb-10 mt-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dapibus quam, consectetur efficitur neque. Ut rhoncus, felis eget tristique molestie, sapien arcu blandit enim.</p>
                <button className="px-4 py-3 text-white transition-all duration-200 rounded-lg bg-secondary hover:bg-black">Cargar más</button>
            </div>
            <div className="flex items-center justify-center">
                <Image src="/Drycraft-SN.jpeg" alt="About" width={350} height={450} className="w-auto h-auto" priority />
            </div>
        </Transition>
    )
}
