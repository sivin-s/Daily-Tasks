

export const SearchCard = ()=>{
    const url = 'https://shorturl.at/TlfnN'
  return(
    <div className="w-[13rem] border h-[13rem] rounded truncate text-center cursor-pointer">
        <img src={url} alt=""  className="border-2 w-full h-[70%] rounded object-cover"/>
        <h1 className="font-bold text-3xl mt-3">{"hello".repeat(50)}</h1>
    </div>
  )
}