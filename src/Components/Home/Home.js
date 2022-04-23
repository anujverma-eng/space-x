import React, { Fragment, useEffect, useState } from 'react';
import LaunchCard from '../LaunchCard/LaunchCard';
import Loader from '../Loader/Loader';
import './Home.css';

const Home = () => {

  const [data, setData] = useState();
  const [launchSuccess, setLaunchSuccess] = useState(false);
  const [landSuccess, setLandSuccess] = useState(false);
  const [launchYear, setLaunchYear] = useState("");
  const [loading, setLoading] = useState(true);
  // const [style,setStyle] = useState();

  useEffect(() => {
    const fetchAPIData = async () => {
      setLoading(true);
      let url = `https://api.spacexdata.com/v3/launches?limit=100${launchYear !== "" ? `&launch_year=${launchYear}` : ``}${launchSuccess ? `&launch_success=${launchSuccess}` : ``}${landSuccess ? `&land_success=${landSuccess}` : ``}`;
      console.log(url);
      let res = await fetch(url);
      let api_data = await res.json();
      setData(api_data);
      setLoading(false);
    };

    fetchAPIData().catch(console.error);

  }, [launchYear, launchSuccess, landSuccess]);

  const handleYearClick = (e) => {
    setLaunchYear(e.target.value);
    // e.target.value === launchYear && e.target.setAttribute('style', 'background-color: green;');
  };
  const handleLaunchClick = (e) => {
    setLaunchSuccess(e.target.value);
  };
  const handleLandClick = (e) => {
    setLandSuccess(e.target.value);
  };

  const handleClearClick = (e) => {
    setLaunchYear("");
    setLaunchSuccess("");
    setLandSuccess("");
  };


  return (
    <div className="container">
      <header className="mb-5">
        <nav>
          <h1>SpaceX Launch Programs</h1>
        </nav>
      </header>
      <section className="flex sectionDiv mb-5">
        <div className="filter b-radius height w-30">
          <h3 className="mb-5">Filters</h3>
          <div className="mb-5">
            <div className="f-5">Launch Year</div>
            <hr className="mb-5" />
            <div className="flex justify-content align-center gap mb-5">
              <button onClick={handleYearClick} value="2006" style={launchYear === "2006" ? { backgroundColor: "green" } : {}}>2006</button>
              <button onClick={handleYearClick} value="2007" style={launchYear === "2007" ? { backgroundColor: "green" } : {}}>2007</button>
            </div>
            <div className="flex justify-content align-center gap mb-5">
              <button onClick={handleYearClick} value="2008" style={launchYear === "2008" ? { backgroundColor: "green" } : {}}>2008</button>
              <button onClick={handleYearClick} value="2009" style={launchYear === "2009" ? { backgroundColor: "green" } : {}}>2009</button>
            </div>
            <div className="flex justify-content align-center gap mb-5">
              <button onClick={handleYearClick} value="2010" style={launchYear === "2010" ? { backgroundColor: "green" } : {}}>2010</button>
              <button onClick={handleYearClick} value="2011" style={launchYear === "2011" ? { backgroundColor: "green" } : {}}>2011</button>
            </div>
            <div className="flex justify-content align-center gap mb-5">
              <button onClick={handleYearClick} value="2012" style={launchYear === "2012" ? { backgroundColor: "green" } : {}}>2012</button>
              <button onClick={handleYearClick} value="2013" style={launchYear === "2013" ? { backgroundColor: "green" } : {}}>2013</button>
            </div>
            <div className="flex justify-content align-center gap mb-5">
              <button onClick={handleYearClick} value="2014" style={launchYear === "2014" ? { backgroundColor: "green" } : {}}>2014</button>
              <button onClick={handleYearClick} value="2015" style={launchYear === "2015" ? { backgroundColor: "green" } : {}}>2015</button>
            </div>
            <div className="flex justify-content align-center gap mb-5">
              <button onClick={handleYearClick} value="2016" style={launchYear === "2016" ? { backgroundColor: "green" } : {}}>2016</button>
              <button onClick={handleYearClick} value="2017" style={launchYear === "2017" ? { backgroundColor: "green" } : {}}>2017</button>
            </div>
            <div className="flex justify-content align-center gap mb-5">
              <button onClick={handleYearClick} value="2018" style={launchYear === "2018" ? { backgroundColor: "green" } : {}}>2018</button>
              <button onClick={handleYearClick} value="2019" style={launchYear === "2019" ? { backgroundColor: "green" } : {}}>2019</button>
            </div>
            <div className="flex justify-content align-center gap mb-5">
              <button onClick={handleYearClick} value="2020" style={launchYear === "2020" ? { backgroundColor: "green" } : {}}>2020</button>
            </div>
          </div>
          <div className="mb-5">
            <div className="f-5">Successful Launch</div>
            <hr className="mb-5" />
            <div className="flex justify-content align-center gap mb-5">
              <button onClick={handleLaunchClick} value="true" style={launchSuccess === "true" ? { backgroundColor: "green" } : {}}>True</button>
              <button onClick={handleLaunchClick} value="false" style={launchSuccess === "false" ? { backgroundColor: "green" } : {}}>False</button>
            </div>
          </div>
          <div className="mb-5">
            <div className="f-5">Successful Landing</div>
            <hr className="mb-5" />
            <div className="flex justify-content align-center gap mb-5">
              <button onClick={handleLandClick} value="true" style={landSuccess === "true" ? { backgroundColor: "green" } : {}}>True</button>
              <button onClick={handleLandClick} value="false" style={landSuccess === "false" ? { backgroundColor: "green" } : {}}>False</button>
            </div>
          </div>
          <div className="mb-5">
            <div className="f-5">Clear Filters</div>
            <hr className="mb-5" />
            <div className="flex justify-content align-center gap mb-5">
              <button onClick={handleClearClick} value="clear">Clear Filters</button>
            </div>
          </div>
        </div>
        <div className="card-container flex justify-content align-center b-radius gap row-wrap w-70">
          {(data && !loading) ? data.map((element, idx) => {
            return (<LaunchCard element={element} key={idx} />);
          })
            :
            <Loader />
          }
        </div>
      </section>
      <section className="flex justify-content align-center">
        <h4><strong>Developed By: Anuj Verma</strong></h4>
      </section>
    </div>

  );
};

export default Home;