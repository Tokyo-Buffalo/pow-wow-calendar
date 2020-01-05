import React from 'react';
import { Form, Row, Col, Input, Button, Icon } from 'antd';
import { HeroHeader } from '../components/HeroHeader';
import './SingleEvent.css';

export const SingleEvent = () => (
  <div className="singleEventContentWrapper">
    <HeroHeader />
    <Row type="flex" justify="center">
      <Col span={10}>
        <h2>Little Shell - Elders and Veterans Traditional Pow-wow</h2>
        <div className="avatarMetaSectionWrapper">
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
          <div className="dateWrapper">
            <p className="singleEventSectHeading">Date:</p>
            <p>01/02/2020 - 01/04/2020</p>
          </div>
          <div className="contactWrapper">
            <p className="singleEventSectHeading">Contact</p>
            <div>
              <p>Gregory Dinkleburg</p>
              <p><span className="phone"></span>301-515-6489</p>
              <p><span className="email"></span>idnoingiond@gmail.com</p>
            </div>
          </div>
          <div className="websiteWrapper">
            <p className="singleEventSectHeading">Website</p>
            <p><a href="#">www.thisisawebsite.com</a></p>
          </div>
        </div>
        <div className="descriptionSectionWrapper">
          <div className="description">
            <p className="singleEventSectHeading">Description</p>
            <p>The 36th Annual Roy Track Memorial Mesa Pow Wow on October 25-27, 2019 will be at Riverview Park in Mesa, Arizona. This Pow Wow is dedicated to the memory of the late Roy Track, organizer and emcee of the event since its inception in 1984. The Roy Track Memorial Mesa Pow Wow is an inter-tribal Native American gathering that is open to all. Although there are dance competitions in a number of categories on Saturday and Sunday for men, women, and children, the focus is on intertribal dancing and the social nature of the event.
              <br></br>
              Visitors will enjoy the dozens of Native American arts vendors, as well as authentic Indian food. Friday night there is a contemporary concert from 7:00 p.m. – 10:00 p.m. (no competition dancing).
              <br></br>
              Admission to the Pow Wow is FREE of charge. The Pow Wow is sponsored by 21st Century Native American and the City of Mesa Parks and Recreation Division providing the venue.
              <br></br>
              Free Admission – Everyone Welcome!
              <br></br>
              Friday night is a contemporary concert from 7:00 p.m. – 10:00 p.m. (no competition dancing)
              <br></br>
              Saturday
              Hours: 11:00 a.m. – 10:00 p.m.
              Gourd Dancing: 11:00 a.m. & 5:00 p.m.
              Grand Entry: 1:00 p.m. & 7:00 p.m.
              <br></br>
              Sunday
              Hours: 11:00 a.m. – 5:00 p.m.
              Gourd Dancing: 11:00 .a.
              Grand Entry: 1:00 p.m.
              <br></br>
              Pow Wow Head Staff
              Master of Ceremonies: Dennis Bowen
              Arena Director: Colby Afraidofhistracks
              Host Northern Drum: TBA
              Host Southern Drum: Chri Dinedeal
            </p>
          </div>
          <div className="locationWrapper">
            <p className="singleEventSectHeading">Location:</p>
            <p>Mesa Riverview Park <br></br>
              860 N Riverview<br></br>
              Mesa, AZ 85201
            </p>
          </div>
          <div className="mapArea">THIS IS A MAP AREA</div>
        
        </div>
      </Col>
    </Row>
  </div>
);
