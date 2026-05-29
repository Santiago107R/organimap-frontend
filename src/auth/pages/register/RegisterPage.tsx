import { Button } from "@/components/ui/button";

const RegisterPage = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen w-full">
                <div className="flex flex-col items-center p-8 border border-gray-100 rounded-xl gap-4 shadow-lg">
                    <div className="flex flex-col items-center">
                        <p className="text-3xl">Crear Usuario</p>
                        <p className="text-sm text-gray-600">Acceda a su cuenta</p>
                    </div>
                    <form className="flex flex-col justify-center items-start gap-4 ">
                        <label htmlFor="name">Ingresar nombre:</label>
                        <input type="text" className="border-gray-400 border-2 rounded-xl px-3 py-2" name="name" placeholder="Nombre completo" />

                        <label htmlFor="password">Crear contraseña:</label>
                        <input type="password" className="border-gray-400 border-2 rounded-xl px-3 py-2" name="password" placeholder=". . . . ." />
                        
                        <label htmlFor="password">Ingresar DNI (opcional):</label>
                        <input type="password" className="border-gray-400 border-2 rounded-xl px-3 py-2" name="password" placeholder="28.823.192" />
                        
                        <label htmlFor="password">Asignar rol:</label>
                        <input type="password" className="border-gray-400 border-2 rounded-xl px-3 py-2" name="password" placeholder="Ej: docente" />

                        <Button className={"bg-blue-600 self-center px-18 font-montserrat"}>Crear usuario</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPage
