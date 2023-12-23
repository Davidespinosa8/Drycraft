import React from 'react';

export function Form() {
    // Función para manejar el envío del formulario
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Obtén el formulario de manera segura
        const form = event.currentTarget;

        // Accede a los elementos del formulario de manera segura
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
        const description = (form.elements.namedItem('description') as HTMLInputElement).value;

        // Aquí debes reemplazar '1234567890' con el número de teléfono al que deseas enviar el mensaje
        const whatsappNumber = '+542364357363';
        const message = `Nombre: ${name}\nTeléfono: ${phone}\nDescripción: ${description}`;

        // Abre WhatsApp con el mensaje preparado
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`);
    };

    // Resto de tu código...

    return (
        <div className="px-px 3">
            <form onSubmit={handleSubmit}>
                <div className="py-4 px-3 rounded-lg shadow-light">
                    <div className="flex gap-4">
                        <div>
                            <p>Completa tus datos y nos contactamos a la brevedad</p>
                        </div>
                    </div>
                    <div className="my-5">
                        <div>
                            <label className="text-sm text-secondary"> Nombre</label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full rounded-md border-0 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <label className="text-sm text-secondary"> Teléfono</label>
                        <div>
                            <input
                                id="phone"
                                name="phone"
                                type="phone"
                                autoComplete="phone"
                                className="w-full rounded-md border-0 py-1.5 px-2 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm"
                            />
                        </div>
                    </div>
                    <div className="mt-2">
                        <label className="text-sm text-secondary"> Descripción</label>
                        <div className="mt-2">
                            <textarea
                                name="description"
                                rows={3}
                                className="w-full rounded-md text-sm border-0 py-1.5 px-2 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
                                defaultValue={''}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-5 my-4">
                        <button type="submit" className="bg-secondary px-4 py-2 text-white rounded-lg text-sm">Enviar mensaje</button>
                        <button className="border-[1px] border-secondary text-secondary px-2 py-2 rounded-lg text-sm">Llamar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}


