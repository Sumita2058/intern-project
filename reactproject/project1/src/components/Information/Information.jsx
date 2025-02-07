import { map, planning, trust } from "../../image";

const Information = () =>{
return(

       
          <div className="grid grid-cols-3 gap-10  text-black items-center justify-between p-20">
         <div className="text-center flex flex-col gap-4">
            <img src={planning} alt="img" className="h-40 w-40 ml-36" />
            <h1 className="font-bold text-lg">seamless travel planning</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta delectus repellat, odit tempora possimus libero, ducimus vitae, quis voluptatibus impedit esse facere sint iusto placeat illum vel expedita reprehenderit beatae?</p>
          </div>
          <div className="text-center flex flex-col gap-4">
            <img src={map} alt="img" className="h-40 w-40 ml-36" />
            <h1 className="text-lg font-bold">toilored experiences</h1>
            <p  className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad, eos dolores laborum dolor placeat repellendus odio eligendi? Quia nam voluptatibus quaerat ipsa odit id architecto nesciunt, corporis explicabo deleniti.</p>
          </div>
          <div className="text-center flex flex-col gap-4">
            <img src={trust} alt="img"  className="h-40 w-40 ml-36"/>
            <h1 className="text-lg font-bold">reliable and trustworthy</h1>
            <p  className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolor, aut facere, at temporibus sapiente ut et consectetur officia laborum tempore optio dolorum inventore ab iusto fugiat culpa? Consequatur, earum.</p>
          </div>
          </div>           
        
    
);
};
export default Information;