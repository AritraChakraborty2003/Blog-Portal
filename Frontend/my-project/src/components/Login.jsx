const Login = () => {
    return (
      <>
        <div className="h-[100vh] max-w-full bg-[#3f53d8] flex justify-center items-center">
          <div className="h-[80vmin] w-[80vmin] bg-[#ffff] flex flex-col rounded-[3vmin]">
              <div className="flex justify-center">
              <h1 className="font-sans text-[7vmin] text-[#3f53d8] font-semibold">Login</h1>
              </div>
            <form action="">
             <div>
              <label htmlFor="Username" className=" font-sans text-[2.5vmin] font-semibold
              mr-[3vmin] ml-[3vmin]">Username:</label>
              <input
                type="text"
                id="LastName"
                placeholder="Enter Username"
                className="h-[6vmin] w-[50vmin] mb-[3vmin] mt-[4vmin] font-sans 
                border-solid border-[0.3vmin] border-gray-200  rounded-[1vmin]
                 focus:outline-none p-2"
              />
               </div>
               <div>
               <label htmlFor="Email"className=" font-sans text-[2.5vmin] font-semibold
              mr-[4.5vmin] ml-[3vmin]">Email id : </label>
              <input
                type="text"
                id="Email"
                placeholder="@gmil.com"
                className="h-[6vmin] w-[50vmin] mb-[3vmin] mt-[4vmin] font-sans 
                border-solid border-[0.3vmin] border-gray-200  rounded-[1vmin]
                focus:outline-none p-2"      
              />
              </div>
              <div>
             <label htmlFor="Password"className=" font-sans text-[2.5vmin] font-semibold
              mr-[4.3vmin] ml-[3vmin]">Password:</label>
              <input
                type="text"
                id="Password"
                placeholder="#!%$...Password"
                className="h-[6vmin] w-[50vmin] mb-[3vmin] mt-[4vmin]  font-sans 
                border-solid border-[0.3vmin] border-gray-200  rounded-[1vmin]
                focus:outline-none p-2"
              />
              </div>
              <div className="flex justify-evenly items-center">
              <button className="bg-[#3f53d8] h-[6vmin] w-[20vmin] rounded-[1.5vmin]
               text-[#ffff] mr-[4vmin] mt-[4.2vmin]"
              >Login</button>
  
              <button  className="bg-[#3f53d8] h-[6vmin] w-[20vmin] rounded-[1.5vmin]
               text-[#ffff] mr-[4vmin] mt-[4.2vmin]"
              >Singup</button>
              </div>   
              <div className="flex justify-center mt-[10vmin]">
              <a href="#" className=" font-sans">Create a new account..?</a>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };
  
  export default Login ;
  