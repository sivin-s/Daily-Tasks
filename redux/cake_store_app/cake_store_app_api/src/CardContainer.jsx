

export const CakeContainer = ()=>(
   
        <div>
            <h2>Number of cakes</h2>
            <button>Buy Cake</button>
        </div>
    
)

const mapStateToProps = state =>{
    return{
        numOfCakes: state.numOfCakes
    }
}
