import { useState } from "react";
import { PageModel } from "../../Components/PageModel";
import { PiPlus } from "react-icons/pi";
import { CRUDTable } from "../../Components/CRUDTable";
import { LateralMenu } from "../../Components/LateralMenu";

type formData = {
    id_solucao: number,
    nome: string,
    tipo_preparo: string,
}
export const SolucaoIncrustante = () => {
    const dataList: Array<formData> = [{
        id_solucao: 1,
        nome: 'Precipitação 1',
        tipo_preparo: 'Preparo 1',
    },]
    const [data, setData] = useState(dataList);
    const [dataForm, setDataForm] = useState<formData>();

    const remove = (element: any) => {
        setData(data.filter(e => e['id_metodo' as keyof object] != element));

    }
    const edit = (element: any) => {
        let retorno: formData | undefined = dataList.find(e => e.id_solucao == element);
        if (retorno) {
            document.getElementById("modalButton")?.click();
            console.log();
            setDataForm(retorno)
        }
    }
    const submitForm = (form: any) => {
        form.preventDefault();
        let retorno: formData = {
            id_solucao: form.target[0].value,
            nome: form.target[1].value,
            tipo_preparo: form.target[2].value,
        }

        if (dataList.find(e => e.id_solucao == form.target[0].value)) {
            setData(data.map(e => e.id_solucao == retorno?.id_solucao ? retorno : e))
        } else {
            setData([...data, retorno])
        }
    }
    const closeModal = () => {
        (document.getElementById("ModalForm") as HTMLFormElement)?.reset();
        setDataForm({} as formData);
    }

    return (
        <PageModel>
            {/* Modal de cadastro e edição */}

            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal " role="dialog">
                <div className="modal-box flex-col flex items-center">
                    <form id='ModalForm' className="form-control rounded-xl p-10" onSubmit={(form) => { submitForm(form) }}>
                        <h3 className="text-lg font-bold mb-10 self-center">Cadastro de Solução Incrustante</h3>
                        <label className="input input-bordered text-white  bg-white flex items-center gap-2 mb-5">
                            id solucao incrustante |
                            <input type="text" className="grow  text-white" placeholder="..." defaultValue={dataForm?.id_solucao} disabled />
                        </label>
                        <label className="input input-bordered text-gray-400  bg-white flex items-center gap-2 mb-5">
                            Nome |
                            <input type="text" className="grow  text-black" placeholder="..." defaultValue={dataForm?.nome} required />
                        </label>
                        <label className="input input-bordered text-gray-400 bg-white flex items-center gap-2 mb-5">
                            tipo preparo |
                            <input type="text" className="grow text-black" placeholder="..." required defaultValue={dataForm?.tipo_preparo} />
                        </label>
                       
                        <div className="modal-action justify-between w-full">
                            <label htmlFor="my_modal_6" onClick={closeModal} className="btn btn-error">Fechar</label>
                            <button className="btn btn-success text-white" >Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Conteudo da página */}
            <div className=' flex flex-col h-full lg:flex-row md:justify-center'>
                <LateralMenu />
                <div className="h-full bg-[#D9D9D9] w-full lg:w-5/6 rounded-3xl p-20 ">
                    <div className=" justify-between items-center flex border-gray-600  p-2">
                        <a className="text-2xl text-black font-semibold">Solução Incrustante</a>
                        <label id="modalButton" htmlFor="my_modal_6" className="hover:bg-green-500 transition-all hover:w-16 btn btn-circle btn-outline border-black text-black"><PiPlus /></label>
                    </div>
                    <CRUDTable idColumnName='id_solucao' data={data} deleteFunction={remove} editFunction={edit} />
                </div>
            </div>

        </PageModel>
    )
}