import { Link } from "react-router-dom"

export const LateralMenu = () => {

    return (
        <div className='h-full bg-[#D9D9D9] w-1/6 items-center mr-5 rounded-3xl'>
            <ul className="menu menu-vertical p-5">
                <li>
                    <Link to={"/CreateTest"} className="text-black md:text-xl my-1 btn btn-ghost h-full w-full mt-20 p-3">
                        Criar Teste
                        <div className="divider divider-neutral w-[80%] mx-auto" />

                    </Link>
                </li>
                <li>
                    <details >
                        <summary className="text-black md:text-xl my-1 btn btn-ghost h-full w-full mt-20 p-3">Parametrização</summary>
                        <ul>
                            <li ><Link to={'/MetodoIncrustacao'} className="text-black md:text-base my-1 p-3">Metodo Incrustração</Link></li>
                            <li><a className="text-black md:text-base my-1 p-3" >Submenu 2</a></li>
                            <li><a className="text-black md:text-base my-1 p-3" >Submenu 3</a></li>
                            <li><a className="text-black md:text-base my-1 p-3" >Submenu 4</a></li>
                            <li><a className="text-black md:text-base my-1 p-3" >Submenu 5</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    )
}