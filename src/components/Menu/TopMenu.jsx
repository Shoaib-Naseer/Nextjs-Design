import './topmenu.css';
const TopMenu = () => {
  return (
    <>
      <div className="top-menu d-flex  justify-content-between align-items-center">
        <div className='menu-items'>
          <label className="text-gray" htmlFor='checkIn'>Check in</label>
          <input type='date' className='fw-bold' id='checkIn' />
        </div>

        <div className='menu-items'>
        <label className="text-gray" htmlFor='checkOut'>Check out</label>
          <input type='date' className='fw-bold' id='checkOut' />
        </div>

        <div className='menu-items'>
          <p className="text-gray ">Who</p>
          {/* <p className='fw-bold'>2 Adults & 1 Kid</p> */}
          <select className="form-select" aria-label="Default select example">
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </div>
        <button className='btn btn-dark'>
            Search
        </button>
      </div>
    </>
  );
};

export default TopMenu;
