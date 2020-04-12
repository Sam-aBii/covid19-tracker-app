import React from 'react';
import style from "./App.module.css"
import Cards from "./Components/Cards/Cards";
import Chart from "./Components/Chart/Chart";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import { fetchData } from "./api/index";

class App extends React.Component{
  state = {
    data: {},
  }

  async componentDidMount() {

    const fetcheddata = await fetchData();

    this.setState({data: fetcheddata});

  }
    render() {

      const { data } = this.state;

    return(
      <div className={style.App}>
      <Cards data={ data } />
      <CountryPicker />
      <Chart />
    </div>

    )
  }
}


export default App;
