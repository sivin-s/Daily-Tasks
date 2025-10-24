import { useEffect, useMemo, useState, useCallback } from 'react'
import debounce from 'lodash.debounce' // debounce library
import { SearchCard } from '../searchBar/SearchCard'

export const SearchBar = () => {
    //   state
    const [searchResults, setSearchResults] = useState([])
    const [query, setQuery] = useState('')
    const [isLoading, setIsLoading] = useState(false)
   
    const handleSearch = useCallback((searchQuery) => {
        if (searchQuery.trim()) {
            setIsLoading(true);
            fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
            .then(res=> res.json())
            .then(data =>{
                 setSearchResults([...data.products])
            })
            .catch(console.error)
            .finally(() => setIsLoading(false));
        } else {
            setSearchResults([]);
            setIsLoading(false);
        }
    }, []);

    const debouncedSearch = useMemo(  
        ()=> debounce(handleSearch, 500), // debounce creates new function with delay  and return it 
    [handleSearch]); 
    
    useEffect(()=>{
        debouncedSearch(query);
        return(()=>{
            debouncedSearch.cancel() // that why we cleanup each time useEffect run 
        })
    },[query, debouncedSearch])

 
  
    return (
        <div>
            {/*  modal */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box absolute! top-28 h-[27rem]">
                    <input type="search" name="" id="" className="border-2 w-full h-[2.8rem] rounded  px-7"
                     value={query}
                     onChange={(e) => setQuery(e.target.value)}
                     placeholder='search....'
                    />
                    <div className="border h-[16rem] mt-4 text-center">
                        
                          {
                              Array.isArray(searchResults) && searchResults.length > 0 ? (
                                <div className="h-full w-full flex items-center justify-start flex-nowrap overflow-x-auto gap-4 p-2">
                                    {searchResults.map((product) => (
                                        <div key={product.id} className="flex-shrink-0">
                                            <SearchCard product={product} />
                                        </div>
                                    ))}
                    </div>
                    ) : (<h1 className='text-3xl font-bold mt-12'>{
                        isLoading ? 'Loading.....' : 'no results found'
                    }</h1>)
                     
                          }
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
        </div>
    </dialog >
    {/* ....  */ }
        </div >
    )
}