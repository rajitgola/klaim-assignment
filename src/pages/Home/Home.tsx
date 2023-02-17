import { useEffect, useState } from 'react';
import { getCompanyInfo } from '../../services';
import { IAPIResponse } from '../../shared/models';
import "./Home.scss";

const Home = () =>  {

    const [companyInfo, setCompanyInfo] = useState<string>("Some information about the <b>company</b>.");

    useEffect(() => {
      fetchCompanyInfo();
    }, []);
    
    const fetchCompanyInfo = () => {
        getCompanyInfo().then((res : IAPIResponse<{info : string}>) => {
            setCompanyInfo(res.data.info);
        });
    }

    return (
        <section className="home-container">
            <div className="title-container">
                <h1 style={{fontSize : '2rem'}}> Company Home  </h1>
                <div dangerouslySetInnerHTML={{__html : companyInfo}}>
                </div>
            </div>
        </section>
    )
}

export default Home;