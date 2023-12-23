"use client"

import { Transition } from "../Transition"
import { Slider } from "./Slider"

export function Services() {
    return (
        <Transition className="grid px-4 py-8 md:py-46 md:px-36 md:grid-cols-2 md:gap-28 pt-20">
            <div className="max-w-xl mb-7" id="services">
                <h4 className="text-secondary">Servicios</h4>
                <h2 className="my-4 text-3xl font-semibold">Algunos de nuestros trabajos realizados, con muchas reseñas positivas, no te quedes sin preguntar</h2>
                <p className="mb-10 mt-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dapibus quam, consectetur efficitur neque. Ut rhoncus, felis eget tristique molestie, sapien arcu blandit enim.</p>
            </div>
            <div className="flex items-center justify-center">
                <Slider />
            </div>
        </Transition>
    )
}
