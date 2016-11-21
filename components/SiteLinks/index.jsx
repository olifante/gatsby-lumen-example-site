import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import './style.css'
import '../../static/fonts/fontawesome/style.css'

class SiteLinks extends React.Component {
  render() {
    return (
      <div className="blog-social">
        <ul>
          <li>
            <a href={config.siteTwitterUrl}><i className="fa fa-twitter" /></a>
          </li>
          <li>
            <a href={config.siteGithubUrl}><i className="fa fa-github-alt" /></a>
          </li>
          <li>
            <a href={config.siteVkUrl}><i className="fa fa-vk" /></a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={config.siteEmailUrl}><i className="fa fa-envelope-o" /></a>
          </li>
          <li>
            <a href={config.siteTelegramUrl}><i className="fa fa-paper-plane" /></a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={config.siteRssUrl}><i className="fa fa-rss"></i></a>
          </li>
        </ul>
      </div>
    )
  }
}

export default SiteLinks
