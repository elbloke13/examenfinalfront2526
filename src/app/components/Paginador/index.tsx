


const Paginador = ({next,prev,pages,page,setPage}: {
    next:boolean,
    prev:boolean,
    page:number,
    pages:number,
    setPage: (page:number) => void
}) => {




return(

    <div className="paginador">
            {prev && <div onClick={()=>{
                setPage(page-1);
            }}><p className="prev">{"<"}</p></div>}
            <h1>{page}</h1>
            {next && <div onClick={()=>{
                setPage(page+1);
            }}><p className="next">{">"}</p></div>}
    </div>

)

}


export default Paginador;