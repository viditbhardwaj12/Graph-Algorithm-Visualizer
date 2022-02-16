import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Footer() {
  return (
    <div className='footer'>
      <p>© Vidit Bhardwaj</p>
      <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/vidit-bhardwaj-186993192/')} />
      <GitHubIcon onClick={() => window.open('https://github.com/viditbhardwaj12/Graph-Algorithm-Visualizer')} />
    </div>
  );
}
