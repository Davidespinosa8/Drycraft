import { Form } from "../Form";
import { Transition } from "../Transition";

export function MessageForm(){
    return(
        <Transition>
            <main className="max-w-5xl mx-auto">
                <div className="relative px-6 py-20 md:py-64" id="contact">
                        <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                            <div>
                                <h2 className="text-5xl font-semibold">
                                    <span className="block degradedBlue bg-blueLight">Si quieres conocernos mas </span>
                                    comunicate con nosotros 📱<br />
                                </h2>
                                <p className="max-w-md mt-10">Nos tomamos muy enserio tus consultas, por eso completa el siguiente formulario con tus datos y lo que desees saber para tener en cuenta a la hora de comunicarnos. Agradecemos tu interés ! 😊</p>
                            </div>
                            < Form/>
                        </div>
                </div>
            </main>
        </Transition>
    )
}