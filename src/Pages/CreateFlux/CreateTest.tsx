import { useState } from "react";
import { PageModel } from "../../Components/PageModel";
import { PiPlus } from "react-icons/pi";
import { CRUDTable } from "../../Components/CRUDTable";
import { LateralMenu } from "../../Components/LateralMenu";

type formData = {
    id_teste: number,
    operador: string,
    regime_escoamento: string,
    rugosidade: string,
    coeficiente: string,
    metodo_teste: string,
    ph_solucao: string,
    data_inicio: string,
    data_fim: string,
    id_solucao: number,
    id_solucao_limpeza: number,
    id_metodo_in: number,
    id_metodo_pr: number,
    id_ferramenta_us: number,
}
export const CreateTest = () => {
    const dataList: Array<formData> = [{
        id_teste: 1,
        operador: "operador 1",
        regime_escoamento: "Regime 1",
        rugosidade: "rugosidade 1",
        coeficiente: "coeficiente 1",
        metodo_teste: "metodo_teste 1",
        ph_solucao: "ph_solucao 1",
        data_inicio: "2024-07-10T12:00:00",
        data_fim: "2024-07-10T14:00:00",
        id_solucao: 1,
        id_solucao_limpeza: 1,
        id_metodo_in: 1,
        id_metodo_pr: 1,
        id_ferramenta_us: 1

    },]
    const [data, setData] = useState(dataList);
    const [dataForm, setDataForm] = useState<formData>();

    const remove = (element: any) => {
        setData(data.filter(e => e['id_metodo' as keyof object] != element));

    }
    const edit = (element: any) => {
        let retorno: formData | undefined = dataList.find(e => e.id_teste == element);
        if (retorno) {
            document.getElementById("modalButton")?.click();
            console.log();
            setDataForm(retorno)
        }
    }
    const submitForm = (form: any) => {
        form.preventDefault();
        let retorno: formData = {
            id_teste: form.target[0].value,
            operador: form.target[1].value,
            regime_escoamento: form.target[2].value,
            rugosidade: form.target[3].value,
            coeficiente: form.target[4].value,
            metodo_teste: form.target[5].value,
            ph_solucao: form.target[6].value,
            data_inicio: form.target[7].value,
            data_fim: form.target[8].value,
            id_solucao: form.target[9].value,
            id_solucao_limpeza: form.target[10].value,
            id_metodo_in: form.target[11].value,
            id_metodo_pr: form.target[12].value,
            id_ferramenta_us: form.target[13].value
        }

        if (dataList.find(e => e.id_teste == form.target[0].value)) {
            setData(data.map(e => e.id_teste == retorno?.id_teste ? retorno : e))
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
                <div className="modal-box flex-col  flex items-center">
                    <form id='ModalForm' className=" form-control rounded-xl p-10" onSubmit={(form) => { submitForm(form) }}>
                        <h3 className="text-lg font-bold mb-10 self-center">Cadastro de Ferramenta Us</h3>
                        <label className="input input-bordered text-white  bg-white flex items-center gap-2 mb-5">
                            id_teste |
                            <input type="text" className="grow text-white" placeholder="..." defaultValue={dataForm?.id_teste} disabled/>
                        </label>

                        <label className="input input-bordered text-gray-400 bg-white flex items-center gap-2 mb-5">
                            operador |
                            <input type="text" className="grow text-black" placeholder="..." defaultValue={dataForm?.operador} required />
                        </label>

                        <label className="input input-bordered text-gray-400 bg-white flex items-center gap-2 mb-5">
                            regime_escoamento |
                            <input type="text" className="grow text-black" placeholder="..." defaultValue={dataForm?.regime_escoamento} required />
                        </label>

                        <label className="input input-bordered text-gray-400 bg-white flex items-center gap-2 mb-5">
                            rugosidade |
                            <input type="text" className="grow text-black" placeholder="..." defaultValue={dataForm?.rugosidade} required />
                        </label>

                        <label className="input input-bordered text-gray-400 bg-white flex items-center gap-2 mb-5">
                            coeficiente |
                            <input type="text" className="grow text-black" placeholder="..." defaultValue={dataForm?.coeficiente} required />
                        </label>

                        <label className="input input-bordered text-gray-400 bg-white flex items-center gap-2 mb-5">
                            metodo_teste |
                            <input type="text" className="grow text-black" placeholder="..." defaultValue={dataForm?.metodo_teste} required />
                        </label>

                        <label className="input input-bordered text-gray-400 bg-white flex items-center gap-2 mb-5">
                            ph_solucao |
                            <input type="text" className="grow text-black" placeholder="..." defaultValue={dataForm?.ph_solucao} required />
                        </label>

                        <label className="input input-bordered text-gray-400 bg-white flex items-center gap-2 mb-5">
                            data_inicio |
                            <input type="text" className="grow text-black" placeholder="..." defaultValue={dataForm?.data_inicio} required />
                        </label>

                        <label className="input input-bordered text-gray-400 bg-white flex items-center gap-2 mb-5">
                            data_fim |
                            <input type="text" className="grow text-black" placeholder="..." defaultValue={dataForm?.data_fim} required />
                        </label>

                        <label className="input input-bordered text-gray-400 bg-white flex items-center gap-2 mb-5">
                            id_solucao |
                            <input type="text" className="grow text-black" placeholder="..." defaultValue={dataForm?.id_solucao} required />
                        </label>

                        <label className="input input-bordered text-gray-400 bg-white flex items-center gap-2 mb-5">
                            id_solucao_limpeza |
                            <input type="text" className="grow text-black" placeholder="..." defaultValue={dataForm?.id_solucao_limpeza} required />
                        </label>

                        <label className="input input-bordered text-gray-400 bg-white flex items-center gap-2 mb-5">
                            id_metodo_in |
                            <input type="text" className="grow text-black" placeholder="..." defaultValue={dataForm?.id_metodo_in} required />
                        </label>

                        <label className="input input-bordered text-gray-400 bg-white flex items-center gap-2 mb-5">
                            id_metodo_pr |
                            <input type="text" className="grow text-black" placeholder="..." defaultValue={dataForm?.id_metodo_pr} required />
                        </label>

                        <label className="input input-bordered text-gray-400 bg-white flex items-center gap-2 mb-5">
                            id_ferramenta_us |
                            <input type="text" className="grow text-black" placeholder="..." defaultValue={dataForm?.id_ferramenta_us} required />
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
                        <a className="text-2xl text-black font-semibold">Testes</a>
                        <label id="modalButton" htmlFor="my_modal_6" className="hover:bg-green-500 transition-all hover:w-16 btn btn-circle btn-outline border-black text-black"><PiPlus /></label>
                    </div>
                    <CRUDTable idColumnName='id_teste' data={data} deleteFunction={remove} editFunction={edit} />
                </div>
            </div>

        </PageModel>
    )
}