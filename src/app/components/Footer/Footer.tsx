import { LiaInstagram, LiaWhatsapp } from 'react-icons/lia'

export function Footer() {
    return (
        <div className="px-4 py-8 bg-black/90 md:py-40 md:px-36">
            <div className='grid gap-8 grid-cols-11 md:grid-cols-[1fr,1fr,1fr,_400px] text-white'>
                
                <div className="md:text-right md:col-end-11">
                    <h4 className="mb-6 text-xl font-semibold">Drycraft</h4>
                    <p>Calle La casa de Lif y Luu, N°1</p>
                    <p>Junín, Argentina</p>
                    <div className="flex gap-4 mt-5 md:justify-end">
                        <LiaInstagram className="text-3xl cursor-pointer" href="https://www.instagram.com/drycraft_/" />
                        <LiaWhatsapp className="text-3xl cursor-pointer" href="https://wa.me/542364622873" />
                    </div>
                </div>
            </div>
        </div>
    )
}
