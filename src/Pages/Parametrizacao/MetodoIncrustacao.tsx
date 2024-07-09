import { useState } from "react";
import { PageModel } from "../../Components/PageModel";
import { PiPlus } from "react-icons/pi";
import { CRUDTable } from "../../Components/CRUDTable";
import { LateralMenu } from "../../Components/LateralMenu";

type formData = {
    id_metodo: number,
    nome: string,
    tempo_incrustacao: string,
    tempo_repouso: string

}
export const MetodoIncrustacao = () => {
    const dataList: Array<formData> = [{
        id_metodo: 1,
        nome: 'Metodo 1',
        tempo_incrustacao: 'Tempo de incrustacao 1',
        tempo_repouso: 'Tempo de repouso 1'

    },]
    const [data, setData] = useState(dataList);
    const [dataForm, setDataForm] = useState<formData>();

    const remove = (element: any) => {
        setData(data.filter(e => e['id_metodo' as keyof object] != element));

    }
    const edit = (element: any) => {
        let retorno: formData | undefined = dataList.find(e => e.id_metodo == element);
        if (retorno) {
            document.getElementById("modalButton")?.click();
            console.log();
            setDataForm(retorno)
        }
    }
    const submitForm = (form: any) => {
        form.preventDefault();
        let retorno: formData = {
            id_metodo:form.target[0].value,
            nome: form.target[1].value,
            tempo_incrustacao:form.target[2].value,
            tempo_repouso:form.target[3].value
        }

        if (dataList.find(e => e.id_metodo == form.target[0].value)) {
            setData(data.map(e => e.id_metodo == retorno?.id_metodo ? retorno : e))
        } else{
            setData([...data, retorno])
        }
    }
    const closeModal = () => {
        (document.getElementById("ModalForm") as HTMLFormElement)?.reset();
        setDataForm({} as formData);
    }

    return (
        <PageModel>
            {/* Modal */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal " role="dialog">
                <div className="modal-box flex-col flex items-center">
                    <form id='ModalForm' className="form-control rounded-xl p-10" onSubmit={(form) => { submitForm(form) }}>
                        <h3 className="text-lg font-bold mb-10 self-center">Cadastro de Metodo de Incrustação</h3>
                        <label className="input input-bordered text-white  bg-white flex items-center gap-2 mb-5">
                            Id_metodo |
                            <input type="text" className="grow  text-white" placeholder="..." defaultValue={dataForm?.id_metodo} disabled />
                        </label>
                        <label className="input input-bordered text-gray-400  bg-white flex items-center gap-2 mb-5">
                            Nome |
                            <input type="text" className="grow  text-black" placeholder="..." defaultValue={dataForm?.nome} required />
                        </label>

                        <label className="input input-bordered text-gray-400 bg-white flex items-center gap-2 mb-5">
                            Tempo Incrustação |
                            <input type="text" className="grow text-black" placeholder="..." required defaultValue={dataForm?.tempo_incrustacao} />
                        </label>

                        <label className="input input-bordered text-gray-400 bg-white flex items-center gap-2 mb-5">
                            Tempo Repouso |
                            <input type="text" className="grow text-black" placeholder="..." required defaultValue={dataForm?.tempo_repouso} />
                        </label>
                        <div className="modal-action justify-between w-full">
                            <label htmlFor="my_modal_6" onClick={closeModal} className="btn btn-error">Close!</label>
                            <button className="btn btn-success" >Cadastrar</button>
                        </div>
                    </form>

                </div>
            </div>
            <div className=' flex flex-row h-full'>
                <LateralMenu />
                <div className="h-full bg-[#D9D9D9] w-5/6 rounded-3xl p-20 ">
                    <div className=" justify-between items-center flex border-gray-600 border-2 rounded-xl rounded-e-full p-2">
                        <a className="text-xl text-black font-semiboldd">Método Incrustação</a>
                        <label id="modalButton" htmlFor="my_modal_6" className="hover:bg-green-500 transition-all hover:w-16 btn btn-circle btn-outline border-black text-black"><PiPlus  /></label>
                    </div>
                    <CRUDTable data={data} deleteFunction={remove} editFunction={edit} />
                </div>
            </div>

        </PageModel>
    )
}