import React, { Component } from "react";
import logo from '../images/logo192.png'
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export class Navbar extends Component {
// static propTypes = {}
  render() {
    return (
      <>
        <nav className="bg-gray-800 sticky top-0 z-10">
          <div className="container mx-auto">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                  <span className="pl-2 text-white">News app</span>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <Link onClick={this.updateClass} to="/" className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' aria-current="page" >Home</Link>
                    <Link to="/business" className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' >Business</Link>
                    <Link to="/entertainment" className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' >Entertainment</Link>
                    <Link to="/general" className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' >General</Link>
                    <Link to="/health" className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' >Health</Link>
                    <Link to="/science" className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' >Science</Link>
                    <Link to="/sports" className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' >Sports</Link>
                    <Link to="/technology" className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' >Technology</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
