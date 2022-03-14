import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function Contact(){
    return(
        <div className="font-mono ">
            <Navbar/>
            <div class="flex flex-col items-center font-bold pb-60 px-4">
                <h2 class="text-3xl font-bold">Contact Me!</h2>
                <div class="mt-8 max-w-md py-6 md:py-2 lg:py-6 px-12 rounded-2xl border-4 bg-rose-300 drop-shadow-[0_25px_25px_rgba(251,113,133,0.5)]">
                    <div class="grid grid-cols-1 gap-6">
                        <label class="block">
                            <span class="">Full name:</span>
                            <input
                                type="text"
                                class="
                                    mt-1
                                    block
                                    w-full
                                    rounded-md
                                    bg-rose-200
                                    border-gray-300
                                    shadow-sm
                                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                "
                                placeholder=""
                            />
                        </label>

                        <label class="block">
                            <span class="">Email address:</span>
                            <input
                                type="email"
                                class="
                                    mt-1
                                    block
                                    w-full
                                    rounded-md
                                    bg-rose-200
                                    border-gray-300
                                    shadow-sm
                                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                "
                                placeholder="john@example.com"
                            />
                        </label>
                        <label class="block">
                            <span class="">Message:</span>
                            <textarea
                                class="
                                    mt-1
                                    block
                                    w-full
                                    rounded-md
                                    bg-rose-200
                                    border-gray-300
                                    shadow-sm
                                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                "
                                rows="3"
                            ></textarea>
                        </label>
                        <div class="block">
                            <div class="mt-2">
                                <div>
                                    <label class="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            class="
                                            rounded
                                            border-gray-300
                                            bg-rose-200
                                            text-rose-600
                                            shadow-sm
                                            focus:border-indigo-300
                                            focus:ring
                                            focus:ring-offset-0
                                            focus:ring-indigo-200
                                            focus:ring-opacity-50
                                            "
                                        />
                                        <span class="ml-2">Email me news and special offers</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button class="bg-rose-600 hover:bg-black hover:text-white hover:animate-bounce font-bold py-2 rounded-full " >Submit</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
            
    );
};



