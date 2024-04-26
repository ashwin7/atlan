import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-gray-100 relative top-10 rounded-md bg-gray-100">
            <div
                className="flex m-auto border-t text-gray-800 text-sm flex-col
md:flex-row max-w-6xl"
            >
                <div className="mt-2">Coded by Ashwin Saxena.</div>
                <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                    <a title="Portfolio" href="https://codepen.io/ashwinsaxena/pens/showcase" className="w-6 mx-1">
                            <svg className="inline fill-current cursor-pointer text-gray-500 hover:text-gray-400"
                            width="100%"
                            height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>
                    </a>
                    <a title="Blog" href="https://blog.talkingdev.com/" className="w-6 mx-1">
                            
                    <svg
                    className="inline fill-current cursor-pointer text-gray-500 hover:text-gray-400"
                    width="100%"
                    height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z"/></svg>
                    </a>
                </div>
            </div>
        </div>


    );
};

export default Footer;
