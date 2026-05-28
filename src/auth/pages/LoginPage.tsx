import { Button } from "@/components/ui/button";

const LoginPage = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen w-full">
                <div className="flex flex-col items-center p-8 border border-gray-100 rounded-xl gap-4 shadow-lg">
                    <div className="flex flex-col items-center">
                        <p className="text-3xl">Bienvenido</p>
                        <p className="text-sm text-gray-600">Acceda a su cuenta</p>
                    </div>
                    <form className="flex flex-col justify-center items-start gap-4 ">
                        <label htmlFor="name">Ingrese su nombre:</label>
                        <input type="text" className="border-gray-400 border-2 rounded-xl px-3 py-2" name="name" placeholder="ej: Juan" />

                        <label htmlFor="password">Ingrese su contraseña:</label>
                        <input type="password" className="border-gray-400 border-2 rounded-xl px-3 py-2" name="password" placeholder=". . . . ." />

                        <Button className={"bg-blue-600 self-center px-18 font-montserrat"}>Ingresar</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage
