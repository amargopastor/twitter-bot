/* eslint-disable no-unused-vars */
import Twit from 'twit';
import twAuth from './config';

const tw = new Twit(twAuth);

tw.post('statuses/update', { status: 'hello world!' }, (err, data, response) => {
  console.log(data);
});
