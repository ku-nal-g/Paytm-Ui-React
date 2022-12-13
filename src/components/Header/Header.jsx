import { useState } from 'react';
import '../../css/Header.css'

function Header() {
    let headerLogoUrl = "https://assetscdn1.paytm.com/images/catalog/category/5165/paytm_logo.png";
    const [toggle,setToggle] = useState(false);

    const toggleButton = () =>{
        let btn = !toggle;
        setToggle(btn);
    }
    return (
        <div className="header-div">
            {/* overlay div */}
            <div style={{display: toggle ? 'block' : 'none'}} className='overlay'>
                <div className='container-fluid bx-shadow'>
                    <div className="row">
                        <div className='col-md-1 pt-3'>
                            <span onClick={() => toggleButton()} className='toggle-icon'>
                            <i className="fa-solid fa-xmark"></i>
                            </span>
                        </div>
                        <div className='col-md-11'>
                            <img width={'150'} src='https://assetscdn1.paytm.com/images/catalog/category/5165/paytm_logo.png' className='img-fluid' alt='logo'></img>
                        </div>

                    </div>
                </div>
                <div className='container-fluid mt-2'>
                    <div className='row'>
                        <div style={{borderBottom: '1px solid #ddd'}} className='col-md-12 p-2'>
                            <span>Investor Relation</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div style={{borderBottom: '1px solid #ddd'}} className='col-md-12 p-2'>
                            <span>Company</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div style={{borderBottom: '1px solid #ddd'}} className='col-md-12 p-2'>
                            <span>Carrer</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='toggle-btn-div'>
                <span onClick={() => toggleButton()} className='toggle-icon'>
                    <i className="fa-solid fa-bars pt-4"></i>
                </span>
            </div>
            <div className="logo-div">
                <img className='img-fluid' width="220" src={headerLogoUrl} alt="paytm_logo"></img>
            </div>
            <div className="nav-bar mt-2">
                <ul className='p-3'>
                    <li className='me-4'><a className='p-2' href="app">Paytm For Customer</a></li>
                    <li className='me-4'><a className='p-2' href="app">Paytm For Business</a></li>
                    <li className='me-4'><a className='p-2' href="app">Investor Realtions</a></li>
                    <li className='me-4'><a className='p-2' href="app">Company</a></li>
                    <li className='me-4'><a className='p-2' href="app">Career</a></li>
                </ul>
            </div>
            <div className="button-div mt-3">
                <button className='ps-3 pt-1'>Sign In
                    <img className='user img-fluid ps-1' src='https://pwebassets.paytm.com/frontendcommonweb/static/9fd9626b.svg' alt='btn_logo'></img>
                </button>
            </div>
        </div>
    )
}
export default Header