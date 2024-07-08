import { useEffect, useState } from "react"
import { CRUDTable } from "../../Components/CRUDTable"
import { PageModel } from "../../Components/PageModel"

export const CreateTest = ()=>{
    const dataList : Array<object> =[{
        id:1,
        name:'Cy Ganderton',
        role: 'gerente',
        color:'blue'

    },{
        id:2,
        name:'Cy Ganderton',
        role: 'gerente',
        color:'blue'

    },{
        id:3,
        name:'Dy Ganderton',
        role: 'gerente',
        color:'blue'

    },
]
    const [data, setData] = useState(dataList);

    const remove = (element : any)=>{
        setData(data.filter(e=> e['id' as keyof object] != element))

    }
    const edit = (element: any)=>{
        console.log(element);

    }
    return(
        <PageModel>
            <div className="bg-[#d9d9d9] w-full h-full rounded-3xl flex flex-col p-7">
                <a className="text-6xl text-black ml-10">Cadastro de testes</a>
                <div className=""></div>
                <CRUDTable data={data} deleteFunction={remove} editFunction={edit}/>
            </div>
        </PageModel>
    )
}