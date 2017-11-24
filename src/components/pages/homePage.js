import React, { Component } from 'react';
import  Header from "../../components/headerComponent/header";
import  Footer from "../../components/footerComponent/footer";
//Component
class Homepage extends Component {
    render() {
         return (
            <div className = "wrap">
  <Header/>
              <h1>HOME PAGE</h1>
              <p>
                Days after Catalonia's unilateral declaration of independence, India said today that issues of identity and culture are best addressed within the constitutional framework and with respect for national integrity.

In response to a question on Catalonia's unilateral declaration of independence ministry of external affairs spokesperson Raveesh Kumar said, "We have noted the negative global reaction to this development. Neither Europe nor the world would benefit from instability."

"As a country that values and fosters unity in diversity, India would urge that issues of identity and culture are best addressed within the constitutional framework and with respect for national integrity," he said.

Catalonia's regional parliament proclaimed independence from Spain in a secret ballot on Friday. The Spanish government dissolved the legislature, fired the government and regional police chief and called a new election for December 21. -- PTI
22:32  Saudi Arabia to extract uranium for 'self-sufficient' nuclear program:
Saudi Arabia plans to extract uranium domestically as part of its nuclear power program and sees this as a step towards "self-sufficiency" in producing atomic fuel, a senior official said on Monday.

Extracting its own uranium also makes sense from an economic point of view, said Hashim bin Abdullah Yamani, head of the Saudi government agency tasked with the nuclear plans, the King Abdullah City for Atomic and Renewable Energy
              </p>
              <Footer/>
            </div>
           
          );
    }
}

export default Homepage;
