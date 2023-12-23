export function Banner() {

    return (
        <div className="container relative mx-auto pb-60">
        <div className="pt-20 md:pt-0 min-h-[80vh] bg-banner bg-no-repeat bg-cover bg-center rounded-3xl relative flex flex-col items-center md:justify-center">
            <div className="max-w-3xl text-center text-white">
            <h2 className="text-7xl font-mono font-semibold text-cyan-950">Dycraft</h2>
            <p className="mt-2 text-3xl font-mono font-semibold md:mt-8 text-cyan-950">Toda la experiencia en construcción en seco para transformar lo que necesitas. </p>
            </div>
        </div>
        </div>
    );
}