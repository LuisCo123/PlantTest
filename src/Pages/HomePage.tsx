import { PageModel } from '../Components/PageModel'
import UfbaLogo from '../assets/UfbaLogo.png'
export const HomePage = () => {

    return (
        <div>
            {/* modelo de página */}
            <PageModel>
                {/* Menu Horizontal */}
                <div className=' flex flex-row h-full'>
                    <div className='h-full bg-[#D9D9D9] w-1/4 items-center mr-5 rounded-3xl'>
                        <ul className="menu menu-vertical p-5">
                            <li>
                                <button className="text-black md:text-xl my-1 btn btn-ghost h-full w-full mt-20 p-3" onClick={() => alert("click")}>
                                    Criar Teste
                                    <div className="divider divider-neutral w-[80%] mx-auto" />
                                </button>
                            </li>

                            <li>
                                <button className="text-black md:text-xl my-1 btn btn-ghost h-full w-full mt-20 p-3" onClick={() => alert("click")}>
                                    Iniciar Teste
                                    <div className="divider divider-neutral w-[80%] mx-auto" />
                                </button>
                            </li>
                            <li>
                                <button className="text-black md:text-xl my-1 btn btn-ghost h-full w-full mt-20 p-3" onClick={() => alert("click")}>
                                    Listar Teste
                                    <div className="divider divider-neutral w-[80%] mx-auto" />
                                </button>
                            </li>
                            <li>
                                <button className="text-black md:text-xl my-1 btn btn-ghost h-full w-full mt-20 p-3" onClick={() => alert("click")}>
                                    Resultados
                                    <div className="divider divider-neutral w-[80%] mx-auto" />
                                </button>
                            </li>
                        </ul>
                    </div>
                    {/* Read Me lateral para informações necessárias */}
                    <div className='h-full bg-[#D9D9D9] w-3/4 rounded-3xl p-20 relative'>
                        <div className='mb-14'>
                            <p className='text-black text-6xl mb-2'>Sobre:</p>
                            <div className='flex justify-end'>
                                <p className='text-black w-[90%] justify-end text-justify indent-14 text-xl'>
                                    Lorem ipsum blandit condimentum felis lectus est nostra, laoreet himenaeos dapibus fringilla gravida tempus per donec, curae aliquam risus libero ut mattis. suspendisse posuere faucibus tempus duis donec proin nec curabitur eu facilisis at, scelerisque felis vehicula condimentum sit lacus amet ad commodo dapibus, eu neque habitasse elementum pharetra porttitor erat sapien conubia ac. nec congue enim etiam praesent turpis nisl elementum, sollicitudin purus praesent ligula volutpat proin, duis proin commodo primis mollis suspendisse. volutpat imperdiet sociosqu leo sociosqu condimentum, cursus dictumst sed torquent porttitor primis, platea ligula ut enim.
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className='text-black text-6xl mb-2'>Objetivo:</p>
                            <div className='flex justify-end'>
                                <p className='text-black w-[90%] justify-end text-justify indent-14 text-xl'>
                                    Lorem ipsum blandit condimentum felis lectus est nostra, laoreet himenaeos dapibus fringilla gravida tempus per donec, curae aliquam risus libero ut mattis. suspendisse posuere faucibus tempus duis donec proin nec curabitur eu facilisis at, scelerisque felis vehicula condimentum sit lacus amet ad commodo dapibus, eu neque habitasse elementum pharetra porttitor erat sapien conubia ac. nec congue enim etiam praesent turpis nisl elementum, sollicitudin purus praesent ligula volutpat proin, duis proin commodo primis mollis suspendisse. volutpat imperdiet sociosqu leo sociosqu condimentum, cursus dictumst sed torquent porttitor primis, platea ligula ut enim.
                                </p>
                            </div>
                        </div>
                        <img src={UfbaLogo} className='absolute m-auto left-0 right-0 top-0 bottom-0 '/>
                    </div>
                </div>
            </PageModel>
        </div>
    )
}