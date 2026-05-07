import SectionCard from "@/user/components/SectionCard"

const HomePage = () => {
    return (
        <div className="p-10 flex flex-col gap-6">
            <SectionCard title="Título de la tarjeta de ejemplo" description="Esta es una descripción de ejemplo para la tarjeta." textButton="Ver más tarde" img={'/favicon.svg'} url="/example" shadow={false}  />
            <SectionCard title="Otra tarjeta de ejemplo" description="Esta es otra descripción de ejemplo para la tarjeta." textButton="Ver más" img={'/favicon.svg'} url="/example2" shadow={true} />
        </div>
    )
}

export default HomePage
