import React from 'react';
import './../../vendor/bootstrap/css/bootstrap.min.css';
import './../../css/agency.min.css';
import './../../css/style.css';
import Quiz from "./../../quiz/App"

const Reading = ({title, description, links}) => {
  if (links === undefined) {
    links = [null, null, null];
  }

  return (
    <div class="container">
      <section class="page-section" style={{paddingBottom: '0px'}}>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <br />
              <br />
              <h2 class="section-heading text-uppercase">
                Screenreader Lab: Quiz
              </h2>
            </div>
          </div>
        </div>
      </section>
    <Quiz/>
    </div>
  );
};

export default Reading;
