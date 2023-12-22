import { useState } from "react";

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div>
            <form onSubmit={handleConfirm} className="flex flex-col shadow-custom gap-4 w-full p-8 bg-[#222222]">
                <label >
                    Nombre
                    <input className="w-full bg-[#00000000] border border-[#ffffff73] rounded p-1"
                    type= "text"
                    value={name}
                    required
                    onChange={({target})=> setName(target.value)}/>
                </label>
                <label>
                    Telefono
                    <input className="w-full bg-[#00000000] border border-[#ffffff73] rounded p-1"
                    type= "number"
                    value={phone}
                    required
                    onChange={({target})=> setPhone(target.value)}/>
                </label>
                <label >
                    Email
                    <input className="w-full bg-[#00000000] border border-[#ffffff73] rounded p-1"
                    type= "email"
                    value={email}
                    required
                    onChange={({target})=> setEmail(target.value)}/>
                </label>
                <label >
                    Repetir Email
                    <input className="w-full bg-[#00000000] border border-[#ffffff73] rounded p-1"
                    type= "email"
                    value={email}
                    required
                    onChange={({target})=> setEmail(target.value)}/>
                </label>
                <div className="mt-4 flex justify-center">
                    <button type="submit" className="border p-2 px-6 rounded transition duration-300 hover:bg-[#313131] ">Crear Orden</button>
                </div>

            </form>
        </div>

    )
}

export default CheckoutForm