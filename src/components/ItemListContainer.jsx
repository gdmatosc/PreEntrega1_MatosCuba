function ItemListContainer(props) {
    return ( 
        <div>
            <div className="seccion1">

                <br/>

                <h1 className="text-3xl font-bold text-yellow-500" >
                  Inicio</h1>

                <br/> 

                <h2 className="text-2xl font-bold">
                  {props.text} </h2>

                <br/> 

            </div>

            <div className="seccion2">

              <br/>

              <p>
                En construcción </p>
                
            </div>
        </div>
        
     )
}

export default ItemListContainer;