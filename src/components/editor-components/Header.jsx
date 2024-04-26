import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex">
    <div className='flex justify-center gap-2 w-fit'>
      <div className='logo'>
        <Link to='/'>
          <img src='sql.png' width='50vw' height='100%' alt='atlan logo' />
        </Link>
      </div>
      <div className="heading text-3xl font-bold m-auto">
        Query Runner
      </div>
    </div>
    </div>

  );
};

export default Header;
