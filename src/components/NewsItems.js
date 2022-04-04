// import PropTypes from 'prop-types'
import React, { Component } from "react";

export class NewsItems extends Component {
  // static propTypes = {title,desc}

  render() {

    let {title, desc, imgUrl, pageLink, publishedAt, author} = this.props;

    return (
          <div className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto">
            <a href={pageLink} target="_blank" rel="noopener" className="w-full block h-full">
              <img
                alt="Dummyimg"
                src={!imgUrl?"http://via.placeholder.com/640x360":imgUrl}
                className="h-60 w-full object-cover"
              />
              <div className="bg-white dark:bg-gray-800 w-full p-4">
                <p className="text-indigo-500 text-md font-medium"></p>
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  {!title?'Title not found':title}...
                </p>
                <p className="text-gray-400 dark:text-gray-500 text-md h-auto sm:h-auto md:h-22 lg:h-18">
                  {!desc?'Description not found':desc}...
                </p>
                <p className="text-gray-400 dark:text-gray-500 text-md mt-3">
                {/* <span className="text-black font-semibold capitalize">published :</span> {!publishedAt?'publisher Not found':publishedAt} */}
                <span className="text-black font-semibold capitalize">published :</span> {new Date(publishedAt).toGMTString()}
                </p>
                <p className="text-gray-400 dark:text-gray-500 text-md mt-3">
                <span className="text-black font-semibold capitalize">author :</span> {!author?'Not found':author}
                </p>
                <button className="btn-primary py-2 px-4 mt-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Read more</button>
              </div>
            </a>
          </div>
    );
  }
}

export default NewsItems;
