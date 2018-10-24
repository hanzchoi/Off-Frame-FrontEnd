import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import './AboutPage.css'

class AboutPage extends Component {
  render(){
    return(
      <div className="about-page">
        <div className="title">
          <p>ABOUT</p>
        </div>

        <Image src='https://res.cloudinary.com/dbgp0ijfb/image/upload/v1540414312/off-frame-coverpage/0.TEAM.jpg' size='big' wrapped />

        <div className="about">
          <p>
            OFF FRAME STUDIO was founded by Leslie Chang and Josseline Chang in 2017. It is currently based on a fashion design studio in Taipei.
          </p>

          <p>
            With the concepts ''Out off frame & return back slow fashion”, <strong>leading plus-size women</strong> to be out off their stereotypes, break the myths and to be themselves, to be a trendsetter.
          </p>

          <p>
            Our clothing is exquisite and focus on details, we provide simple, natural, comfort and fashionable design for commuters, office-workers, we select kinds of fabric from Taiwan and Japan, 100% made in Taiwan.

          </p>
          <p>
            The main designer - Josseline Chang, was graduted from Esmod international fashion university group - Paris, 2016, who had work extence experience of fashion industry in Paris and New York, specialize in assembling oriental and western aesthetics of design and flowing cutting present.
          </p>

        </div>
      </div>
    )
  }
}

export default AboutPage;
