import React from 'react';
import slack from '../slack.svg';
import Icon from '../Icon.svg';

export default function Button () {
  return (
    <section className="Button-section">
      <div className="links">
        <a href="https://twitter.com/IhuomaAnosike" id="twitter_link">Twitter Link</a>
      </div>
      <div className="links">
        <a href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a>
      </div>
      <div className="links">
        <a href="http://books.zuri.team/" id="books">Zuri Books</a>
      </div>
      <div className="links">
        <a href="https://books.zuri.team/python-for-beginners?ref_id=ibnballo" id="book_python" title="Buy your Python Books">Python Books</a>
      </div>
      <div className="links">
        <a href="https://background.zuri.team" id="pitch" title="Background Check for Coders">Background Check for Coders</a>
      </div>
      <div className="links">
        <a href="https://books.zuri.team/design-rules" id="book_design" title="free design book offered by Zuri">Design Books</a>
      </div>
      <div className="socialSelection">
        <div className="forSlack">
          <img src={slack} alt="slack icon" />
        </div>
        <div className="forGithub">
          <img src={Icon} alt="github icon" />
        </div>
      </div>
    </section>
  )
}

