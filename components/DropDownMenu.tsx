import React, { FC, useState } from 'react';
import '../styles/globals.css';
import Btn from './Button';
import { Menu, X } from "lucide-react";

interface Props {

}

const DropDownMenu: FC<Props> = ({ }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <button className='lg:hidden flex item-center justify-center p-2 text-gray-700'
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {menuOpen && (
                <div className='lg:hidde absolute top-20 left-0 w-full  bg-white shadow-lg flex flex-col items-center gap-1 py-6 n z-50'>
                    <Btn text="Home" />
                    <Btn text="Courses" />
                    <Btn text="Live Batches" />
                    <Btn text="Teachers" />
                    <Btn text="About" />
                    <Btn text="Contact" />
                    <Btn text="Language" variant="outline" />
                    <Btn text="Login" />
                    <Btn text="Sign Up" variant="filled" />
                </div>
            )}
        </>
    );
};

export default DropDownMenu;