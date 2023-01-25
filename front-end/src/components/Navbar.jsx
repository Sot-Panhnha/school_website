import { HiMenuAlt3 } from "react-icons/hi"
import { NavLink } from "react-router-dom"
import { XMarkIcon } from "@heroicons/react/24/outline";
import {useState} from "react";

export default function Navbar() {
    const [ enabled, setEnabled ] = useState(false);
    const handleClick = ()=> setEnabled(!enabled);
    return (
        <div className='max-w-full h-[60px] bg-white drop-shadow relative z-10 fixed sticky top-0'>
            <div className='flex justify-evenly items-center w-full h-full'>
                <div className='flex items-center'>
                    <NavLink to="/">
                        <img
                            className="w-[90px] h-auto sm:w-[120px] md:w-[150px]"
                            src={'http://localhost:1337/uploads/kep_gardens_logo_84754c8e95.png'}
                            alt='School'
                        />
                    </NavLink>
                </div>
                <div className='flex items-center'>
                    <ul className='hidden lg:flex'>
                        <NavLink
                            to='/'
                            className={({ isActive })=>
                                isActive ? 'rounded-lg px-3 py-2 bg-green-100' : 'rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'
                            }
                        >Home</NavLink>
                        <NavLink
                            to='/donate'
                            className={({ isActive })=>
                                isActive ? 'rounded-lg px-3 py-2 bg-green-100' : 'rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'
                            }
                        >Donate</NavLink>
                        <NavLink
                            to='/blog'
                            className={({ isActive })=>
                                isActive ? 'rounded-lg px-3 py-2 bg-green-100' : 'rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'
                            }
                        >Blogs</NavLink>
                        <NavLink
                            to='/volunteer'
                            className={({ isActive })=>
                                isActive ? 'rounded-lg px-3 py-2 bg-green-100' : 'rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'
                            }
                        >Volunteer</NavLink>
                        <NavLink
                            to='/aboutUs'
                            className={({ isActive })=>
                                isActive ? 'rounded-lg px-3 py-2 bg-green-100' : 'rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'
                            }
                        >About Us</NavLink>
                    </ul>
                </div>
                <div className='hidden lg:flex'>
                    <button className='border-none bg-transparent text-black mr-4 hover:text-green-700'>Login</button>
                    <button className='px-4 py-1 bg-green-500 rounded text-white hover:bg-green-900'>Sign Up</button>
                </div>
                <div className='lg:hidden' onClick={handleClick}>
                    {
                        enabled ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ): (
                            <HiMenuAlt3 className="block h-6 w-6" aria-hidden="true" />
                        )
                    }
                </div>
            </div>
            <ul className={enabled ? 'lg:hidden absolute bg-white w-full px-8':'hidden'}>
                <div className="space-y-1 pt-2 pb-5 bg-white rounded-bl-xl rounded-br-xl" >
                    {[
                        ['Home' , '/'],
                        ['Donate', '/donate'],
                        ['Blog', '/blog'],
                        ['Volunteer', '/volunteer'],
                        ['About Us', '/aboutUs']
                    ].map(([title,url])=> (
                        <NavLink to={url}
                                as="a"
                                href='#'
                                className="block border-l-4 border-transparent py-4 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 font-Poppins"
                        >{title}
                        </NavLink>
                    ))}
                    <div className='flex flex-col pt-10'>
                        <button className='border px-5  py-1 bg-transparent text-black mb-5 hover:text-green-700 hover:bg-green-100'>Login</button>
                        <button className='px-5 py-1 bg-green-500 rounded text-white hover:bg-green-900'>Sign Up</button>
                    </div>
                </div>
            </ul>
        </div>
);}

