import Image from 'next/image';
import golddustai from "@/public/images/golddustai.png";
import golddustaimobile from "@/public/images/golddustmobile.png";
import jjwillmin from "@/public/images/jjwillmin.png";
import jjwillminmobile from "@/public/images/jjwillminmobile.png";
import mall from "@/public/images/mall.png"
import mallmobile from "@/public/images/mallmobile.png"

import Link from 'next/link';

function Portfolio() {
    return (
        <div className="my-10">
            <div className=" flex flex-col items-center gap-0 justify-center pb-5">
                <h1 className="text-2xl text-[#FF7F00] text-center justify-self-end">Some Of Our Works</h1>
                <div className="w-20 h-1  bg-secondary rounded"></div>
            </div>
            <div className="flex flex-col gap-10 md:flex-col ">
                <div className="p-5 max-w-[95%] mx-auto">
                    <Link href="https://golddustai.com">
                        <div className="flex gap-5 mx-auto">
                            <Image
                                src={golddustai}
                                alt="golddust AI website"
                                className="mx-auto w-[45%] h-[45%]"
                            />
                            <Image
                                src={golddustaimobile}
                                alt="golddust AI website"
                                className="mx-auto w-[30%] h-[30%]"
                            />

                        </div>
                    </Link>
                    <div className="flex justify-center pt-2 text-center text-green-900">
                        {/* <h3 className="text-primary">Golddust AI</h3> */}
                        <Link href="https://golddustai.com">
                            <button>Live site <i className="fa-solid fa-arrow-right"></i></button>
                        </Link>
                    </div>
                </div>
               {/* jjwillmin */}
                <div className="p-5 max-w-[95%] mx-auto">
                    <Link href="https://j-jwillmin-website.vercel.app/">
                        <div className="flex gap-5 mx-auto">
                            <Image
                                src={jjwillmin}
                                alt="JJWILLMIN website"
                                className="mx-auto w-[45%] h-[45%]"
                            />
                            <Image
                                src={jjwillminmobile}
                                alt="JJWILLMIN website"
                                className="mx-auto w-[30%] h-[30%]"
                            />
                        </div>
                    </Link>
                    <div className="flex justify-center pt-2 text-center text-green-900">
                        {/* <h3 className="text-primary">Golddust AI</h3> */}
                        <Link href="https://j-jwillmin-website.vercel.app/">
                            <button>Live site <i className="fa-solid fa-arrow-right"></i></button>
                        </Link>
                    </div>
                </div>
               
                <div className="p-5 max-w-[95%] mx-auto">
                    <Link href="https://www.jjwillminmalls.com/">
                        <div className="flex gap-5 mx-auto">
                            <Image
                                src={mall}
                                alt="JJWILLMIN website"
                                className="mx-auto w-[45%] h-[45%]"
                            />
                            <Image
                                src={mallmobile}
                                alt="JJWILLMIN website"
                                className="mx-auto w-[30%] h-[30%]"
                            />
                        </div>
                    </Link>
                    <div className="flex justify-center pt-2 text-center text-green-900">
                        {/* <h3 className="text-primary">Golddust AI</h3> */}
                        <Link href="https://www.jjwillminmalls.com/">
                            <button>Live site <i className="fa-solid fa-arrow-right"></i></button>
                        </Link>
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default Portfolio;