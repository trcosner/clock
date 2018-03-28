import React from 'react';
import styled, { css } from 'react-emotion';
import { MONTH, DAY } from 'constants/index';

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  color: white;
`
const Time = styled('div')`
  font-size: 8em;
  line-height: 95px;

  @media(max-width: 600px){
      font-size: 5em;
      line-height: 56px;
  }
`

const Abbreviation = styled('div')`
  font-size: 2.5em;
  line-height: 40px;
  margin-left: 10px;

  @media(max-width: 600px){
      font-size: 1.5em;
      line-height: 20px;
  }
`

const clockMeta = css`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
`
const clockDetail = css`
  font-weight: 300;
  margin-left: 12px;

  @media(max-width: 600px){
      font-size: .65em;
  }
`

const Clock = props => (
  <Container>
    <Time>
      {props.time.substr(0, props.time.length - 3)}
    </Time>
    <div className={clockMeta}>
      <Abbreviation>
        {props.time.substr(props.time.length - 3)}
      </Abbreviation>
      <div className={clockDetail}>{DAY[props.dayOfWeek]}</div>
      <div className={clockDetail}>{MONTH[props.month] + ' ' + props.date}</div>
      <div className={clockDetail}>{props.year}</div>
    </div>
  </Container>
)

export default Clock;
