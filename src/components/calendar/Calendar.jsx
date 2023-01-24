import React from 'react';
import moment from 'moment';
import * as sheduleActions from './shedule.actions';

import './calendar.scss';
import { sheduleSelector } from '../shedule/shedule.selectors';

const Calendar = () => {
  const date = new Date();
  return (
    <>
      <div className="calendar">
        <div>
          <div>{moment(date).format('DD/MM')}</div>
          <input type="date" />
        </div>
        <div className="calendar__item">
          <div>{moment(date).subtract(1, 'days').format('DD/MM')}</div>
          <span className="calendar__item-text">ВЧОРА</span>
        </div>
        <div className="calendar__item">
          <div>{moment(date).format('DD/MM')}</div>
          <span className="calendar__item-text">СЬОГОДНІ</span>
        </div>
        <div className="calendar__item">
          <div>{moment(date).add(1, 'days').format('DD/MM')}</div>
          <span className="calendar__item-text">ЗАВТРА</span>
        </div>
      </div>
      <ul></ul>
    </>
  );
};

const mapState = (state) => {
  return {
    shedule: sheduleSelector,
  };
};

const mapDispatch = {
  getShedule: sheduleActions.getSheduleAction,
};

export default connect(mapState, mapDispatch)(Calendar);