import React from 'react';
import '../../css/Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className='home-parent'>
                <div className='container-fluid home-div'>
                    <div className='row'>
                        <div className='col-md-12 text-center pt-3'>
                            <p><span>No Wallet KYC Required</span> <span>😊</span> <span>to pay using UPI on Paytm</span>.<span>Learn more.</span></p>
                        </div>
                    </div>
                </div>

                <div className='paytm-banner container-fluid p-5'>
                    <div className='row'>
                        <div className='col-md-6 p-5'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <img width="70" className='img-fluid' src='https://assetscdn1.paytm.com/images/catalog/view/310944/1654517453942.png' alt='paytm_logo'></img>
                                </div>
                            </div>
                            <div className='row mt-4 text-div'>
                                <div className='col-md-12'>
                                    <h1>India's Most-loved Payments App</h1>
                                </div>
                            </div>
                            <div className='details-text row'>
                                <div className='col-md-10'>
                                    <p>Recharge & pay bills, book flights & movie tickets, open a savings account, invest in stocks & mutual funds, and do a lot more.</p>
                                </div>
                            </div>

                            <div className='download-btn row mt-4 ps-1'>
                                <div className='col-md-12'>
                                    <button className='pt-2 ps-4 pe-4 pb-2'>Download Paytm App
                                        <span className='apple-logo ps-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                                                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                            </svg>
                                        </span>
                                        <span className='windows-logo ps-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-windows" viewBox="0 0 16 16">
                                                <path d="M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-6 p-5'>
                            <img className='img-fluid' src='https://assetscdn1.paytm.com/images/catalog/view_item/850762/1656568118664.png' alt="phone_logo"></img>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Home
