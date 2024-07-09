import { useEffect, useState } from "react"
import { CRUDTable } from "../../Components/CRUDTable"
import { PageModel } from "../../Components/PageModel"
import { Link } from "react-router-dom"
import { LateralMenu } from "../../Components/LateralMenu"
import { PiPlus } from "react-icons/pi"

export const CreateTest = () => {
    const dataList: Array<object> = [{
        id: 1,
        name: 'Cy Ganderton',
        role: 'gerente',
        color: 'blue'

    }, {
        id: 2,
        name: 'Cy Ganderton',
        role: 'Employ',
        color: 'blue'

    }, {
        id: 3,
        name: 'Dy Gandeerton',
        role: 'gerente',
        color: 'green'

    }, {
        id: 4,
        name: 'Dy Gandeerton',
        role: 'gerente',
        color: 'green'

    },]
    const [data, setData] = useState(dataList);

    const remove = (element: any) => {
        setData(data.filter(e => e['id' as keyof object] != element))

    }
    const edit = (element: any) => {
        console.log(element);

    }
    return (
        <PageModel>
            {/* Modal */}
            {/* <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal modal-bottom justify-center" role="dialog">
                <div className="modal-box flex-col flex items-center">
                    <h3 className="text-lg font-bold">Cadastro de... !</h3>
                    <p className="py-4">This modal works with a hidden checkbox!</p>
                    <div className="modal-action justify-end w-full">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>
            <div className=' flex flex-row h-full'>
                <LateralMenu />
                <div className="h-full bg-[#D9D9D9] w-5/6 rounded-3xl p-20 ">
                    <div className=" justify-between items-center flex ">
                        <a className="text-6xl text-black ml-10 ">Cadastro de testes</a>
                        <label htmlFor="my_modal_6" className="btn btn-circle btn-outline border-black text-black"><PiPlus /></label>
                    </div>
                    <CRUDTable data={data} deleteFunction={remove} editFunction={edit} />
                </div>
            </div> */}

        </PageModel>
    )
}